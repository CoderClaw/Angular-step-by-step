# Guia de la Leccion 04: Servicios e inyeccion de dependencias

Esta leccion introduce un nuevo tipo de bloque de construccion en Angular: el servicio.

Hasta ahora, la mayor parte del comportamiento de la aplicacion vivia directamente dentro de componentes. Eso funciona para demos pequenas, pero las aplicaciones reales suelen necesitar logica que no deberia pertenecer a la capa de UI.

## Por que existen los servicios

Los componentes son principalmente responsables de la presentacion y la interaccion.

Deben responder preguntas como:

- que deberia ver el usuario?
- que pasa cuando se hace clic en un boton?
- que valores se estan mostrando actualmente?

Pero no necesariamente deben poseer todo lo demas.

Por ejemplo:

- persistencia
- transformaciones de datos
- logica de negocio compartida
- estado usado en mas de un lugar

Esas responsabilidades suelen pertenecer a un servicio.

## Lo que demuestra esta leccion

El ejemplo es un espacio de notas.

Es una buena leccion sobre servicios porque la app necesita:

- almacenar notas
- anadir, eliminar y actualizar notas
- persistir notas en local storage
- mantener organizadas esas responsabilidades

En lugar de poner todo eso directamente en el componente, la leccion coloca la logica de notas en un servicio.

## Que es un servicio

Un servicio suele ser una clase TypeScript simple que Angular gestiona mediante inyeccion de dependencias.

Eso significa que Angular puede crear la clase por ti y proporcionarla donde haga falta.

El servicio se convierte en un lugar compartido para la logica que no trata principalmente de renderizar HTML.

## `@Injectable`

El decorador `@Injectable(...)` le dice a Angular que la clase participa en el sistema de inyeccion de dependencias.

En esta leccion probablemente veras:

- `providedIn: 'root'`

Eso significa que Angular crea una sola instancia de toda la aplicacion en el inyector raiz.

Esto importa porque todo componente que inyecte el servicio obtiene acceso a la misma instancia compartida.

Asi es como un servicio puede actuar como un propietario central de logica o de estado.

## Inyeccion de dependencias

La inyeccion de dependencias es el mecanismo que Angular usa para suministrar objetos a las clases que los necesitan.

En lugar de hacer esto manualmente:

- `const service = new NotesService()`

Angular te permite declarar la dependencia y proporciona la instancia.

Esto es util porque Angular puede controlar:

- como se crea la instancia
- cuanto tiempo vive
- si es compartida
- que implementacion debe usarse

Eso produce codigo mas limpio y testing mas facil.

## La principal leccion de diseno

La mayor leccion aqui no es solo como usar un servicio.

Es como separar responsabilidades.

El componente de notas deberia describir principalmente la interfaz.

El servicio de notas deberia describir principalmente el comportamiento de las notas y la persistencia.

Este tipo de separacion hace que las apps sean mas faciles de leer y cambiar.

## Local storage como herramienta didactica

Esta leccion usa local storage.

Esa es una buena eleccion educativa porque introduce persistencia sin necesitar un backend real.

Puedes aprender la idea arquitectonica central:

El componente pide datos y dispara acciones, pero los detalles de persistencia permanecen en otro lugar.

Mas adelante, local storage podria reemplazarse por HTTP u otra fuente backend sin obligar al componente a poseer toda esa logica.

## Como leer la leccion

Estudiala en este orden:

1. Lee el archivo de modelo y entiende como luce una nota.
2. Lee el servicio e identifica cada responsabilidad que posee.
3. Observa donde se lee y se escribe local storage.
4. Luego lee el componente y compara cuanto mas pequeno se vuelve porque el servicio existe.

Esa comparacion es el valor real de la leccion.

## La API del servicio

Un buen servicio expone un conjunto claro de metodos.

En un ejemplo de notas, eso suele significar metodos como:

- obtener todas las notas
- anadir una nota
- actualizar una nota
- eliminar una nota
- alternar una bandera como pinned o archived

Esto es util porque el componente no necesita conocer los detalles de implementacion. Solo le pide al servicio que realice acciones significativas.

## Por que este patron escala

A medida que crecen las aplicaciones, el mismo patron se vuelve mas valioso.

Si la logica permanece dentro de los componentes, la app se vuelve mas dificil de mantener.

Si la logica se mueve a servicios cuando corresponde, el codigo tiende a ser:

- mas organizado
- mas facil de probar
- mas facil de reutilizar
- mas facil de extender

## Errores comunes que conviene evitar

Cuando las personas principiantes aprenden servicios por primera vez, a veces:

- mueven cada pieza de codigo a un servicio incluso cuando pertenece al componente
- dejan que componentes y servicios posean parcialmente la misma logica
- crean servicios con responsabilidades poco claras

La meta es el equilibrio.

Usa un servicio cuando la logica deba vivir fuera de la capa de UI, especialmente cuando trate de datos, coordinacion o persistencia.

## Ejercicios

Prueba estos cambios:

1. Anade un metodo que edite una nota existente.
2. Anade una nueva propiedad al modelo de nota y persiste su valor.
3. Crea un metodo derivado del servicio que devuelva solo notas archivadas.
4. Sustituye los datos iniciales por tus propias categorias.

## Antes de continuar

Asegurate de poder responder:

- que es un servicio
- por que la inyeccion de dependencias es util
- que significa `providedIn: 'root'`
- por que la logica de local storage pertenece al servicio y no al componente

La siguiente leccion introduce routing, que expande Angular desde una sola pagina hacia una estructura de aplicacion multipagina.
