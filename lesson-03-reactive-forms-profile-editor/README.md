# Leccion 03: Formularios reactivos con un editor de perfil

Esta leccion es una aplicacion Angular basada en Vite que ensena formularios reactivos tipados, validacion y envio de formularios con un editor de perfil realista.

## Que ensena esta leccion

- Como construir un formulario reactivo tipado con `FormGroup` y `FormControl`
- Como funcionan los validadores de Angular sobre controles individuales
- Como crear un validador personalizado entre campos para reglas de negocio
- Como mostrar retroalimentacion de validacion en la plantilla
- Como enviar solo datos de formulario validos
- Como `getRawValue()` devuelve un payload tipado que coincide con tu modelo de dominio

## Archivos principales

- `src/app/app.component.ts`: definicion del formulario tipado y logica de envio
- `src/app/app.component.html`: bindings del formulario y mensajes de validacion
- `src/app/profile.model.ts`: tipos del payload guardado
- `src/app/validators/notification-preference.validator.ts`: validador de negocio personalizado

## Orden de exploracion sugerido

1. Abre `src/app/profile.model.ts` e inspecciona la forma de los datos guardados.
2. Lee `src/app/app.component.ts` e identifica cada control tipado del formulario.
3. Inspecciona el validador personalizado y observa por que pertenece al nivel de form-group.
4. Ejecuta la app y provoca errores de validacion a proposito.
5. Envia un formulario valido y compara la vista previa guardada con la definicion del formulario.

## Por que este ejemplo es realista

Muchas aplicaciones Angular incluyen editores de perfil, configuraciones de administracion, pantallas de onboarding o formularios de configuracion. Los formularios reactivos son utiles cuando una pantalla necesita validacion explicita, estado predecible y reglas entre campos.

## Ejecutar la leccion

```bash
npm install
npm run dev
```

## Siguiente leccion

La Leccion 04 sacara logica fuera del componente y la llevara a servicios mediante la inyeccion de dependencias de Angular.
