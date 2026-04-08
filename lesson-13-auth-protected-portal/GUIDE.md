# Guia de la Leccion 13: Autenticacion y flujos protegidos

Esta leccion muestra como las aplicaciones Angular controlan el acceso a ciertas rutas y guian a las personas usuarias a traves de un flujo de login.

## Por que importa esto

Muchas aplicaciones tienen areas que solo deberian estar disponibles despues de iniciar sesion.

Ejemplos:

- paginas internas de administracion
- areas de cuenta del cliente
- dashboards operativos
- herramientas con datos sensibles

Eso significa que la app debe responder dos preguntas:

- esta autenticado el usuario?
- que deberia pasar si no lo esta?

Esta leccion se centra en ese flujo.

## Que construye el ejemplo

El ejemplo es un portal interno protegido.

Es realista porque un portal suele incluir:

- una pagina de login
- un dashboard protegido
- control de acceso a nivel de ruta
- comportamiento de redireccion cuando el usuario no ha iniciado sesion

## Autenticacion simulada

Esta leccion suele usar un servicio de autenticacion simulado en lugar de un sistema real de autenticacion de backend.

Esa es una buena decision didactica.

Mantiene el foco en el comportamiento del frontend:

- almacenar un estado tipo sesion
- comprobarlo en el router
- redirigir correctamente
- restaurar la navegacion prevista despues del login

## Route guards

Los route guards son uno de los conceptos principales aqui.

Un guard decide si debe permitirse la navegacion a una ruta.

Si el usuario esta autenticado, la ruta puede continuar.

Si no, la app puede redirigirlo a otro lugar.

Este es un patron muy comun en Angular.

## `CanActivateFn`

Angular moderno admite guards funcionales de ruta como `CanActivateFn`.

Esto es util porque mantiene la logica del guard compacta y facil de leer.

La leccion probablemente muestra como el guard:

- comprueba el estado de autenticacion
- redirige a usuarios no autenticados
- preserva una URL de retorno

## Por que importa `returnUrl`

La URL de retorno es un detalle muy practico.

Sin ella, un usuario que es redirigido a login puede perder la pagina que queria originalmente.

Con ella, la app puede devolverlo alli despues de una autenticacion exitosa.

Eso hace que la experiencia se sienta mucho mas pulida y realista.

## Estado de sesion

Incluso en una app simulada, el frontend sigue necesitando estado de sesion.

Eso significa que un servicio suele poseer:

- si el usuario ha iniciado sesion
- quien es el usuario actual
- como actualizan el estado las acciones de login y logout

Esto continua el mismo patron de lecciones anteriores: los componentes y las rutas reaccionan al estado, mientras los servicios poseen la logica subyacente.

## Como estudiar la leccion

Leela en este orden:

1. Inspecciona las definiciones de rutas.
2. Identifica que rutas estan protegidas.
3. Lee el guard y entiende la logica de permitir frente a redirigir.
4. Lee el servicio de autenticacion y observa como se modela el estado de sesion.
5. Lee la pagina de login y sigue el flujo de retorno.

Ese orden de lectura refleja el flujo real de navegacion.

## La gran leccion

La autenticacion en codigo frontend no trata solo de mostrar u ocultar un boton.

Trata de controlar la navegacion y preservar la intencion del usuario de forma predecible.

Por eso routing y estado de sesion deben trabajar juntos.

## Ejercicios

1. Anade un boton de logout que devuelva al usuario al login.
2. Anade otra ruta protegida.
3. Muestra el nombre del usuario actual en el dashboard.
4. Anade un pequeno mensaje que explique por que ocurrio una redireccion.

## Antes de continuar

Asegurate de entender:

- que hace un route guard
- por que es util un servicio de sesion
- por que `returnUrl` mejora el flujo de login
- por que la autenticacion suele ser tanto una preocupacion de routing como de UI

La siguiente leccion entra en interceptors e infraestructura centralizada de API, lo que expande aun mas el lado global de Angular.
