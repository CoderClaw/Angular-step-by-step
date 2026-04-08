# Guia de la Leccion 08: Signals de Angular

Esta leccion introduce los signals de Angular, que son una forma reactiva moderna de gestionar el estado local de una aplicacion.

Ya has visto estado derivado con getters y streams reactivos con RxJS. Los signals dan a Angular otra herramienta para el estado que es especialmente buena para reactividad local y sincronica.

## Que resuelven los signals

Muchos valores de UI dependen de otros valores de UI.

Ejemplos:

- un filtro seleccionado
- si un panel es visible
- un conteo calculado
- preferencias del usuario almacenadas localmente

Estos valores suelen cambiar en respuesta directa a acciones del usuario. Los signals hacen explicitas esas relaciones.

## Los bloques principales

Es probable que esta leccion introduzca tres funciones clave:

- `signal()`
- `computed()`
- `effect()`

### `signal()`

Un signal almacena un valor reactivo.

Se parece a una propiedad normal, pero Angular puede seguir cuando cambia.

Esto lo hace util para estado de UI que cambia con el tiempo.

### `computed()`

Un signal computado deriva un valor a partir de otros signals.

Se parece en espiritu a un getter, pero ahora Angular rastrea automaticamente las dependencias.

Eso significa que el valor computado se actualiza cuando cambian los signals de los que depende.

### `effect()`

Un effect ejecuta logica de efectos secundarios en respuesta a cambios de signals.

Esto es util para cosas como:

- persistir preferencias
- registrar eventos
- sincronizar estado con APIs del navegador

El punto clave es que los effects son para efectos secundarios, no para reemplazar cualquier otra forma de logica.

## Por que esta leccion usa preferencias

Las preferencias son un buen ejemplo didactico porque son:

- locales a la app
- reactivas en la UI
- a menudo persistidas en local storage

Eso las convierte en una opcion natural para usar signals.

Se puede ver con claridad como:

- el usuario cambia una preferencia
- el signal se actualiza
- la UI reacciona
- el nuevo valor puede persistirse

## Signals vs RxJS

Signals y RxJS son ambos reactivos, pero no son la misma herramienta.

Los signals suelen encajar muy bien para:

- estado de UI local y sincronico
- valores derivados dentro de un componente o servicio tipo store
- estado expuesto a la plantilla

RxJS suele encajar mejor para:

- streams asincronos
- coordinacion de eventos a lo largo del tiempo
- HTTP y composicion de streams

Esta leccion es importante porque te ayuda a ver donde los signals son una solucion mas limpia que un pipeline completo de Observables.

## El modelo mental clave

Con signals, Angular puede entender automaticamente:

- que valor cambio
- que valores derivados dependen de el
- que partes de la plantilla necesitan actualizarse

Eso hace que el codigo basado en signals se sienta directo y legible para estado local.

## Como estudiar esta leccion

Leela en este orden:

1. Encuentra los signals base.
2. Encuentra los signals computados que derivan de ellos.
3. Encuentra el effect que persiste o sincroniza valores.
4. Sigue como la plantilla lee el estado de los signals.

Ese orden de lectura ayuda a ver el grafo de dependencias en lugar de solo la sintaxis.

## Ejercicios

1. Anade una preferencia mas y persiste su valor.
2. Crea otro valor computado a partir de los signals existentes.
3. Elimina un getter derivado y reescribelo con `computed()`.
4. Anade un boton de reinicio que restaure las preferencias por defecto.

## Antes de continuar

Asegurate de entender:

- que almacena un signal
- que esta haciendo `computed()`
- por que `effect()` es distinto del estado computado
- por que las preferencias son un buen caso de uso para signals

La siguiente leccion usa estado compartido entre componentes, que es donde estas ideas se vuelven aun mas utiles.
