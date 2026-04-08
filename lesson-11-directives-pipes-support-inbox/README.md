# Leccion 11: Directivas y pipes con una bandeja de soporte

Esta leccion es una aplicacion Angular basada en Vite que ensena como empaquetar comportamiento de presentacion reutilizable en una directiva de atributo personalizada y pipes personalizados.

## Que ensena esta leccion

- Como construir una directiva de atributo personalizada standalone
- Como usar `HostBinding` para controlar estilos del elemento host
- Como usar `HostListener` para reaccionar a eventos del host
- Como crear pipes personalizados standalone para formato especifico del dominio
- Como las directivas y los pipes reducen logica de vista repetida en las plantillas

## Archivos principales

- `src/app/directives/priority-emphasis.directive.ts`: estilo reutilizable del host y comportamiento hover
- `src/app/pipes/friendly-status.pipe.ts`: transforma valores internos de estado en texto orientado al usuario
- `src/app/pipes/relative-time.pipe.ts`: formatea marcas de tiempo como etiquetas relativas sencillas
- `src/app/app.component.html`: aplica la directiva y los pipes en una pantalla de bandeja realista

## Orden de exploracion sugerido

1. Abre `priority-emphasis.directive.ts` e inspecciona los host bindings y host listeners.
2. Lee ambos archivos de pipes y compara sus responsabilidades de transformacion.
3. Abre `app.component.html` y encuentra donde se aplica cada pieza reutilizable.
4. Cambia prioridades y estados de tickets para ver como la directiva y los pipes actualizan la vista.
5. Considera cuanta logica repetida apareceria en la plantilla sin estas piezas reutilizables.

## Por que este ejemplo es realista

Los dashboards de soporte, herramientas de administracion, pantallas internas y flujos de trabajo suelen repetir las mismas reglas de formato y enfasis visual en muchas vistas. Las directivas y los pipes ayudan a mantener esas reglas consistentes y reutilizables.

## Ejecutar la leccion

```bash
npm install
npm run dev
```

## Siguiente leccion

La Leccion 12 se centrara en patrones de rendimiento y deteccion de cambios.
