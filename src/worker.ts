export default {
    async fetch(request: Request, env: { ASSETS: { fetch: (req: Request) => Promise<Response> } }) {
        const url = new URL(request.url);

        // Dejamos pasar assets con extensión (css/js/png/svg/etc.)
        const hasExtension = url.pathname.split("/").pop()?.includes(".") ?? false;
        if (hasExtension) return env.ASSETS.fetch(request);

        // Intentos típicos de hosting estático “tipo Pages”:
        // 1) /ruta/      -> /ruta/index.html
        // 2) /ruta       -> /ruta/index.html
        // 3) /ruta       -> /ruta.html   (por si existiera)
        const candidates: string[] = [];

        if (url.pathname.endsWith("/")) {
            candidates.push(url.pathname + "index.html");
        } else {
            candidates.push(url.pathname + "/index.html");
            candidates.push(url.pathname + ".html");
        }

        // Probar candidatos
        for (const path of candidates) {
            const tryUrl = new URL(request.url);
            tryUrl.pathname = path;

            const res = await env.ASSETS.fetch(new Request(tryUrl.toString(), request));
            if (res.status !== 404) return res;
        }

        // Finalmente, intenta el request original (por ejemplo "/" -> "/index.html" ya existe)
        return env.ASSETS.fetch(request);
    }
};
