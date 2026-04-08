# Serie Moderna de Tutoriales de Angular

Este espacio de trabajo contiene una serie completa de tutoriales de Angular, desde nivel inicial hasta avanzado, construida con TypeScript y Vite.

Cada leccion vive en su propia carpeta como una pequena aplicacion Angular autocontenida. Los proyectos se mantienen intencionalmente enfocados, pero cada uno usa patrones comunes en bases de codigo Angular reales.

## Objetivos de la serie

- Ensenar Angular moderno de forma progresiva, desde los fundamentos hasta la arquitectura integrada de aplicaciones
- Usar patrones de Angular standalone en toda la serie
- Mantener los ejemplos lo bastante pequenos como para estudiarlos rapido
- Mostrar estructura frontend realista, estado, routing, formularios, HTTP y comportamiento de UI
- Usar Vite en todas las lecciones de la serie

## Como usar esta serie

1. Empieza en la Leccion 1 y avanza en orden.
2. Para cada leccion, lee primero el README de esa carpeta.
3. Ejecuta `npm install` y `npm run dev` dentro de la carpeta de la leccion que quieras explorar.
4. Compara la progresion entre lecciones en lugar de tratarlas como ejemplos aislados.

## Hoja de ruta de las lecciones

1. [lesson-01-angular-foundations-task-tracker](./lesson-01-angular-foundations-task-tracker/README.md)
   Fundamentos de Angular, bindings, eventos, `ngModel` y flujo de control moderno.

2. [lesson-02-component-composition-product-catalog](./lesson-02-component-composition-product-catalog/README.md)
   Composicion de componentes, `input()`, `output()` y comunicacion entre padre e hijo.

3. [lesson-03-reactive-forms-profile-editor](./lesson-03-reactive-forms-profile-editor/README.md)
   Formularios reactivos tipados, validadores y reglas de validacion personalizadas.

4. [lesson-04-services-and-di-notes-workspace](./lesson-04-services-and-di-notes-workspace/README.md)
   Servicios, inyeccion de dependencias y persistencia mediante una capa de datos simple.

5. [lesson-05-routing-knowledge-base-shell](./lesson-05-routing-knowledge-base-shell/README.md)
   Routing, shells de aplicacion, redirecciones, parametros de ruta y composicion de paginas.

6. [lesson-06-http-async-release-feed](./lesson-06-http-async-release-feed/README.md)
   `HttpClient`, carga asincrona de datos y estados de carga/error en la UI.

7. [lesson-07-rxjs-live-search-dashboard](./lesson-07-rxjs-live-search-dashboard/README.md)
   Streams de RxJS, filtrado, `switchMap`, estado combinado y plantillas asincronas.

8. [lesson-08-signals-dashboard-preferences](./lesson-08-signals-dashboard-preferences/README.md)
   Signals, `computed`, `effect` y preferencias locales persistidas.

9. [lesson-09-shared-state-booking-flow](./lesson-09-shared-state-booking-flow/README.md)
   Estado compartido de aplicacion y coordinacion tipo store entre componentes.

10. [lesson-10-advanced-templates-operations-center](./lesson-10-advanced-templates-operations-center/README.md)
    Proyeccion de contenido, `ng-template`, `ngTemplateOutlet` y UI reutilizable guiada por plantillas.

11. [lesson-11-directives-pipes-support-inbox](./lesson-11-directives-pipes-support-inbox/README.md)
    Directivas personalizadas, pipes, host bindings y reutilizacion de plantillas.

12. [lesson-12-performance-change-detection-review-board](./lesson-12-performance-change-detection-review-board/README.md)
    `OnPush`, actualizaciones inmutables, listas con tracking y renderizado orientado al rendimiento.

13. [lesson-13-auth-protected-portal](./lesson-13-auth-protected-portal/README.md)
    Flujo de autenticacion, guards de ruta, redirecciones y paginas protegidas.

14. [lesson-14-interceptors-api-infrastructure](./lesson-14-interceptors-api-infrastructure/README.md)
    Interceptors, comportamiento centralizado de peticiones, cabeceras compartidas y errores HTTP normalizados.

15. [lesson-15-testing-release-readiness](./lesson-15-testing-release-readiness/README.md)
    Pruebas de servicios y componentes con Vitest y Angular TestBed.

16. [lesson-16-feature-architecture-support-workspace](./lesson-16-feature-architecture-support-workspace/README.md)
    Estructura de carpetas escalable con `core`, `shared`, `layout` y `features`.

17. [lesson-17-advanced-ui-operations-board](./lesson-17-advanced-ui-operations-board/README.md)
    Integracion avanzada de UI con Angular CDK drag-and-drop y APIs del navegador.

18. [lesson-18-capstone-customer-success-hub](./lesson-18-capstone-customer-success-hub/README.md)
    Aplicacion final que combina routing, infraestructura de API, estado compartido, formularios reactivos y preferencias persistidas.

19. [lesson-19-ngrx-incident-command-center](./lesson-19-ngrx-incident-command-center/README.md)
    Gestion de estado con NgRx usando actions, reducers, selectors, effects y una arquitectura formal de estado global.

## Hitos recomendados

- Lecciones 1 a 5: Bloques fundamentales para construir aplicaciones Angular
- Lecciones 6 a 9: Flujo de datos, patrones asincronos y estado compartido
- Lecciones 10 a 13: Reutilizacion, rendimiento y patrones de seguridad de aplicaciones
- Lecciones 14 a 19: Infraestructura, testing, arquitectura escalable, UI avanzada, integracion tipo capstone y gestion formal de estado con NgRx

## Notas sobre herramientas

- Todas las lecciones usan TypeScript.
- Todas las lecciones usan Vite.
- La integracion de Angular se basa en `@analogjs/vite-plugin-angular`.
- Las lecciones de testing usan Vitest con configuracion de Angular TestBed.

## Siguientes mejoras sugeridas

- Anadir un script o helper de nivel superior para ejecutar una leccion seleccionada mas rapidamente.
- Anadir pruebas a mas lecciones posteriores, ademas de la Leccion 15.
- Anadir diagramas que comparen como evolucionan el estado y el routing a lo largo de la serie.
