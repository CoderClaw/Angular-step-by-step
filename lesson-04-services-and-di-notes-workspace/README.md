# Leccion 04: Servicios e inyeccion de dependencias con un espacio de notas

Esta leccion es una aplicacion Angular basada en Vite que ensena como mover la logica de datos y la persistencia fuera de un componente y llevarla a un servicio inyectado.

## Que ensena esta leccion

- Como crear un servicio Angular con `@Injectable`
- Como `providedIn: 'root'` hace que un servicio este disponible mediante DI de Angular
- Como usar `inject()` dentro de un componente standalone
- Como mantener la persistencia y las reglas de mutacion fuera del componente de UI
- Como local storage puede ocultarse detras de una API de servicio
- Como los componentes pueden centrarse en el estado de vista mientras los servicios gestionan los datos de la aplicacion

## Archivos principales

- `src/app/services/notes.service.ts`: almacenamiento, carga, guardado y logica de mutacion de notas
- `src/app/app.component.ts`: estado de UI y uso del servicio mediante inyeccion de dependencias
- `src/app/note.model.ts`: tipos de nota usados en toda la app

## Orden de exploracion sugerido

1. Abre `src/app/note.model.ts` e inspecciona la forma de la nota.
2. Lee `src/app/services/notes.service.ts` y encuentra donde se aisla el almacenamiento.
3. Lee `src/app/app.component.ts` y observa como `inject()` le da al componente acceso al servicio.
4. Ejecuta la app, anade notas, fija notas, archiva notas y recarga la pagina para confirmar la persistencia.
5. Compara el codigo del componente con el de lecciones anteriores y observa cuanta menos logica de datos posee ahora.

## Por que este ejemplo es realista

Las aplicaciones Angular reales suelen necesitar persistir pequenas piezas de datos, coordinar mutaciones y compartir logica entre pantallas. Un servicio es el lugar natural para ese trabajo, mientras los componentes permanecen enfocados en el renderizado y la interaccion del usuario.

## Ejecutar la leccion

```bash
npm install
npm run dev
```

## Siguiente leccion

La Leccion 05 introducira routing y convertira una app de una sola pantalla en un pequeno shell de aplicacion Angular con varias paginas.
