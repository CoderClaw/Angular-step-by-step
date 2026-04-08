# Guia de la Leccion 14: Interceptors e infraestructura de API

Esta leccion desplaza la atencion desde componentes individuales hacia el comportamiento HTTP de toda la aplicacion.

A estas alturas de la serie, ya has visto `HttpClient`. Ahora la pregunta es:

Como evitas repetir la misma configuracion de peticiones y logica de manejo de errores en todas partes?

## Por que importan los interceptors

En una aplicacion real, muchas peticiones comparten las mismas preocupaciones:

- una URL base
- cabeceras de autenticacion
- IDs de peticion o metadatos de trazado
- normalizacion consistente de errores

Si cada componente o servicio repite ese trabajo, el codigo se vuelve inconsistente y fragil.

Los interceptors resuelven esto centralizando el comportamiento de peticiones y respuestas.

## Que construye esta leccion

El ejemplo es una vista operativa cargada a traves de un servicio tipado y un interceptor funcional.

Es un buen ejemplo porque muestra con claridad la separacion:

- el componente pide datos
- el servicio llama a un endpoint sencillo
- el interceptor maneja las preocupaciones HTTP compartidas

## Que hace un interceptor

Un interceptor se situa entre el codigo de tu app y la ejecucion HTTP subyacente.

Puede inspeccionar o modificar:

- peticiones salientes
- respuestas entrantes
- errores

Eso significa que es un buen lugar para preocupaciones transversales que deberian aplicar a muchas peticiones.

## Interceptors funcionales

Angular moderno admite interceptors funcionales.

Esto es util porque son compactos y faciles de leer.

La leccion probablemente muestra un interceptor haciendo cosas como:

- reescribir una URL
- adjuntar cabeceras compartidas
- convertir fallos HTTP en errores de aplicacion mas claros

## Por que reescribir URLs es una buena herramienta didactica

La reescritura de URLs demuestra la idea de infraestructura central con mucha claridad.

El servicio puede llamar a un endpoint sencillo `/api/...`, mientras el interceptor decide como debe resolverse realmente.

Eso significa que componentes y servicios no necesitan conocer cada detalle de entorno o despliegue.

## Cabeceras compartidas

Cabeceras como tokens de autenticacion o IDs de peticion son trabajo clasico de interceptor.

Sin un interceptor, cada peticion tendria que repetirlas.

Con un interceptor, el comportamiento se centraliza y se mantiene consistente.

## Normalizacion de errores

Los errores HTTP sin procesar suelen ser demasiado de bajo nivel para los componentes.

Un componente normalmente quiere un mensaje de error util, no un objeto completo a nivel de transporte.

Un interceptor puede traducir esos fallos a una forma mas limpia con la que el resto de la app pueda trabajar de manera mas consistente.

## El papel de la capa de servicios

Esta leccion tambien refuerza un patron que importa mucho en aplicaciones reales.

El servicio deberia exponer un metodo claro a nivel de aplicacion como:

- obtener vista general
- obtener feed
- obtener resumen de cuenta

No deberia obligar al componente a pensar en terminos de infraestructura HTTP.

Esta separacion es importante:

- los componentes poseen el comportamiento de UI
- los servicios poseen la intencion de acceso a datos
- los interceptors poseen la infraestructura HTTP compartida

## Como estudiar la leccion

Leela en este orden:

1. Mira el servicio de API y observa la llamada limpia al endpoint.
2. Luego inspecciona el interceptor e identifica la logica transversal.
3. Despues lee el componente y observa lo poco de codigo especifico de HTTP que necesita.

Ese orden de lectura destaca por que la abstraccion es util.

## Ejercicios

1. Anade otra cabecera compartida en el interceptor.
2. Anade un segundo endpoint que se beneficie automaticamente de la misma infraestructura.
3. Cambia el formato del mensaje de error en un solo lugar y observa el efecto en toda la app.
4. Anade un paso de logging para uso en desarrollo.

## Antes de continuar

Asegurate de entender:

- para que sirve un interceptor
- por que la configuracion HTTP repetida deberia centralizarse
- como la capa de servicios se mantiene mas limpia gracias al interceptor

La siguiente leccion cubre testing, que se vuelve mucho mas facil cuando las responsabilidades estan separadas con esta claridad.
