# Leccion 12: Rendimiento y deteccion de cambios con un tablero de revision

Esta leccion es una aplicacion Angular basada en Vite que ensena patrones practicos de rendimiento para listas de UI medianas y grandes.

## Que ensena esta leccion

- Como usar `ChangeDetectionStrategy.OnPush` en componentes standalone
- Como las actualizaciones inmutables ayudan a que los componentes OnPush se mantengan predecibles
- Como `computed()` puede evitar trabajo repetido de derivacion en vistas filtradas
- Como `track item.id` reduce el churn del DOM en listas grandes
- Como revelar conjuntos grandes de resultados de forma incremental en lugar de renderizarlo todo a la vez

## Archivos principales

- `src/app/app.component.ts`: estado fuente, filtros computados y actualizaciones inmutables de listas
- `src/app/components/review-row.component.ts`: componente de fila optimizado usando OnPush
- `src/app/app.component.html`: renderizado de listas grandes con tracking y carga incremental

## Orden de exploracion sugerido

1. Abre `review-row.component.ts` y confirma que usa `ChangeDetectionStrategy.OnPush`.
2. Lee `app.component.ts` e inspecciona `filteredItems`, `visibleItems` y los metodos de actualizacion inmutable.
3. Inspecciona el bucle `@for` en `app.component.html` y observa la expresion `track item.id`.
4. Ejecuta la app y aprueba o bloquea varias filas mientras haya filtros activos.
5. Compara esta estructura con lecciones anteriores y observa como la guia de rendimiento aparece tanto en las actualizaciones de estado como en el renderizado de la plantilla.

## Por que este ejemplo es realista

Las colas de administracion, listas de auditoria, dashboards de moderacion, tableros de revision y backlogs de soporte suelen renderizar muchas filas a la vez y actualizarlas con frecuencia. El trabajo de rendimiento en Angular suele empezar con limites sensatos de deteccion de cambios, actualizaciones inmutables y tracking estable de listas, no con complejidad prematura.

## Ejecutar la leccion

```bash
npm install
npm run dev
```

## Siguiente leccion

La Leccion 13 introducira autenticacion y flujos protegidos de aplicacion.
