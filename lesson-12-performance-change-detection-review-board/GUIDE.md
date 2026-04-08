# Guia de la Leccion 12: Rendimiento y deteccion de cambios

Esta leccion introduce la forma de pensar en rendimiento dentro de Angular.

Hasta ahora, las lecciones se centraron sobre todo en correccion y estructura. Esta leccion anade otra pregunta:

Como puede la UI mantenerse responsiva a medida que crece la cantidad de datos?

## Por que importa el rendimiento

Muchas aplicaciones de negocio renderizan:

- listas grandes
- dashboards
- colas
- tableros de revision
- tablas de reportes

Si Angular actualiza demasiado trabajo con demasiada frecuencia, la interfaz se vuelve mas lenta y dificil de usar.

Esta leccion muestra algunas de las tecnicas que usan los desarrolladores Angular para mantener el renderizado eficiente.

## `OnPush`

Una de las ideas principales de esta leccion es `ChangeDetectionStrategy.OnPush`.

Normalmente, Angular revisa los componentes para detectar cambios muy a menudo.

Con `OnPush`, Angular se vuelve mas selectivo respecto a cuando necesita reevaluar un componente.

Esto puede mejorar el rendimiento porque Angular evita trabajo innecesario.

La contrapartida es que el codigo debe seguir patrones de actualizacion de estado mas claros.

## Por que importan aqui las actualizaciones inmutables

Cuando se usan patrones orientados al rendimiento, las actualizaciones inmutables se vuelven especialmente importantes.

En lugar de mutar arreglos u objetos en el lugar, el codigo crea nuevas referencias.

Eso hace que las transiciones de estado sean mas claras y ayuda a Angular a detectar cambios significativos de forma mas confiable.

Por eso las lecciones sobre rendimiento suelen repetir la importancia de las actualizaciones inmutables de datos.

## Tracking de listas repetidas

Las listas grandes pueden ser costosas de rerenderizar.

Angular necesita una forma de entender que elementos son realmente nuevos, cambiados o eliminados.

Por eso importa el renderizado de listas con tracking.

Si Angular puede identificar los elementos de forma predecible, evita reemplazar mas DOM del necesario.

## Pensar en renderizado incremental

El rendimiento no trata solo de una configuracion de Angular.

Tambien trata de disenar la UI con cuidado.

Por ejemplo:

- renderizar solo lo necesario
- derivar valores de forma eficiente
- evitar recalculos innecesarios
- mantener enfocadas las filas del componente

Es probable que esta leccion muestre esas ideas a traves de un tablero de revision o una cola de moderacion.

## Lo que ensena el ejemplo

Un tablero de revision es una buena leccion de rendimiento porque simula una pantalla con muchos elementos repetidos y cambios de estado frecuentes.

Ese es exactamente el tipo de lugar donde se vuelven visibles los malos habitos de deteccion de cambios.

## El principal cambio de mentalidad

El cambio clave es este:

No preguntes solo si la UI funciona.

Pregunta tambien si la UI se actualiza de forma eficiente.

Esa es una habilidad frontend mas avanzada, pero importa mucho en aplicaciones reales.

## Como estudiar la leccion

Leela en este orden:

1. Encuentra donde se habilita `OnPush`.
2. Inspecciona como se actualizan los datos.
3. Observa como se hace tracking de la lista repetida.
4. Identifica donde los valores derivados o computados reducen trabajo innecesario.

Esa estrategia de lectura revelara la leccion con mucha mas claridad que empezar por el CSS o el marcado.

## Ejercicios

1. Anade otra accion sobre la lista y manten la actualizacion inmutable.
2. Elimina temporalmente la expresion de tracking y observa la diferencia en la intencion del codigo.
3. Crea otro componente pequeno de fila y considera si `OnPush` deberia vivir ahi tambien.
4. Anade otro valor derivado de resumen sin duplicar el estado fuente.

## Antes de continuar

Asegurate de entender:

- que intenta optimizar `OnPush`
- por que las actualizaciones inmutables ayudan a Angular
- por que importa el tracking de listas en UIs repetidas

La siguiente leccion entra en autenticacion y flujos protegidos, donde routing y estado se combinan en otro patron de aplicacion real.
