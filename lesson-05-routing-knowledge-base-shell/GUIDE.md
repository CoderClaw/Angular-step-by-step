# Guia de la Leccion 05: Routing

Esta leccion es el punto en el que la serie empieza a sentirse como una aplicacion real en lugar de una demo de una sola pantalla.

El routing permite que Angular responda a diferentes URLs y muestre distintas pantallas dentro de la misma aplicacion.

## Por que importa el routing

Sin routing, cada funcionalidad tendria que vivir en una sola pagina o mostrarse y ocultarse manualmente.

Eso se vuelve dificil rapidamente.

La mayoria de las aplicaciones Angular reales necesitan:

- multiples paginas o vistas
- navegacion entre secciones
- URLs que representen donde esta el usuario
- la capacidad de enlazar directamente a una pantalla concreta

El routing resuelve esos problemas.

## Que construye esta leccion

El ejemplo es un shell de base de conocimiento.

Es un buen ejemplo de routing porque una base de conocimiento encaja de forma natural con multiples secciones:

- un area de inicio o aterrizaje
- listas de articulos
- paginas de detalle de articulo
- comportamiento de respaldo para rutas desconocidas

Tambien introduce la idea de un shell persistente alrededor del contenido enrutado.

## El trabajo del Router

Angular Router observa la URL del navegador y decide que componente debe mostrarse.

A alto nivel, el proceso es:

1. El usuario navega a una URL.
2. Angular compara esa URL con las definiciones de ruta.
3. La ruta coincidente determina que componente renderizar.
4. Angular coloca ese componente dentro de un `RouterOutlet`.

Este es el modelo mental central del routing.

## Definiciones de rutas

Las rutas suelen configurarse como un arreglo.

Cada ruta normalmente responde preguntas como:

- que path debe coincidir?
- que componente debe renderizarse?
- debe esta ruta redirigir a otro lugar?
- espera esta ruta parametros?

Esta leccion probablemente incluye:

- una ruta por defecto
- una o mas rutas de contenido estandar
- una ruta con parametro
- una ruta comodin

Ese es un conjunto inicial muy realista.

## `provideRouter(...)`

El router se registra a nivel de aplicacion con `provideRouter(routes)`.

Esto importa porque el routing es una preocupacion de toda la app, no una preocupacion local de un componente.

Cuando Angular recibe ese provider, registra los servicios y la configuracion de rutas necesarios para que la navegacion funcione.

## `RouterOutlet`

El `RouterOutlet` es el marcador de posicion donde aparecen los componentes enrutados.

Esta es una de las piezas mas importantes que entender.

El shell de la app permanece visible, y el outlet es el lugar donde se renderiza el componente de la ruta actual.

Asi es como Angular soporta un layout con navegacion persistente y contenido de pagina cambiante.

## `routerLink` y `routerLinkActive`

La navegacion en Angular suele usar `routerLink` en lugar de etiquetas anchor sin mas.

Eso es porque Angular quiere gestionar la navegacion dentro de la aplicacion sin forzar una recarga completa de pagina.

`routerLinkActive` es util porque permite que la UI refleje que seccion esta activa.

Esto es util para menus, tabs y shells de aplicacion.

## Parametros de ruta

Algunas rutas necesitan valores dinamicos.

Por ejemplo, una pagina de detalle de articulo podria necesitar un id o un slug.

Los parametros de ruta permiten que una definicion de ruta soporte muchas URLs concretas.

Este es un paso importante porque transforma el routing, que pasa de ser simple cambio de paginas a navegacion consciente de los datos.

## Redirecciones y comodines

Dos funciones practicas del routing aparecen temprano por una buena razon.

### Redirecciones

Las redirecciones son utiles cuando:

- la ruta vacia debe ir a una pagina por defecto
- una ruta antigua debe apuntar a una mas nueva

### Rutas comodin

Las rutas comodin capturan URLs que no coinciden.

Esto importa porque el usuario puede escribir URLs erroneas, seguir enlaces antiguos o llegar desde marcadores.

La app deberia responder de forma elegante en lugar de romperse.

## La gran leccion arquitectonica

El routing cambia la forma en la que piensas la estructura de la aplicacion.

En lugar de una sola pagina con muchas secciones alternables, la app se convierte en un conjunto de funcionalidades navegables conectadas por URLs.

Eso hace que la aplicacion sea:

- mas facil de navegar
- mas facil de compartir
- mas facil de extender
- mas facil de razonar

## Como estudiar esta leccion

Usa este orden de lectura:

1. Lee primero `app.routes.ts`.
2. Entiende cada path y que componente renderiza.
3. Luego lee el componente shell y localiza el `RouterOutlet`.
4. Finalmente, inspecciona como los enlaces estan conectados al router.

Este orden refleja como Angular piensa la navegacion internamente.

## Ejercicios

Prueba estos cambios:

1. Anade una ruta nueva y enlazala desde el shell.
2. Cambia la redireccion por defecto.
3. Anade otro parametro de ruta y muestralo.
4. Crea una pagina comodin mas amigable.

## Antes de continuar

Asegurate de entender:

- que es una definicion de ruta
- que hace `RouterOutlet`
- por que se usa `routerLink` en lugar de enlaces planos dentro de la app
- como los parametros de ruta permiten que una sola plantilla de pagina maneje muchas URLs

La siguiente leccion introduce HTTP y datos asincronos, que es donde Angular empieza a comunicarse con fuentes de datos externas.
