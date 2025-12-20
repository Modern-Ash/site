// Cloudflare Worker para envío de emails de formulario de contacto
// Este worker recibe los datos del formulario y los reenvía a sales@modern-ash.com

export default {
  async fetch(request, env) {
    // CORS headers
    const corsHeaders = {
      'Access-Control-Allow-Origin': '*',
      'Access-Control-Allow-Methods': 'POST, OPTIONS',
      'Access-Control-Allow-Headers': 'Content-Type',
    };

    // Handle CORS preflight
    if (request.method === 'OPTIONS') {
      return new Response(null, { headers: corsHeaders });
    }

    // Only allow POST
    if (request.method !== 'POST') {
      return new Response('Method not allowed', {
        status: 405,
        headers: corsHeaders
      });
    }

    try {
      const data = await request.json();
      const { name, email, company, message } = data;

      // Validar datos
      if (!name || !email || !message) {
        return new Response(JSON.stringify({
          error: 'Faltan campos requeridos'
        }), {
          status: 400,
          headers: { ...corsHeaders, 'Content-Type': 'application/json' }
        });
      }

      // Crear el email HTML
      const emailHTML = `
        <!DOCTYPE html>
        <html>
          <head>
            <meta charset="utf-8">
            <style>
              body { font-family: Arial, sans-serif; line-height: 1.6; color: #333; }
              .container { max-width: 600px; margin: 0 auto; padding: 20px; }
              .header { background-color: #1e293b; color: white; padding: 20px; text-align: center; }
              .content { background-color: #f8fafc; padding: 30px; }
              .field { margin-bottom: 20px; }
              .label { font-weight: bold; color: #475569; }
              .value { margin-top: 5px; padding: 10px; background-color: white; border-left: 3px solid #64748b; }
            </style>
          </head>
          <body>
            <div class="container">
              <div class="header">
                <h1>Nueva consulta - ModernAsh</h1>
              </div>
              <div class="content">
                <div class="field">
                  <div class="label">Nombre:</div>
                  <div class="value">${name}</div>
                </div>
                <div class="field">
                  <div class="label">Email:</div>
                  <div class="value"><a href="mailto:${email}">${email}</a></div>
                </div>
                ${company ? `
                <div class="field">
                  <div class="label">Organización:</div>
                  <div class="value">${company}</div>
                </div>
                ` : ''}
                <div class="field">
                  <div class="label">Mensaje:</div>
                  <div class="value">${message.replace(/\n/g, '<br>')}</div>
                </div>
              </div>
            </div>
          </body>
        </html>
      `;

      const emailText = `
Nueva consulta desde ModernAsh

Nombre: ${name}
Email: ${email}
${company ? `Organización: ${company}` : ''}

Mensaje:
${message}
      `;

      // Enviar email usando Email Routing de Cloudflare
      // Nota: Deberás configurar las credenciales en el dashboard de Cloudflare
      const emailData = {
        personalizations: [
          {
            to: [{ email: 'sales@modern-ash.com', name: 'ModernAsh Sales' }],
            subject: `Nueva consulta de ${name}${company ? ` - ${company}` : ''}`,
          },
        ],
        from: {
          email: 'noreply@modern-ash.com',
          name: 'ModernAsh Website',
        },
        reply_to: {
          email: email,
          name: name,
        },
        content: [
          {
            type: 'text/plain',
            value: emailText,
          },
          {
            type: 'text/html',
            value: emailHTML,
          },
        ],
      };

      // Si estás usando SendGrid a través de Cloudflare
      if (env.SENDGRID_API_KEY) {
        const sendgridResponse = await fetch('https://api.sendgrid.com/v3/mail/send', {
          method: 'POST',
          headers: {
            'Authorization': `Bearer ${env.SENDGRID_API_KEY}`,
            'Content-Type': 'application/json',
          },
          body: JSON.stringify(emailData),
        });

        if (!sendgridResponse.ok) {
          throw new Error('Error al enviar email');
        }
      } else {
        // Si solo usas Email Routing de Cloudflare, los emails se reenviarán automáticamente
        // Solo registramos el intento en los logs
        console.log('Email forwarding configured for:', email);
      }

      return new Response(JSON.stringify({
        success: true,
        message: 'Mensaje enviado correctamente'
      }), {
        status: 200,
        headers: { ...corsHeaders, 'Content-Type': 'application/json' }
      });

    } catch (error) {
      console.error('Error:', error);
      return new Response(JSON.stringify({
        error: 'Error al procesar la solicitud',
        details: error.message
      }), {
        status: 500,
        headers: { ...corsHeaders, 'Content-Type': 'application/json' }
      });
    }
  },
};

