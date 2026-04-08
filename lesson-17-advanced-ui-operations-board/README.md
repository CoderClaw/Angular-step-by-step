# Leccion 17: Patrones avanzados de integracion de UI con un tablero de operaciones

Esta leccion es una aplicacion Angular basada en Vite que ensena como combinar primitivas de UI de Angular con capacidades del navegador para construir flujos de trabajo interactivos mas ricos.

## Que ensena esta leccion

- Como usar drag-and-drop de Angular CDK en un componente standalone
- Como coordinar el estado del elemento seleccionado con un panel de detalle
- Como mantener predecibles las interacciones complejas de UI mediante actualizaciones inmutables de estado
- Como integrar la API de Clipboard del navegador desde handlers de eventos de Angular
- Como estructurar codigo con muchas interacciones para que la plantilla siga siendo legible

## Archivos principales

- `src/app/app.component.ts`: logica de drag-drop, estado del elemento seleccionado e integracion del portapapeles
- `src/app/app.component.html`: layout del tablero, listas drag-drop y panel de detalle
- `src/app/app.component.css`: estados visuales del tablero, la tarjeta seleccionada y la retroalimentacion de arrastre
- `src/app/models/operations-board.model.ts`: modelos tipados del tablero y de tareas
- `src/app/app.component.spec.ts`: pruebas del componente para transiciones de estado del tablero e integracion del portapapeles

## Orden de exploracion sugerido

1. Abre `app.component.ts` e inspecciona el estado de tareas y el calculo de la tarea seleccionada.
2. Lee el metodo `drop()` y observa como el evento de drag-drop se mapea de vuelta al estado de la aplicacion.
3. Inspecciona la plantilla y observa donde se aplican `cdkDropList`, `cdkDrag` y `cdkDragHandle`.
4. Revisa `copySelectedTaskSummary()` y observa como el codigo Angular puede envolver de forma limpia APIs del navegador.
5. Ejecuta la app, arrastra tareas entre columnas y copia el resumen de la tarea seleccionada.

## Por que este ejemplo es realista

Los equipos de producto suelen necesitar tableros, colas, planificadores o dashboards operativos donde los usuarios mueven trabajo entre estados, inspeccionan detalles y comparten o copian actualizaciones estructuradas. Las aplicaciones Angular rara vez viven solo de formularios y tablas; a menudo tambien necesitan estos patrones de interaccion mas ricos.

## Ejecutar la leccion

```bash
npm install
npm run dev
npm test
```

## Siguiente leccion

La Leccion 18 sera la aplicacion capstone que combina los conceptos de la serie en un proyecto Angular mas amplio.
