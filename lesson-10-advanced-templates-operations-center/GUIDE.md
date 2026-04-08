# Guia de la Leccion 10: Plantillas avanzadas

Esta leccion explora un lado diferente de la reutilizacion en Angular.

Las lecciones anteriores reutilizaban logica y componentes. Esta leccion se centra en reutilizar estructura de plantilla de maneras mas flexibles.

## Por que importan las plantillas avanzadas

A veces un componente debe proporcionar estructura sin controlar completamente el contenido interior.

Ejemplos:

- un shell de panel que siempre tiene un marco consistente
- un contenedor de lista que permite al padre decidir como se renderizan las filas
- un area reutilizable para acciones, cabeceras o estados vacios

Aqui es donde las capacidades de plantilla de Angular se vuelven muy utiles.

## Conceptos principales en esta leccion

Es probable que esta leccion incluya:

- `ng-content`
- `ng-template`
- `ngTemplateOutlet`

Estas capacidades tratan de hacer que los componentes sean flexibles sin convertirlos en marcado copiado y pegado.

## `ng-content`

`ng-content` permite que un padre proyecte contenido dentro de un componente hijo.

Puedes pensar en ello como darle al hijo un slot donde el padre puede colocar marcado personalizado.

Esto es util cuando el hijo debe poseer la estructura exterior, pero no cada detalle interior.

## `ng-template`

`ng-template` define una pieza de contenido de plantilla sin renderizarla inmediatamente.

Es como almacenar un fragmento de plantilla para usarlo mas tarde.

Esto es util cuando la misma estructura se necesita de forma condicional o dentro de un patron de renderizado reutilizable.

## `ngTemplateOutlet`

`ngTemplateOutlet` renderiza una referencia de plantilla donde se necesite.

Esto es especialmente util cuando un componente reutilizable debe aceptar una estrategia de renderizado definida por el padre.

Esa es una forma de reutilizacion mas avanzada que simplemente pasar datos mediante inputs.

## Por que este es un paso importante

No toda reutilizacion consiste en extraer otro componente hijo normal.

A veces, la pieza reutilizable no es un unico bloque fijo de UI.

A veces es:

- un patron de layout
- un shell
- una estrategia de renderizado de filas
- un estado vacio personalizable

Las plantillas de Angular proporcionan herramientas para ese nivel de flexibilidad.

## En que fijarte

Al leer la leccion, preguntate:

- que partes de la UI quedan fijadas por el componente reutilizable?
- que partes son suministradas por el padre?
- por que la proyeccion o un template outlet encajan mejor que simples inputs en este caso?

Esas preguntas ayudan a entender la razon de diseno, no solo la sintaxis.

## Confusion habitual de principiantes

Esta leccion suele sentirse abstracta al principio.

Eso es normal.

Lo importante que debes recordar es:

Los inputs pasan datos.
La proyeccion de contenido y las plantillas pasan piezas de estructura de UI.

Esa es la diferencia conceptual.

## Ejercicios

1. Anade otra area de acciones proyectadas.
2. Anade una plantilla de fila distinta proporcionada por el padre.
3. Crea una plantilla de estado vacio para un componente reutilizable.
4. Sustituye una seccion de envoltura repetida por un componente shell.

## Antes de continuar

Asegurate de entender:

- que problema resuelve la proyeccion de contenido
- por que `ng-template` es util
- cuando `ngTemplateOutlet` es mejor opcion que otro input

La siguiente leccion pasa a directivas y pipes, que son otro tipo de bloque reutilizable en Angular.
