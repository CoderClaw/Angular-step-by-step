# Leccion 06: HTTP y datos asincronos con un feed de lanzamientos

Esta leccion es una aplicacion Angular basada en Vite que ensena como cargar datos de API con `HttpClient` y como representar en la UI los estados de carga, exito y error.

## Que ensena esta leccion

- Como registrar `HttpClient` con `provideHttpClient`
- Como crear un servicio Angular que envuelva una peticion HTTP
- Como `HttpClient.get<T>()` usa respuestas de API tipadas
- Como un componente reacciona a los estados de carga, exito y error
- Como mantener la logica de API dentro de un servicio en lugar de ponerla en la plantilla
- Como usar un endpoint de API simulado durante el desarrollo frontend

## Archivos principales

- `src/app/app.config.ts`: registro global de `HttpClient`
- `src/app/services/release-feed.service.ts`: peticion de API tipada y transformacion de la respuesta
- `src/app/app.component.ts`: estado asincrono de UI y ciclo de vida de la peticion
- `public/mock-api/release-feed.json`: payload de API simulado servido por Vite

## Orden de exploracion sugerido

1. Abre `public/mock-api/release-feed.json` e inspecciona la forma de la respuesta.
2. Lee `src/app/release-item.model.ts` y comparalo con el payload simulado.
3. Lee `src/app/services/release-feed.service.ts` e inspecciona la llamada HTTP tipada.
4. Lee `src/app/app.component.ts` y sigue los estados de carga, exito y error.
5. Ejecuta la app, recarga el feed y observa como responde la UI durante la peticion asincrona.

## Por que este ejemplo es realista

Muchas aplicaciones Angular necesitan obtener dashboards, notas de lanzamiento, notificaciones o feeds de contenido desde una API. Incluso cuando el backend aun esta en progreso, los equipos frontend suelen desarrollar primero contra un endpoint simulado y mantener la misma estructura basada en `HttpClient`.

## Ejecutar la leccion

```bash
npm install
npm run dev
```

## Siguiente leccion

La Leccion 07 se centrara en los conceptos esenciales de RxJS para Angular, incluyendo composicion de streams y comportamiento de busqueda en vivo.
