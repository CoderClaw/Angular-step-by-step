# Guia de la Leccion 06: HTTP y datos asincronos

Esta leccion introduce una de las mayores transiciones del desarrollo frontend: pasar de datos locales a datos asincronos cargados desde fuera del componente.

Hasta ahora, las lecciones usaban sobre todo datos ya disponibles en memoria. Esta leccion muestra que cambia cuando primero hay que pedir los datos.

## Por que importan los datos asincronos

La mayoria de las aplicaciones Angular reales necesitan obtener informacion desde algun otro lugar:

- una API
- un servicio backend
- un endpoint JSON
- un servicio de busqueda
- un servicio de reportes

Eso significa que el componente no puede asumir que los datos ya existen.

En su lugar, la UI debe manejar una linea temporal:

1. la peticion comienza
2. la UI espera
3. la peticion tiene exito o falla
4. la pantalla se actualiza en consecuencia

Esta leccion trata de entender esa linea temporal.

## Que construye el ejemplo

El proyecto es un feed de lanzamientos.

Es un ejemplo realista porque los dashboards operativos suelen necesitar mostrar:

- actualizaciones recientes
- estado de publicacion
- detalles del elemento actualmente seleccionado
- una accion de recarga
- informacion sobre la ultima carga

Esto la convierte en una buena leccion para combinar datos remotos con estado de UI sencillo.

## `HttpClient`

Angular usa `HttpClient` para hacer peticiones HTTP.

Este servicio da a las aplicaciones Angular una forma estandar de:

- enviar peticiones
- recibir respuestas tipadas
- trabajar con Observables
- manejar errores de forma consistente

El punto importante es que `HttpClient` no devuelve inmediatamente los datos finales.

Devuelve un Observable.

Eso significa que los datos pueden llegar mas tarde.

## Por que la respuesta es asincrona

Una peticion de red tarda tiempo.

El navegador tiene que:

- enviar la peticion
- esperar la respuesta del servidor o del archivo
- interpretar la respuesta
- devolver el resultado a la aplicacion

Debido a eso, el componente no puede tratar el resultado como un valor sincrono normal.

Por eso la leccion usa `subscribe(...)`.

## Observable y suscripcion

Un Observable es una fuente de valores a lo largo del tiempo.

Para HTTP en Angular, normalmente significa:

- un valor de respuesta si tiene exito
- un error si la peticion falla

Una suscripcion es la forma en la que el componente dice:

"Inicia este trabajo asincrono y dime que ocurre."

Por eso el bloque `subscribe` es tan importante en la leccion.

Dentro de el, el componente define que hacer en caso de exito y que hacer en caso de fallo.

## Los tres estados principales de la UI

Esta leccion es especialmente importante porque ensena que una UI asincrona no trata solo de obtener datos. Trata de manejar estados de UI.

El componente normalmente necesita al menos tres estados:

### Carga

La peticion comenzo, pero los datos aun no han llegado.

La UI puede mostrar:

- un mensaje de carga
- un spinner
- controles deshabilitados

### Exito

Los datos llegaron y ahora pueden renderizarse.

El componente actualiza propiedades como:

- la lista de elementos del feed
- el elemento seleccionado
- la marca de tiempo de la ultima carga

### Error

Algo salio mal.

El componente debe dejar de cargar y mostrar un mensaje util.

Esto importa porque los fallos forman parte del comportamiento normal de la aplicacion, no son excepciones raras que el codigo de UI pueda ignorar.

## Por que un servicio sigue siendo util aqui

Es probable que la leccion use un servicio para poseer la peticion HTTP.

Esa es una buena decision de arquitectura porque:

- el componente se mantiene enfocado en el estado de UI
- el servicio se mantiene enfocado en el acceso a datos

El componente no deberia necesitar conocer cada detalle de la peticion. Deberia saber que quiere obtener el feed de lanzamientos.

## Respuestas tipadas

Uno de los mejores habitos en Angular es dar tipos explicitos a las respuestas HTTP.

Asi, el resto de la app sabe que tipo de datos debe esperar.

Esto mejora:

- la ayuda del editor
- la seguridad al refactorizar
- la legibilidad
- la consistencia entre el modelo y la UI

## El objetivo principal de aprendizaje

No reduzcas esta leccion a:

"Como llamo a `.get()`?"

La leccion mas profunda es:

Como deberia comportarse un componente cuando sus datos no estan disponibles de inmediato?

Esa pregunta aparece en casi cualquier aplicacion de negocio.

## Como leer la leccion

Estudiala en este orden:

1. Lee el modelo de los elementos del feed.
2. Lee el servicio y entiende a que endpoint llama.
3. Lee el componente y centrate en las transiciones entre carga, exito y error.
4. Luego inspecciona la plantilla y observa como esos estados se reflejan en la UI.

El aprendizaje importante ocurre en la relacion entre servicio, suscripcion y estado de la plantilla.

## Ejercicios

Prueba estos cambios:

1. Anade un boton de recarga manual.
2. Muestra un estado vacio distinto cuando la respuesta no devuelva elementos.
3. Muestra mas metadatos en el panel del elemento seleccionado.
4. Anade otro getter derivado basado en los elementos del feed.

## Antes de continuar

Asegurate de poder explicar:

- por que `HttpClient` devuelve un Observable
- que esta haciendo `subscribe(...)`
- por que los estados de carga y error pertenecen al componente
- por que la logica HTTP suele pertenecer a un servicio

La siguiente leccion profundiza en Observables y RxJS componiendo varios streams en lugar de manejar una sola peticion HTTP.
