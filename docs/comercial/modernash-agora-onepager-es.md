<p align="center">
  <img src="/logo.png" alt="ModernAsh" width="220">
</p>

# Agora — gobernanza durable para el delivery con humanos y agentes

## One-liner

**La especificación define el trabajo. Agora gobierna su ejecución.**

Agora es un framework open source, Markdown-first y Git-native que materializa roles, permisos, lifecycle, gates, evidencia y registros durables para humanos, agentes, servicios y swarms.

## El problema

Un pull request puede contener código, tests y una explicación convincente. Eso todavía no demuestra:

- quién o qué ejecutó el trabajo;
- qué autoridad tenía;
- qué decisiones delegó;
- qué evidencia fue producida y revisada;
- quién tenía permiso para aceptar el resultado.

Cuando el workflow vive solamente en un chat o en la memoria de un agente, desaparece al terminar la sesión.

## La propuesta

Agora convierte el método elegido por el equipo en configuración verificable:

- **Actores y roles:** humanos, agentes, servicios y swarms con capacidades explícitas.
- **Lifecycle:** estados y transiciones definidos por Method Packs.
- **Gates y evidencia:** condiciones verificables antes de avanzar.
- **Handoffs y aprobaciones:** responsabilidad y autoridad registradas.
- **Persistencia:** decisiones, acciones, artefactos y sesiones en `.agora/` y Git.

Agora es agnóstico al lenguaje, proveedor LLM, entorno de agente y proceso de desarrollo.

## Qué no es

- No es un agente ni un runtime multiagente.
- No es un issue tracker o una UI de project management.
- No reemplaza GitHub, Jira, CI/CD o las herramientas del equipo.
- No garantiza autonomía ni calidad por sí solo.

Agora gobierna la participación y conserva el registro; las herramientas existentes continúan ejecutando su función.

## Ecosistema

| Proyecto | Función |
| --- | --- |
| [Agora Core](https://github.com/Modern-Ash/agora) | Gobernanza, servicios de aplicación, CLI, packs, gates, evidencia y estado durable |
| [Agora Studio](https://github.com/Modern-Ash/agora-studio) | Control plane visual local para inspección, revisión y aprobación |
| [Truco Agora](https://github.com/Modern-Ash/truco-agora) | Demostración ejecutable con participantes humanos y agentes LLM |

## Estado del producto

Agora está en **Alpha `0.x`** y listo para evaluación y pilotos controlados. Los contratos CLI y Markdown pueden evolucionar antes de `1.0`. Cada organización debe revisar Method Packs, permisos, adapters, entorno de ejecución y política de recuperación.

## Cómo adoptarlo

[DevEngage.AI](https://modern-ash.com/devengage/) es el servicio profesional de ModernAsh para diseñar el modelo, configurar un piloto, acompañar trabajo real y dejar un roadmap de adopción.

## CTA

- Producto: <https://modern-ash.com/agora/>
- Código: <https://github.com/Modern-Ash/agora>
- Piloto: <https://modern-ash.com/contacto/>
