# Guia de la Leccion 07: Conceptos esenciales de RxJS

Esta leccion se apoya directamente en las ideas asincronas de la Leccion 6.

La Leccion 6 mostro como suscribirse a una peticion HTTP. La Leccion 7 va mas alla y muestra como las aplicaciones Angular suelen coordinar varios valores cambiantes a lo largo del tiempo.

Ahi es donde RxJS se vuelve importante.

## Por que existe RxJS

Las aplicaciones suelen tener datos que cambian continuamente:

- el usuario escribiendo
- cambios de filtros
- respuestas HTTP entrantes
- cambios de ruta
- temporizadores
- interacciones entre varios controles

Si manejas cada evento por separado con codigo manual, la logica se vuelve dificil de mantener.

RxJS te da un vocabulario para describir flujos de valores a lo largo del tiempo.

## Que construye esta leccion

El ejemplo es un dashboard de busqueda en vivo.

Es un muy buen ejemplo de RxJS porque la busqueda en vivo depende de varios inputs cambiantes:

- la consulta de texto
- uno o mas filtros
- el resultado asincrono de la busqueda

Esos valores deben funcionar juntos de forma limpia.

## Que es un stream

Un stream es una secuencia de valores a lo largo del tiempo.

Ejemplos:

- cada nuevo termino de busqueda que escribe el usuario
- cada cambio de filtro
- cada respuesta HTTP

RxJS trata estos valores como Observables y te da operadores para transformarlos y combinarlos.

## Por que RxJS se siente distinto

Con codigo imperativo tradicional, podrias pensar asi:

"Cuando el usuario escribe, haz X. Cuando el filtro cambie, haz Y. Luego mantenlos sincronizados manualmente."

Con RxJS, a menudo se piensa de forma mas declarativa:

"El view model es el resultado de combinar estos streams."

Ese es el gran cambio mental.

## Operadores importantes en esta leccion

Es probable que esta leccion incluya varios operadores clave de RxJS.

### `debounceTime`

Esto espera brevemente antes de reaccionar.

En una busqueda en vivo, evita una peticion por cada pulsacion de tecla.

Es util porque los usuarios escriben rapido y la app no deberia reaccionar en exceso.

### `distinctUntilChanged`

Esto evita trabajo repetido cuando el valor en realidad no ha cambiado.

Evita reprocesamientos innecesarios o busquedas duplicadas.

### `combineLatest`

Esto combina varios streams.

En un dashboard de busqueda, podria combinar:

- el stream de consulta
- el stream de filtros

Es potente porque la logica resultante puede depender de todos los inputs actuales al mismo tiempo.

### `switchMap`

Este es uno de los operadores asincronos mas importantes para busqueda.

Cancela el trabajo interno anterior cuando llega un valor mas reciente.

Eso importa porque la busqueda en vivo normalmente deberia preocuparse por la peticion mas reciente, no por todas las peticiones antiguas que siguen en progreso.

### `shareReplay`

Esto ayuda a compartir el resultado de un stream en lugar de volver a calcularlo para cada consumidor.

Suele usarse cuando un view model deberia reutilizarse eficientemente en la plantilla.

## Subjects y BehaviorSubjects

Es posible que esta leccion tambien use `Subject` o `BehaviorSubject`.

Son utiles cuando tu propio codigo necesita empujar nuevos valores dentro de un stream.

Por ejemplo:

- el usuario cambia la consulta actual
- el usuario selecciona un filtro

Esto crea un puente entre eventos de UI y logica reactiva basada en streams.

## La idea de view model

Uno de los patrones mas utiles en codigo de UI basado en RxJS es crear un unico stream que represente lo que la plantilla necesita.

En lugar de actualizar manualmente muchos campos no relacionados, el componente puede exponer un unico stream de datos listos para la UI.

A ese stream se le suele llamar view model.

Esto hace que las plantillas sean mas limpias y que las relaciones de estado sean mas explicitas.

## `AsyncPipe`

En las plantillas de Angular, `AsyncPipe` suele usarse con Observables.

Permite que la plantilla se suscriba a un stream y use su valor mas reciente sin logica manual de suscripcion en el componente.

Este es un gran paso hacia un codigo de UI reactivo mas limpio.

## La gran leccion aqui

RxJS no trata solo de sintaxis.

Trata de expresar con claridad el comportamiento dependiente del tiempo.

La pregunta clave es:

Como se combinan varios valores cambiantes para producir el estado actual de la UI?

Eso es lo que esta leccion deberia ayudarte a entender.

## Como estudiar el proyecto

Leelo en este orden:

1. Identifica cada stream de entrada.
2. Encuentra donde se transforman esos streams.
3. Encuentra donde se combinan.
4. Identifica el stream final o view model que usa la plantilla.
5. Luego inspecciona la plantilla y observa como `AsyncPipe` lo consume.

Si sigues ese camino, RxJS se vuelve mucho mas facil de entender.

## Ejercicios

Prueba estos experimentos:

1. Anade otro stream de filtro.
2. Cambia el tiempo de debounce.
3. Anade un stream derivado para el conteo de resultados.
4. Sustituye una actualizacion manual de un campo por un stream reactivo.

## Antes de continuar

Asegurate de entender:

- que es un stream
- por que la busqueda en vivo es un buen ejemplo de RxJS
- que problemas resuelven `combineLatest` y `switchMap`
- por que `AsyncPipe` es mas limpio que las suscripciones manuales en muchos casos

La siguiente leccion pasa a los signals de Angular, que ofrecen otro modelo reactivo para el estado local de la aplicacion.
