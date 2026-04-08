# Leccion 14: Interceptors e infraestructura de API con una vista operativa

Esta leccion es una aplicacion Angular basada en Vite que ensena como centralizar el comportamiento de peticiones y el manejo de errores con interceptors de `HttpClient` y una capa de servicios.

## Que ensena esta leccion

- Como registrar interceptors funcionales con `provideHttpClient`
- Como un interceptor puede reescribir URLs de API antes de enviar la peticion
- Como un interceptor puede adjuntar cabeceras compartidas como autenticacion o metadatos de trazado
- Como normalizar fallos HTTP en errores consistentes a nivel de aplicacion
- Como una capa de servicios mantiene los detalles del endpoint fuera de los componentes

## Archivos principales

- `src/app/app.config.ts`: registro de `HttpClient` con cableado del interceptor
- `src/app/interceptors/api-infrastructure.interceptor.ts`: comportamiento compartido de peticiones y errores
- `src/app/services/operations-api.service.ts`: capa tipada de acceso a API
- `public/mock-api/operations-overview.json`: respuesta de API simulada usada por el servicio

## Orden de exploracion sugerido

1. Abre `operations-api.service.ts` e inspecciona el uso sencillo del endpoint `/api/...`.
2. Lee `api-infrastructure.interceptor.ts` y observa como la URL se reescribe a `/mock-api/...`.
3. Inspecciona el mapeo de errores del interceptor y comparalo con el manejo de errores del componente.
4. Ejecuta la app y dispara la peticion fallida simulada.
5. Observa como el componente se mantiene enfocado en estado de vista en lugar de preocupaciones HTTP compartidas.

## Por que este ejemplo es realista

A medida que crecen las aplicaciones Angular, las cabeceras repetidas de peticion, URLs base, IDs de trazado, tokens de autenticacion y normalizacion de errores se convierten rapidamente en preocupaciones transversales. Los interceptors son el lugar correcto para esas preocupaciones, mientras los servicios de API mantienen los componentes delgados y predecibles.

## Ejecutar la leccion

```bash
npm install
npm run dev
```

## Siguiente leccion

La Leccion 15 se centrara en probar componentes y servicios Angular.
