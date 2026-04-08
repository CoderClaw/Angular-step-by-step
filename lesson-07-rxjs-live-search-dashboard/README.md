# Leccion 07: Conceptos esenciales de RxJS con un dashboard de busqueda en vivo

Esta leccion es una aplicacion Angular basada en Vite que ensena como los streams de RxJS combinan la entrada del usuario, el estado de filtros y los resultados asincronos de busqueda en un unico modelo de UI.

## Que ensena esta leccion

- Como modelar la entrada del usuario como streams de RxJS
- Como `debounceTime` reduce los eventos de entrada ruidosos
- Como `distinctUntilChanged` ignora valores repetidos
- Como `combineLatest` une streams independientes en un unico contexto de busqueda
- Como `switchMap` cancela busquedas asincronas antiguas cuando empieza una nueva
- Como `AsyncPipe` renderiza directamente en la plantilla el estado observable
- Como `shareReplay` ayuda a mantener reutilizable un stream derivado

## Archivos principales

- `src/app/app.component.ts`: composicion de streams y creacion del view model
- `src/app/services/work-item-search.service.ts`: fuente de busqueda asincrona usada por la UI
- `src/app/work-item.model.ts`: estructuras tipadas de resultados de busqueda y view model

## Orden de exploracion sugerido

1. Abre `src/app/services/work-item-search.service.ts` e inspecciona la fuente de busqueda asincrona.
2. Lee `src/app/app.component.ts` y sigue `query$`, `statusFilter$` y `vm$`.
3. Inspecciona el bloque `switchMap` y observa donde se introduce el estado de carga.
4. Ejecuta la app y escribe rapidamente para ver la busqueda con debounce en accion.
5. Cambia el filtro de estado y observa como `combineLatest` impulsa un nuevo conjunto de resultados.

## Por que este ejemplo es realista

Las pantallas de busqueda, dashboards, bandejas de entrada y herramientas de administracion suelen depender de varios inputs cambiantes al mismo tiempo. RxJS se vuelve valioso cuando esos inputs necesitan combinarse, aplicarse con debounce, cancelarse y presentarse como un unico estado de UI basado en streams.

## Ejecutar la leccion

```bash
npm install
npm run dev
```

## Siguiente leccion

La Leccion 08 introducira los signals de Angular y comparara el estado basado en signals con el estado basado en streams.
