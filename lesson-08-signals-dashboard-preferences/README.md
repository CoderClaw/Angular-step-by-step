# Leccion 08: Signals de Angular con preferencias de dashboard

Esta leccion es una aplicacion Angular basada en Vite que ensena como los signals modelan estado local directamente en un componente y como `computed()` y `effect()` se construyen sobre ese estado.

## Que ensena esta leccion

- Como crear estado local con `signal()`
- Como derivar estado de UI con `computed()`
- Como reaccionar a cambios de estado con `effect()`
- Como las actualizaciones con signals se mantienen sincronicas y explicitas dentro de un componente
- Como persistir preferencias sin suscripciones
- Como el estado basado en signals se diferencia del enfoque basado en RxJS de la leccion anterior

## Archivos principales

- `src/app/app.component.ts`: signals, valores computados y efecto de persistencia
- `src/app/dashboard-tile.model.ts`: modelos tipados del dashboard y de preferencias

## Orden de exploracion sugerido

1. Abre `src/app/app.component.ts` e identifica los signals fuente.
2. Inspecciona `visibleTiles`, `totalTiles` y otros valores computados.
3. Lee el bloque `effect()` y observa por que la persistencia es un efecto secundario y no estado derivado.
4. Ejecuta la app y cambia filtros para ver como los valores computados se actualizan de inmediato.
5. Recarga la pagina y confirma que vuelve el estado persistido de los signals.

## Signals vs RxJS en esta secuencia

- La Leccion 07 uso streams de RxJS para composicion asincrona de multiples eventos.
- La Leccion 08 usa signals para estado local sincronico y UI derivada.
- En aplicaciones Angular reales, ambos enfoques suelen coexistir: signals para estado local del componente, RxJS para streams asincronos y fuentes de eventos externas.

## Por que este ejemplo es realista

Las preferencias de dashboard, visibilidad de paneles, widgets guardados, modo compacto y filtros de vista son piezas de estado comunes en herramientas internas y aplicaciones de administracion. Los signals encajan bien cuando el estado es local, sincronico y muy leido por la plantilla.

## Ejecutar la leccion

```bash
npm install
npm run dev
```

## Siguiente leccion

La Leccion 09 desarrollara estos conceptos con patrones de estado compartido mas amplios entre varias partes de una aplicacion.
