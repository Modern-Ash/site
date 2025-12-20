# Configuración de Email con Cloudflare

## Email Routing de Cloudflare

Ya tienes configurado Email Routing en Cloudflare para el dominio `modern-ash.com`. Los emails configurados son:

- **sales@modern-ash.com** - Para consultas de ventas y PoCs
- **info@modern-ash.com** - Para información general

## Configuración del Formulario de Contacto

El formulario de contacto del sitio web está configurado para:

1. Mostrar ambas direcciones de email en la página de contacto
2. Preparar los datos para envío a `sales@modern-ash.com`
3. Incluir toda la información del formulario en formato estructurado

## Opciones de Implementación

### Opción 1: Email Routing Directo (Más Simple)

Con Email Routing de Cloudflare, los usuarios pueden escribir directamente a las direcciones de email y tú recibirás los mensajes en tu bandeja de entrada configurada.

**Ventajas:**
- Sin código adicional necesario
- Configuración simple en el dashboard de Cloudflare
- Gratuito

**Desventajas:**
- El usuario debe escribir el email manualmente
- No hay integración directa con el formulario web

### Opción 2: Cloudflare Workers + Email API (Recomendado)

Usa Cloudflare Workers para procesar el formulario y enviar emails programáticamente.

**Pasos:**

1. **Configurar Cloudflare Worker:**
   - Ve a Workers & Pages en tu dashboard de Cloudflare
   - Crea un nuevo Worker con el código en `src/worker.ts`
   - Configura la ruta: `https://modern-ash.com/api/send-email`

2. **Agregar credenciales (si usas SendGrid):**
   - En el Worker, agrega la variable de entorno `SENDGRID_API_KEY`
   - O configura otro servicio de email (AWS SES, Mailgun, etc.)

3. **Actualizar el formulario:**
   - Descomentar las líneas del fetch en `contacto.astro` y `en/contact.astro`
   - Cambiar la URL a tu endpoint de Worker

### Opción 3: Integración con SendGrid/MailerSend

Si prefieres usar un servicio dedicado de email:

1. Crear cuenta en SendGrid o MailerSend
2. Verificar el dominio `modern-ash.com`
3. Obtener API key
4. Usar el código del Worker o crear función serverless

## Configuración Actual

Actualmente el sitio está configurado para:
- ✅ Mostrar las direcciones de email correctas
- ✅ Preparar los datos del formulario
- ⏳ Simular el envío (necesitas activar una de las opciones arriba)

## Siguiente Paso Recomendado

1. Configurar Email Routing en Cloudflare para recibir emails en tu inbox
2. Los usuarios pueden escribir directamente a `sales@modern-ash.com`
3. Opcionalmente, implementar el Worker para integración completa del formulario

## Dominio

Recuerda que el dominio es: **modern-ash.com** (con guión)

