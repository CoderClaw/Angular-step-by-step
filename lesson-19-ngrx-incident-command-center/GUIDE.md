# Guia de la Leccion 19: Gestion de estado con NgRx

Esta leccion introduce NgRx como una arquitectura formal de gestion de estado para Angular.

Se apoya directamente en la leccion anterior sobre estado compartido, pero anade una estructura mas explicita.

## Por que existe NgRx

Un servicio store sencillo funciona bien para muchas aplicaciones.

Pero a medida que las aplicaciones crecen, los equipos suelen necesitar convenciones mas fuertes sobre:

- como puede cambiar el estado
- donde ocurre el trabajo asincrono
- como se expone la informacion derivada
- como razonar sobre el historial de eventos

NgRx responde a esa necesidad con un modelo de flujo de datos mas claro.

## El flujo principal

El flujo principal de NgRx en esta leccion es:

1. Un componente despacha una accion.
2. Un reducer actualiza el estado de forma sincronica.
3. Un effect reacciona cuando se necesita trabajo asincrono.
4. Una accion de exito o fallo devuelve el resultado asincrono al store.
5. Los selectors exponen exactamente lo que necesita cada region de UI.

Este flujo importa porque cada responsabilidad tiene un lugar claro.

## Que construye esta leccion

El ejemplo es un centro de mando de incidentes.

Es un escenario solido de NgRx porque varias regiones de UI necesitan un estado global coordinado:

- filtros de la toolbar
- estado de carga asincrona
- una lista filtrada de incidentes
- un panel de detalle del incidente seleccionado
- conteos de resumen

Todas esas areas dependen del mismo estado de la feature.

## En que fijarte

Cuando estudies la leccion, centrate en estas preguntas:

1. Que eventos se modelan como actions?
2. Que cambios de estado ocurren en el reducer?
3. Que logica se deriva en selectors en lugar de hacerlo en componentes?
4. Que trabajo tiene efectos secundarios y por lo tanto pertenece a un effect?
5. Como se mantienen delgados los componentes leyendo selectors y despachando actions?

## Por que importan los selectors

Los selectors son una de las ideas mas valiosas de NgRx.

Permiten que el store posea modelos de lectura como:

- colecciones filtradas
- conteos de resumen
- la entidad seleccionada
- condiciones de estado vacio

Eso evita que los componentes dupliquen la misma logica de filtrado y conteo.

## Por que importan los effects

Los reducers deben mantenerse puros.

Eso significa que no deberian llamar APIs, generar valores aleatorios, navegar ni escribir en almacenamiento.

Los effects existen para que los flujos asincronos se mantengan explicitos sin contaminar reducers ni componentes.

## Ejercicios

1. Anade una nueva accion y selector para filtrar por estado.
2. Anade un segundo effect que simule guardar una actualizacion de triage.
3. Introduce otro selector derivado para incidentes de alta prioridad sin resolver.
4. Anade un componente de banner de fallo que lea solo el selector de error.
5. Refactoriza la coleccion de incidentes a una forma normalizada tipo entity.

## Antes de continuar

Asegurate de entender:

- por que las actions son utiles aunque anadan ceremonia
- por que los reducers deben mantenerse puros
- por que los selectors deberian poseer el estado derivado
- por que los effects son el lugar correcto para HTTP y otros efectos secundarios

Cuando esos limites tienen sentido, NgRx deja de sentirse como boilerplate extra y empieza a sentirse como un sistema para hacer predecible el estado de una aplicacion.
