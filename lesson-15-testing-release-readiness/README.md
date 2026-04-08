# Leccion 15: Testing de componentes y servicios con un tablero de preparacion de lanzamiento

Esta leccion es una aplicacion Angular basada en Vite que ensena como probar servicios Angular y componentes standalone con Vitest y Angular TestBed.

## Que ensena esta leccion

- Como anadir un comando de pruebas Vitest a un proyecto Angular basado en Vite
- Como configurar el entorno de pruebas Angular con `@analogjs/vitest-angular`
- Como probar reglas de negocio de servicios sin tocar el DOM
- Como probar un componente standalone sustituyendo una dependencia real por un provider simulado
- Como comprobar salida renderizada desde plantillas Angular

## Archivos principales

- `src/test-setup.ts`: configuracion compartida de Angular + Vitest
- `src/app/services/release-readiness.service.ts`: logica de negocio usada por la UI
- `src/app/services/release-readiness.service.spec.ts`: pruebas centradas en el servicio
- `src/app/app.component.spec.ts`: prueba de renderizado del componente con un provider simulado

## Orden de exploracion sugerido

1. Abre `src/test-setup.ts` para ver como se inicializa el testing de Angular para Vitest.
2. Lee `release-readiness.service.ts` e identifica las ramas de reglas de negocio.
3. Compara la implementacion del servicio con `release-readiness.service.spec.ts`.
4. Lee `app.component.spec.ts` y observa como se sustituye el servicio real por un mock.
5. Ejecuta la suite de pruebas y verifica que queden cubiertos tanto los comportamientos a nivel de logica como los del DOM.

## Por que este ejemplo es realista

Los equipos Angular suelen probar a dos niveles: logica de negocio pura en servicios y comportamiento renderizado en componentes. Esta leccion mantiene ambas cosas lo bastante pequenas para entenderlas rapido, pero sigue reflejando un patron comun de produccion: una UI que depende de un modelo de decision poseido por un servicio.

## Ejecutar la leccion

```bash
npm install
npm run dev
npm test
```

## Siguiente leccion

La Leccion 16 se centrara en arquitectura por features y estructura escalable de proyectos Angular.
