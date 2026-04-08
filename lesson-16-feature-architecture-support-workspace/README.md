# Leccion 16: Arquitectura por features y estructura Angular escalable con un espacio de soporte

Esta leccion es una aplicacion Angular basada en Vite que ensena como organizar un proyecto Angular en crecimiento en areas `core`, `shared`, `layout` y `features`.

## Que ensena esta leccion

- Como separar servicios y modelos de toda la aplicacion dentro de un area `core`
- Como mantener la UI presentacional reutilizable dentro de `shared`
- Como usar un shell de `layout` para alojar la navegacion y el marco de rutas
- Como agrupar pantallas de dominio bajo `features`
- Como los limites de features a nivel de ruta ayudan a que una base de codigo escale mas alla de un unico `app.component.ts`

## Archivos principales

- `src/app/app.routes.ts`: mapa de rutas de nivel superior y limites entre features
- `src/app/core/services/support-workspace.service.ts`: fuente de datos global usada por varias features
- `src/app/layout/workspace-shell.component.ts`: shell compartido para navegacion y metricas
- `src/app/shared/ui/metric-card/metric-card.component.ts`: componente de UI reutilizable
- `src/app/features/triage/pages/triage-page.component.ts`: pantalla de la feature de triage
- `src/app/features/handoff/pages/handoff-page.component.ts`: pantalla de la feature de handoff
- `src/app/core/services/support-workspace.service.spec.ts`: verificacion a nivel de servicio para datos compartidos del workspace
- `src/app/layout/workspace-shell.component.spec.ts`: verificacion del renderizado del shell

## Orden de exploracion sugerido

1. Empieza por `app.routes.ts` e inspecciona como se separan las areas por feature.
2. Lee `layout/workspace-shell.component.ts` para ver que pertenece a un shell.
3. Abre `core/services/support-workspace.service.ts` e identifica que datos se comparten entre features.
4. Compara los dos componentes de pagina de feature y observa como cada uno posee solo su propia pantalla.
5. Inspecciona `shared/ui/metric-card` y observa como la UI reutilizable se mantiene desacoplada del comportamiento de dominio.

## Por que este ejemplo es realista

Las aplicaciones Angular grandes se vuelven dificiles de mantener cuando todo se anade a una sola carpeta o a un unico componente raiz. Los equipos reales suelen necesitar un lugar consistente para UI compartida, servicios globales, pantallas especificas de feature y preocupaciones de layout. Esta leccion mantiene la app pequena, pero demuestra la estructura que escala.

## Ejecutar la leccion

```bash
npm install
npm run dev
npm test
```

## Siguiente leccion

La Leccion 17 se centrara en patrones avanzados de integracion de UI en Angular.
