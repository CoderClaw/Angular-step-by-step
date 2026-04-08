# Leccion 18: Capstone Customer Success Hub

Este capstone es una aplicacion Angular basada en Vite que combina las ideas principales de la serie en un espacio de trabajo de producto pequeno pero realista.

## Que ensena esta leccion

- Como encajan en una sola app el routing, los shells de layout y las paginas por feature
- Como centralizar el comportamiento HTTP con un interceptor y un servicio de API tipado
- Como mantener el estado compartido de la app en un store basado en signals
- Como conectar formularios reactivos con estado filtrado compartido
- Como persistir preferencias del usuario y permitir que varias paginas respondan a ellas
- Como trabajan juntas la estructura por features, la UI reutilizable y el flujo de datos en una app Angular con estilo de produccion

## Archivos principales

- `src/app/app.routes.ts`: rutas de la aplicacion y limites entre features
- `src/app/interceptors/customer-success-api.interceptor.ts`: comportamiento centralizado de peticiones
- `src/app/core/services/hub-api.service.ts`: capa tipada de acceso a API
- `src/app/core/services/hub-store.service.ts`: store compartido de signals y preferencias persistidas
- `src/app/layout/hub-shell.component.ts`: shell, navegacion, estados de carga y de error
- `src/app/features/queue/pages/queue-page.component.ts`: formulario reactivo de filtros conectado al estado compartido
- `public/mock-api/customer-success-hub.json`: datos simulados de backend para el capstone
- `src/app/core/services/hub-store.service.spec.ts`: pruebas a nivel de store para carga, filtrado y preferencias
- `src/app/features/queue/pages/queue-page.component.spec.ts`: pruebas de la pagina de feature para el cableado del formulario reactivo

## Orden de exploracion sugerido

1. Empieza por `app.routes.ts` y observa como el capstone se divide en features.
2. Lee `hub-store.service.ts` e identifica que partes del estado son crudas, computadas y persistidas.
3. Compara `hub-api.service.ts` con `customer-success-api.interceptor.ts` para ver como se separan las preocupaciones HTTP.
4. Abre `queue-page.component.ts` y sigue como el formulario reactivo actualiza el store.
5. Visita la pagina de preferencias y confirma que el renderizado de la cola cambia segun los ajustes compartidos.

## Por que este ejemplo es realista

Muchos productos Angular no son demos de una sola pagina con un concepto cada vez. Combinan routing, estado compartido, infraestructura HTTP, filtros, preferencias de usuario y patrones de layout reutilizable en un mismo workspace. Este capstone mantiene el alcance pequeno mientras muestra como esas piezas encajan de forma coherente.

## Ejecutar la leccion

```bash
npm install
npm run dev
npm test
```

## Siguiente leccion

La Leccion 19 vuelve al estado global con un ejemplo dedicado de NgRx para que puedas comparar un store ligero personalizado con una arquitectura mas formal de action-reducer-effect.
