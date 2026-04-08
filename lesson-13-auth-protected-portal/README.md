# Leccion 13: Autenticacion y flujos protegidos con un portal interno

Esta leccion es una aplicacion Angular basada en Vite que ensena como proteger rutas, gestionar una sesion autenticada simulada y redirigir a personas no autenticadas hacia un flujo de inicio de sesion.

## Que ensena esta leccion

- Como registrar rutas protegidas con Angular Router
- Como escribir un guard `CanActivateFn`
- Como redirigir a usuarios no autenticados a una pagina de login
- Como preservar una `returnUrl` durante las redirecciones al iniciar sesion
- Como almacenar una pequena sesion simulada en un servicio
- Como trabajan juntas las preocupaciones de UI protegida y routing

## Archivos principales

- `src/app/services/auth.service.ts`: manejo y persistencia de sesion simulada
- `src/app/auth.guard.ts`: logica de proteccion de rutas y comportamiento de redireccion
- `src/app/app.routes.ts`: rutas de login, dashboard y fallback
- `src/app/pages/login-page.component.ts`: flujo simulado de inicio de sesion
- `src/app/pages/dashboard-page.component.ts`: pagina autenticada protegida

## Orden de exploracion sugerido

1. Abre `src/app/app.routes.ts` e inspecciona que ruta esta protegida.
2. Lee `src/app/auth.guard.ts` y observa como se produce la redireccion.
3. Lee `src/app/services/auth.service.ts` e inspecciona la logica de sesion simulada.
4. Ejecuta la app, navega a `/dashboard` mientras estas desconectado y observa la redireccion del guard.
5. Inicia sesion y confirma que la ruta protegida queda disponible.

## Por que este ejemplo es realista

La mayoria de las aplicaciones Angular de negocio tienen areas protegidas, navegacion autenticada y controles de acceso a nivel de ruta. Incluso cuando el sistema real de autenticacion del backend es mas complejo, el frontend sigue necesitando las mismas piezas basicas: estado de sesion, redirecciones y rutas protegidas.

## Ejecutar la leccion

```bash
npm install
npm run dev
```

## Siguiente leccion

La Leccion 14 introducira interceptors y patrones centralizados de infraestructura de API.
