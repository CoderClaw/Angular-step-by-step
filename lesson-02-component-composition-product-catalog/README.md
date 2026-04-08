# Leccion 02: Composicion de componentes con un catalogo de productos

Esta leccion es una aplicacion Angular basada en Vite que ensena como dividir una pagina en componentes standalone reutilizables.

## Que ensena esta leccion

- Como un componente padre posee la fuente de verdad
- Como los componentes hijos reciben datos mediante bindings tipados con `input()`
- Como los componentes hijos envian eventos hacia arriba mediante `output()` tipados
- Como organizar una pantalla en piezas de UI enfocadas y reutilizables
- Como los modelos tipados ayudan a que varios componentes compartan los mismos datos de forma segura
- Como los componentes padre coordinan seleccion, filtrado y vistas derivadas

## Componentes principales

- `app.component`: posee los datos de productos, el estado de filtrado y el estado de seleccion
- `product-filter.component`: emite cambios de busqueda y categoria
- `product-list.component`: renderiza la coleccion y reenvia eventos de hijos
- `product-card.component`: renderiza una tarjeta de producto reutilizable
- `product-detail.component`: muestra el resumen del producto seleccionado

## Orden de exploracion sugerido

1. Abre `src/app/product.model.ts` e inspecciona los tipos compartidos.
2. Lee `src/app/app.component.ts` y encuentra el estado que actua como fuente de verdad.
3. Sigue los inputs y outputs a traves de los componentes hijos.
4. Ejecuta la app y selecciona productos, cambia filtros y alterna el estado de shortlist.
5. Mueve mentalmente una pieza de marcado entre componentes y observa que datos necesita del padre.

## Por que este ejemplo es realista

Las aplicaciones Angular reales rara vez mantienen una pagina completa dentro de un solo componente. Los catalogos de productos, dashboards, pantallas de administracion y herramientas internas se benefician de dividirse en componentes mas pequenos con responsabilidades claras.

## Ejecutar la leccion

```bash
npm install
npm run dev
```

## Siguiente leccion

La Leccion 03 introducira los formularios de Angular con mayor profundidad, incluyendo validacion y estructura tipada de formularios reactivos.
