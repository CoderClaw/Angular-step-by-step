# Guia de la Leccion 03: Formularios reactivos

Esta leccion introduce una forma mas estructurada de manejar formularios en Angular.

La Leccion 1 uso `ngModel`, que es util para entradas simples. Pero a medida que los formularios se vuelven mas complejos, las aplicaciones Angular suelen pasar a formularios reactivos porque hacen que el estado del formulario sea explicito y programable.

## De que trata esta leccion

El proyecto es un editor de perfil.

Eso lo convierte en un buen ejemplo de formularios porque las aplicaciones reales suelen necesitar:

- multiples campos
- reglas de validacion
- reglas entre campos
- comportamiento de envio controlado
- retroalimentacion para el usuario cuando el formulario es invalido

Esta leccion trata de considerar el formulario mismo como estado de la aplicacion.

## Formularios guiados por plantilla vs formularios reactivos

Ya viste un estilo mas simple en la Leccion 1.

Los formularios reactivos son diferentes porque el formulario se crea primero en TypeScript.

Eso significa que el componente define:

- que controles existen
- cuales son sus valores iniciales
- que reglas de validacion aplican
- como debe leerse y enviarse el formulario

Luego la plantilla se conecta a esa estructura predefinida.

Por eso los formularios reactivos se sienten mas explicitos y escalables.

## `FormGroup` y `FormControl`

En el centro de los formularios reactivos hay dos ideas importantes.

### `FormControl`

Un `FormControl` representa un campo.

Ejemplos:

- un campo de nombre
- un campo de correo electronico
- una preferencia de notificacion

Cada control contiene:

- el valor actual
- si es valido
- si fue tocado
- si esta dirty
- cualquier error de validacion

### `FormGroup`

Un `FormGroup` es una coleccion de controles.

Le permite a Angular tratar el formulario completo como un objeto mientras mantiene los campos separados.

Esto es importante porque muchas decisiones del formulario suceden a nivel de grupo:

- se puede enviar el formulario?
- debemos mostrar un error a nivel de grupo?
- como leemos el valor completo de una sola vez?

## Validacion

La validacion es una de las principales razones por las que las personas desarrolladoras eligen formularios reactivos.

Esta leccion probablemente incluye:

- campos obligatorios
- validacion a nivel de campo
- un validador personalizado entre campos

### Validacion a nivel de campo

La validacion a nivel de campo revisa un control de forma aislada.

Ejemplos:

- un campo no debe estar vacio
- un correo debe tener un formato valido
- una entrada de texto debe tener una longitud minima

### Validacion entre campos

La validacion entre campos comprueba si varios campos tienen sentido juntos.

Este es un paso importante de mayor complejidad.

Un formulario puede tener campos validos de forma individual y aun asi ser logicamente inconsistente cuando se combinan.

Por eso Angular admite validadores personalizados a nivel de grupo.

## Por que importan los formularios tipados

Esta leccion tambien introduce formularios reactivos tipados.

Eso significa que TypeScript ayuda a describir la forma de los valores del formulario.

Esto te da mayor seguridad porque:

- sabes que campos existen
- sabes que tipos deberian tener esos valores
- hacer refactor se vuelve mas facil

Los formularios tipados son especialmente valiosos a medida que crece la complejidad del formulario.

## Flujo de trabajo de un formulario reactivo

Un modelo mental util es:

1. Construir el formulario en TypeScript.
2. Conectar la plantilla con los controles del formulario.
3. Dejar que Angular rastree el valor y el estado de validacion.
4. Leer el estado del formulario cuando haga falta.
5. Enviar solo cuando el formulario sea valido.

Eso esta mucho mas controlado que leer entradas del DOM manualmente.

## Por que importa esto en apps reales

Los editores de perfil, flujos de checkout, paneles de configuracion, formularios de onboarding y herramientas de administracion dependen de un estado de formulario confiable.

Si la estructura del formulario es debil, los errores aparecen rapido:

- validacion inconsistente
- estados de error confusos
- logica duplicada en la plantilla
- envios incorrectos por accidente

Los formularios reactivos ayudan a resolver esos problemas centralizando la logica del formulario en el componente.

## En que fijarte en esta leccion

Al leer el codigo, enfocate en:

- donde se crea el formulario
- como se agrupan los controles
- donde se conectan los validadores
- como funciona el validador personalizado
- como la logica de envio lee el valor del formulario

No leas solo la plantilla. La configuracion del formulario en TypeScript es el verdadero centro de esta leccion.

## Buena practica para aprender aqui

Esta leccion ensena una disciplina que importa despues:

El formulario debe describir las reglas de la UI, no solo recopilar entrada.

Eso significa que el modelo del formulario no debe tratarse como una ocurrencia tardia.

## Ejercicios

Prueba estos cambios despues de entender la leccion:

1. Anade un campo mas con su propio validador.
2. Anade una segunda regla entre campos.
3. Muestra un mensaje de error mas amigable en la plantilla.
4. Reinicia el formulario despues de un guardado exitoso.

## Antes de continuar

Asegurate de poder explicar:

- por que los formularios reactivos son utiles
- la diferencia entre un `FormControl` y un `FormGroup`
- por que la validacion puede ocurrir tanto a nivel de campo como a nivel de grupo
- por que los formularios tipados mejoran la confiabilidad

La siguiente leccion se aleja de los formularios y entra en servicios e inyeccion de dependencias, que es otro bloque importante de Angular.
