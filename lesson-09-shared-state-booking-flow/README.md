# Leccion 09: Patrones de estado compartido con un flujo de reservas

Esta leccion es una aplicacion Angular basada en Vite que ensena como varias partes de una pantalla pueden compartir un servicio de estado centralizado en lugar de pasar todo a traves de un componente padre.

## Que ensena esta leccion

- Como centralizar estado en un servicio que actua como un pequeno store
- Como varios componentes standalone pueden leer y mutar el mismo estado compartido
- Como separar estado fuente, metodos de mutacion y estado derivado
- Como `computed()` puede usarse en un servicio de estado compartido, no solo dentro de un componente
- Como evitar coordinacion innecesaria del componente padre cuando el estado es realmente compartido

## Archivos principales

- `src/app/services/booking-store.service.ts`: fuente de verdad compartida, mutaciones y estado derivado
- `src/app/components/booking-filters.component.ts`: controles de filtro que escriben en el estado compartido
- `src/app/components/booking-offers.component.ts`: lista de ofertas que lee estado filtrado y actualiza conteos de asientos
- `src/app/components/booking-summary.component.ts`: barra lateral de resumen que lee directamente el mismo estado

## Orden de exploracion sugerido

1. Abre `src/app/services/booking-store.service.ts` e identifica signals fuente, mutaciones y valores computados.
2. Lee `booking-filters.component.ts` y observa como actualiza el store.
3. Lee `booking-offers.component.ts` y mira como lee y muta el estado de seleccion.
4. Lee `booking-summary.component.ts` y observa que se mantiene sincronizado sin inputs del padre.
5. Ejecuta la app y observa como los cambios en un componente afectan de inmediato a los demas.

## Por que este ejemplo es realista

Los flujos de reserva, carritos, checkouts de varios pasos, planificadores de personal y herramientas internas de programacion suelen necesitar que varias areas independientes de la UI permanezcan sincronizadas. Un pequeno servicio de estado compartido es un patron practico antes de introducir librerias externas de estado mas grandes.

## Ejecutar la leccion

```bash
npm install
npm run dev
```

## Siguiente leccion

La Leccion 10 se centrara en plantillas avanzadas y patrones de reutilizacion de contenido.
