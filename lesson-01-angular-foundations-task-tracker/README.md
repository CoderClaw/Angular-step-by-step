# Leccion 01: Fundamentos de Angular con Vite

Esta leccion es un pequeno gestor de tareas en Angular construido con TypeScript y Vite.

## Que ensena esta leccion

- Como se estructura una aplicacion Angular standalone
- Como `bootstrapApplication` inicia la aplicacion
- Como el estado del componente impulsa la plantilla
- Como la interpolacion muestra valores en la UI
- Como el event binding reacciona a las acciones del usuario
- Como `[(ngModel)]` permite una entrada de formulario simple
- Como el flujo de control moderno de Angular usa `@if` y `@for`
- Como las interfaces de TypeScript mantienen explicitos los datos de la aplicacion

## Estructura del proyecto

- `src/main.ts`: punto de entrada de la aplicacion
- `src/app/app.config.ts`: configuracion global de la aplicacion
- `src/app/task.model.ts`: modelo tipado de tareas para la leccion
- `src/app/app.component.ts`: logica y estado de la leccion
- `src/app/app.component.html`: ejemplos de plantilla comentados
- `src/app/app.component.css`: estilos simples y adaptables

## Ejecutar la leccion

```bash
npm install
npm run dev
```

## Orden de exploracion sugerido

1. Abre `src/app/task.model.ts` e inspecciona la interfaz `Task`.
2. Lee `src/app/app.component.ts` e identifica el estado del componente.
3. Relaciona cada propiedad y metodo con el lugar donde se usa en la plantilla.
4. Ejecuta la app y prueba anadir, alternar, filtrar y eliminar tareas.
5. Cambia los datos iniciales para ver como Angular actualiza la pagina.

## Por que este ejemplo es realista

Incluso las aplicaciones de negocio simples suelen empezar con pantallas como esta: un formulario, una lista, un filtro y contadores derivados. La leccion se mantiene pequena, pero los patrones son los mismos que se usan en aplicaciones Angular mas grandes.

## Siguiente leccion

La Leccion 02 dividira una pagina mayor en componentes reutilizables e introducira la comunicacion tipada entre padre e hijo.
