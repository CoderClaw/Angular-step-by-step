# Leccion 19: NgRx Incident Command Center

Esta leccion es una aplicacion Angular basada en Vite que introduce gestion formal de estado global con NgRx a traves de un pequeno workspace de triage de incidentes.

## Que ensena esta leccion

- Como encajan actions, reducers, selectors y effects dentro de una feature Angular
- Como los componentes leen estado con `store.select(...)` y lo actualizan despachando actions
- Como mantener puros los reducers mientras el trabajo HTTP se mueve a effects
- Como el estado derivado pertenece a selectors en lugar de recalcularse en cada componente
- Como modelar carga, filtros, seleccion y paneles de detalle dentro de un unico store global coherente

## Archivos principales

- `src/app/state/incidents.actions.ts`: todos los eventos nombrados de transicion de estado para la feature
- `src/app/state/incidents.reducer.ts`: estado de la feature y logica del reducer
- `src/app/state/incidents.selectors.ts`: modelos de lectura reutilizables y estado derivado
- `src/app/state/incidents.effects.ts`: efectos secundarios de carga asincrona
- `src/app/services/incidents-api.service.ts`: API simulada que imita carga remota de incidentes
- `src/app/components/incident-toolbar.component.ts`: despacha acciones de filtro y recarga
- `src/app/components/incident-list.component.ts`: renderiza incidentes filtrados y despacha cambios de seleccion y resolucion
- `src/app/components/incident-detail.component.ts`: muestra el incidente actualmente seleccionado desde el estado del store

## Orden de exploracion sugerido

1. Empieza por `incidents.actions.ts` e identifica los eventos de la feature.
2. Lee `incidents.reducer.ts` y sigue que partes del estado cambian para cada accion.
3. Abre `incidents.selectors.ts` y encuentra el estado derivado usado por la UI.
4. Lee `incidents.effects.ts` para ver donde ocurre la carga asincrona.
5. Compara los componentes de toolbar y lista para ver como los componentes despachan acciones y seleccionan estado sin poseer directamente los datos.

## Por que este ejemplo es realista

Los sistemas de soporte, dashboards operativos, tableros de incidentes y herramientas de administracion suelen tener varias regiones distantes de UI que necesitan la misma verdad global: filtros activos, entidades seleccionadas, estado asincrono y resumenes computados. NgRx encaja bien de forma practica cuando esos flujos crecen mas alla de un pequeno store personalizado.

## Ejecutar la leccion

```bash
npm install
npm run dev
```

## Leccion anterior

La Leccion 18 combino muchas ideas de Angular en una app capstone. Esta leccion retoma el problema del estado compartido con una arquitectura NgRx mas formal.
