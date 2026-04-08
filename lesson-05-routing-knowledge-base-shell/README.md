# Leccion 05: Routing con un shell de aplicacion de base de conocimiento

Esta leccion es una aplicacion Angular basada en Vite que ensena como el routing convierte una sola pantalla en una aplicacion multipagina con un shell persistente.

## Que ensena esta leccion

- Como registrar rutas con `provideRouter`
- Como crear un shell de aplicacion con `RouterOutlet`
- Como navegar con `routerLink`
- Como resaltar enlaces activos con `routerLinkActive`
- Como funcionan las redirecciones para rutas por defecto
- Como los parametros de ruta impulsan paginas de detalle
- Como una ruta comodin maneja URLs desconocidas

## Archivos principales

- `src/app/app.config.ts`: registro del router con `provideRouter`
- `src/app/app.routes.ts`: tabla de rutas de la app
- `src/app/app.component.html`: shell persistente y navegacion
- `src/app/pages/article-detail-page.component.ts`: uso de parametros de ruta mediante `ActivatedRoute`

## Orden de exploracion sugerido

1. Abre `src/app/app.routes.ts` e inspecciona la tabla de rutas.
2. Lee `src/app/app.config.ts` para ver donde se registra el routing.
3. Lee `src/app/app.component.html` e identifica el shell persistente de la app.
4. Abre la lista de articulos y navega hacia una ruta de detalle de articulo.
5. Visita manualmente una URL invalida para ver la ruta comodin.

## Por que este ejemplo es realista

La mayoria de las aplicaciones Angular no son paginas unicas. Tienen navegacion, rutas de aterrizaje por defecto, paginas de detalle basadas en identificadores y comportamiento de respaldo cuando una URL no existe. Esta leccion introduce esa estructura sin agregar complejidad innecesaria.

## Ejecutar la leccion

```bash
npm install
npm run dev
```

## Siguiente leccion

La Leccion 06 conectara Angular con una API e introducira flujos de datos asincronos basados en HTTP.
