# Guia de la Leccion 16: Arquitectura por features

Esta leccion trata de escalar la estructura de un proyecto Angular.

A estas alturas ya conoces muchas capacidades de Angular por separado. El siguiente reto es organizarlas para que una aplicacion mas grande siga siendo comprensible.

## Por que importa la estructura

A medida que los proyectos crecen, una sola carpeta grande `app` se vuelve rapidamente dificil de navegar.

Los desarrolladores necesitan respuestas claras a preguntas como:

- donde viven los servicios compartidos?
- donde vive la UI reutilizable?
- donde viven las paginas especificas de cada feature?
- donde deberia ir el codigo de layout?

Esta leccion responde a esas preguntas con una estrategia practica de carpetas.

## La estructura principal en esta leccion

El proyecto usa areas como:

- `core`
- `shared`
- `layout`
- `features`

Esta no es la unica estructura valida en Angular, pero si es util y realista.

## `core`

El area `core` suele contener preocupaciones de toda la aplicacion.

Ejemplos:

- modelos usados ampliamente en la app
- servicios de los que dependen varias features
- infraestructura o logica central

Si algo pertenece al conjunto de la app y no a una sola feature, `core` suele ser el lugar correcto.

## `shared`

El area `shared` suele contener piezas de UI reutilizables.

Son cosas que varias features pueden usar, pero que no son en si mismas una feature de negocio.

Ejemplos:

- cards
- badges
- pequenos componentes presentacionales

La idea importante es que `shared` debe mantenerse lo bastante general como para reutilizarse, no convertirse en un cajon de sastre para codigo aleatorio no relacionado.

## `layout`

El area `layout` suele alojar shells de aplicacion y el marco de rutas.

Aqui es donde colocas estructuras que definen como se presentan las grandes areas de la app, como:

- navegacion de nivel superior
- un shell de workspace
- sidebars o cabeceras persistentes

El layout trata de la estructura alrededor de las features, no de las features mismas.

## `features`

El area `features` es donde vive la funcionalidad especifica del dominio.

Los ejemplos en esta leccion incluyen paginas de feature separadas y enrutadas como triage y handoff.

Esta suele ser el area mas importante en una aplicacion real porque permite que la base de codigo crezca por capacidad de negocio y no solo por tipo tecnico de archivo.

## Por que ayudan las features basadas en rutas

Las features basadas en rutas fomentan la separacion de forma natural.

Cada feature puede poseer:

- sus paginas
- su UI local
- su logica local
- su lugar en el recorrido del usuario

Eso hace que el codigo sea mas facil de escalar que una carpeta plana llena de archivos no relacionados.

## La gran leccion

Esta leccion no trata solo de carpetas.

Trata de propiedad.

Cada parte del proyecto deberia tener una razon para existir en el lugar elegido.

Una buena estructura reduce confusion y ayuda a los equipos a cambiar la aplicacion de forma segura.

## Como estudiar la leccion

Empieza por el mapa de rutas.

Luego preguntate:

- que pertenece al conjunto de la app?
- que pertenece al shell?
- que pertenece a UI reutilizable?
- que pertenece solo a una feature?

Esas preguntas son mas importantes que memorizar los nombres de carpetas por si solos.

## Ejercicios

1. Anade una tercera pagina de feature y colocala correctamente.
2. Mueve una pieza de UI reutilizable a `shared` si esta duplicada.
3. Anade un nuevo servicio global de aplicacion a `core`.
4. Crea una segunda preocupacion de layout exclusiva del shell y mantenla fuera del codigo de las features.

## Antes de continuar

Asegurate de entender:

- por que las apps grandes necesitan una estructura que vaya mas alla de un solo arbol de componentes
- que tipos de codigo pertenecen a `core`, `shared`, `layout` y `features`
- por que los limites de rutas suelen alinearse bien con los limites de features

La siguiente leccion explora integracion avanzada de UI, donde las interacciones ricas del usuario anaden otra capa de complejidad.
