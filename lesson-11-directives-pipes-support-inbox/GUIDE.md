# Guia de la Leccion 11: Directivas y pipes

Esta leccion introduce dos herramientas de Angular que ayudan a reutilizar comportamiento y formato directamente en las plantillas.

## Por que importan las directivas y los pipes

A medida que las plantillas crecen, suelen aparecer dos tipos de repeticion:

- comportamiento de UI repetido
- reglas de formato repetidas

Si esa logica se mantiene duplicada en cada componente, las plantillas se vuelven ruidosas y dificiles de mantener.

Las directivas y los pipes resuelven esos dos problemas de maneras distintas.

## Directivas

Una directiva anade comportamiento a un elemento existente.

No necesariamente crea un componente completo nuevo. En su lugar, mejora un elemento que ya existe.

Esto es util cuando quieres comportamiento reutilizable como:

- enfasis para niveles de prioridad
- interaccion hover
- clases o estilos dinamicos
- manejo de eventos del host

### `HostBinding`

`HostBinding` permite que una directiva vincule valores directamente al elemento host.

Eso significa que la directiva puede controlar cosas como:

- clases CSS
- estilos inline
- atributos ARIA

### `HostListener`

`HostListener` permite que una directiva reaccione a eventos en su elemento host.

Eso significa que la directiva puede responder a:

- clics
- `mouseenter` y `mouseleave`
- eventos de teclado

Juntos, `HostBinding` y `HostListener` hacen que las directivas sean una forma potente de empaquetar comportamiento de UI reutilizable.

## Pipes

Un pipe transforma un valor para mostrarlo en la plantilla.

Suele usarse cuando quieres que la logica de formato permanezca fuera de la clase del componente.

Ejemplos:

- convertir un codigo de estado en una etiqueta mas amigable
- formatear tiempo relativo
- convertir valores del dominio en texto amigable para la UI

Los pipes son especialmente utiles porque mantienen las plantillas legibles y al mismo tiempo hacen reutilizables las reglas de formato.

## Por que esta leccion usa una bandeja de soporte

Una bandeja de soporte es un buen ejemplo porque naturalmente tiene:

- etiquetas de estado
- enfasis de prioridad
- fechas y horas
- filas repetidas de datos similares

Eso la convierte en un lugar practico para ensenar tanto directivas como pipes.

## La gran leccion de diseno

Esta leccion trata realmente de elegir la forma correcta de reutilizacion.

Usa un componente cuando estes reutilizando una parte de estructura de UI.

Usa una directiva cuando estes reutilizando comportamiento sobre elementos existentes.

Usa un pipe cuando estes reutilizando logica de transformacion para visualizacion.

Esa distincion es muy importante en el diseno con Angular.

## Como estudiar la leccion

Leela en este orden:

1. Identifica los problemas de formato repetido.
2. Mira cuales se resuelven con pipes.
3. Identifica los problemas de comportamiento de UI repetido.
4. Mira cuales se resuelven con una directiva.

Esto ayuda a conectar la eleccion de codigo con el problema que se esta resolviendo.

## Ejercicios

1. Anade otro pipe personalizado para un valor de visualizacion.
2. Extiende la directiva con otra regla de estilo o clase del host.
3. Anade comportamiento de teclado a la directiva.
4. Sustituye una expresion de formato inline por un pipe reutilizable.

## Antes de continuar

Asegurate de entender:

- para que sirve una directiva
- para que sirve un pipe
- por que no toda reutilizacion debe convertirse en un componente

La siguiente leccion entra en rendimiento y deteccion de cambios, donde la eficiencia de Angular se vuelve una preocupacion mas explicita.
