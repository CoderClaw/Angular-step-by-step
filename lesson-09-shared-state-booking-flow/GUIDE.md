# Guia de la Leccion 09: Patrones de estado compartido

Esta leccion pasa del estado local dentro de un componente al estado compartido usado por varias partes de la UI.

Ese es un paso arquitectonico importante.

## Por que importa el estado compartido

Muchas aplicaciones tienen varias areas de UI que dependen todas de los mismos datos subyacentes.

Ejemplos:

- un panel de filtros
- una lista de resultados
- un panel de resumen
- una vista previa del elemento seleccionado

Si cada componente mantiene su propia version separada de los datos, la UI se vuelve inconsistente.

El estado compartido resuelve eso creando una fuente central de verdad.

## Que construye esta leccion

El ejemplo es un flujo de reservas.

Es un ejemplo solido de estado compartido porque las interfaces de reserva suelen tener varias piezas coordinadas:

- los filtros actuales
- las ofertas disponibles
- la opcion seleccionada
- el resumen de la reserva

Todas esas piezas deben permanecer sincronizadas.

## El patron principal

Es probable que esta leccion use un servicio tipo store.

Ese servicio se convierte en el propietario del estado que importa a varios componentes.

En lugar de que un componente pase todo a traves de muchos niveles, cada componente relevante puede leer desde el servicio compartido.

Esto ayuda porque reduce cadenas enredadas entre padre e hijo y mantiene la logica de coordinacion en un solo lugar.

## Por que esto aun no es una libreria completa de estado

Esta leccion es importante porque ensena el patron sin exigir una gran libreria externa de gestion de estado.

La idea es mas simple:

- mantener el estado compartido en un solo lugar
- exponer metodos de lectura o estado computado
- exponer metodos de actualizacion con significado

Eso te da el beneficio de una coordinacion central sin complejidad innecesaria.

## El papel de un servicio tipo store

Un servicio tipo store normalmente responde preguntas como:

- cual es el estado actual del filtro?
- que elemento esta seleccionado?
- que datos deberian ser visibles ahora mismo?
- como actualizo una parte del estado compartido de forma segura?

Por eso el servicio suele exponer tanto:

- datos actuales o computados
- metodos que cambian esos datos

## Por que este patron es mejor que duplicar estado

Si el componente de filtros posee una version del filtro actual y el panel de resumen posee otra, los errores aparecen rapido.

El estado compartido evita ese problema haciendo que un solo lugar sea la referencia autoritativa.

Por eso a menudo se habla de una sola fuente de verdad.

## Como estudiar la leccion

Leela asi:

1. Identifica que datos son compartidos.
2. Encuentra donde se posee ese estado.
3. Encuentra que componentes lo leen.
4. Encuentra que metodos lo actualizan.
5. Observa como una accion del usuario afecta varias regiones de la UI.

Ese ultimo paso es el mas importante.

## Lo que esto ensena mas alla del ejemplo

El flujo de reservas es solo un escenario.

La leccion mas grande trata de coordinacion.

Siempre que varios componentes deban permanecer sincronizados, un propietario central de estado compartido suele ser la solucion mas limpia.

## Ejercicios

1. Anade un filtro nuevo y haz que toda la UI dependiente se actualice correctamente.
2. Anade otro campo de resumen derivado de la reserva seleccionada.
3. Anade una accion de reinicio en el store.
4. Mueve una pieza de logica duplicada al servicio compartido.

## Antes de continuar

Asegurate de entender:

- por que varios componentes no deberian poseer copias del mismo estado
- que significa una sola fuente de verdad
- que responsabilidades pertenecen al servicio store compartido

La siguiente leccion explora plantillas avanzadas, que se enfocan mas en composicion flexible de UI que en estado compartido.
