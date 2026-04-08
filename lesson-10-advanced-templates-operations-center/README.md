# Leccion 10: Plantillas avanzadas con un centro de operaciones

Esta leccion es una aplicacion Angular basada en Vite que ensena reutilizacion avanzada de plantillas con proyeccion de contenido y plantillas proporcionadas por el padre.

## Que ensena esta leccion

- Como proyectar contenido en componentes reutilizables con `ng-content`
- Como crear bloques de renderizado propiedad del padre con `ng-template`
- Como un componente reutilizable puede renderizar esos bloques con `ngTemplateOutlet`
- Como exponer slots flexibles de acciones sin fijar botones dentro de un componente reutilizable
- Como mantener reutilizable la estructura del layout dejando el renderizado de filas a la pantalla consumidora

## Archivos principales

- `src/app/components/panel-shell.component.ts`: shell de layout reutilizable usando proyeccion de contenido
- `src/app/components/template-grid.component.ts`: componente de grid reutilizable guiado por inputs de plantilla
- `src/app/app.component.html`: plantillas de filas propiedad del padre y plantillas de estado vacio

## Orden de exploracion sugerido

1. Lee `panel-shell.component.html` e inspecciona el slot proyectado de acciones.
2. Lee `template-grid.component.html` y sigue como `ngTemplateOutlet` renderiza una plantilla del padre.
3. Abre `app.component.html` y compara la plantilla de fila de aprobaciones con la plantilla de fila de incidentes.
4. Observa que ambas pantallas reutilizan los mismos componentes circundantes mientras personalizan solo los bloques de plantilla.
5. Ejecuta la app y elimina datos en el codigo para ver como se renderizan los estados vacios definidos por el padre.

## Por que este ejemplo es realista

Las herramientas de administracion, pantallas internas de operaciones y dashboards suelen necesitar que el mismo layout o shell de grid se reutilice en muchas areas funcionales mientras cada area sigue controlando su propio contenido de filas, botones de accion y estados vacios. Las plantillas de Angular se adaptan bien a ese estilo de reutilizacion.

## Ejecutar la leccion

```bash
npm install
npm run dev
```

## Siguiente leccion

La Leccion 11 introducira directivas personalizadas y pipes para comportamiento de presentacion reutilizable.
