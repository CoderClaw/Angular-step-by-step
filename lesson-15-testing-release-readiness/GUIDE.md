# Guia de la Leccion 15: Testing de componentes y servicios Angular

Esta leccion introduce el testing como una parte normal del desarrollo Angular, no como un extra opcional.

A estas alturas de la serie, ya has visto componentes, servicios, routing, HTTP, signals y estado compartido. El testing es la forma de ganar confianza en que esos comportamientos siguen funcionando a medida que cambia la app.

## Por que importa el testing

Sin pruebas, cada cambio depende mucho mas de comprobaciones manuales.

Eso se vuelve arriesgado a medida que crece una base de codigo.

Las pruebas ayudan a responder preguntas como:

- sigue funcionando esta regla de negocio?
- sigue renderizando este componente el contenido esperado?
- rompio un refactor algo sutil?

## Por que esta leccion usa dos niveles de testing

El ejemplo se centra en dos objetivos de prueba muy comunes:

- un servicio con logica de negocio
- un componente con UI renderizada

Esa es una buena separacion didactica porque muestra que no todo necesita el mismo estilo de prueba.

## Pruebas de servicios

Las pruebas de servicios son buenas cuando quieres verificar logica sin que el DOM se interponga.

Este suele ser el lugar mas limpio para probar:

- calculos
- construccion de resumenes
- reglas de decision
- transformaciones de valores

Si la regla de negocio es correcta en el servicio, el componente puede mantenerse mas simple.

## Pruebas de componentes

Las pruebas de componentes son utiles cuando la pregunta importante es:

Que ve realmente el usuario?

Estas pruebas suelen verificar:

- texto renderizado
- UI condicional
- comportamiento de interaccion
- salida de plantilla basada en dependencias simuladas

En esta leccion, la prueba del componente probablemente sustituye el servicio real por un provider simulado para poder comprobar la UI con datos conocidos.

## Por que importa el mocking

El mocking es util porque una prueba de componente normalmente deberia centrarse en el componente.

Si la logica real del servicio ya esta probada por separado, la prueba del componente puede usar una version falsa mas simple y limitarse a verificar el comportamiento de renderizado.

Eso mantiene las pruebas enfocadas y mas faciles de entender.

## Vitest y Angular TestBed

Esta leccion usa Vitest con Angular TestBed.

TestBed crea un entorno de pruebas Angular realista para que componentes y servicios puedan ejecutarse con las capacidades de Angular disponibles.

Eso significa que las pruebas no son simples scripts TypeScript. Se ejecutan en un contexto consciente de Angular.

## La leccion principal aqui

Hacer pruebas es mas facil cuando el codigo esta bien estructurado.

Las lecciones anteriores separaron responsabilidades entre componentes y servicios. Esta leccion muestra una razon por la que esa separacion importa.

Si las reglas de negocio viven en un servicio y el comportamiento de renderizado vive en un componente, cada parte puede probarse con mas claridad.

## Como estudiar la leccion

Leela en este orden:

1. Lee la implementacion del servicio.
2. Lee la spec del servicio y compara cada prueba con una regla de negocio.
3. Lee la implementacion del componente.
4. Lee la spec del componente y observa como se simula el servicio.

Este orden ayuda a conectar cada prueba con un limite de responsabilidad deliberado.

## Ejercicios

1. Anade otra prueba de servicio para una rama nueva de regla de negocio.
2. Anade otra prueba de componente para un estado distinto de la UI.
3. Sustituye un valor fijo del mock por un segundo escenario.
4. Refactoriza el servicio y verifica que las pruebas sigan pasando.

## Antes de continuar

Asegurate de entender:

- por que los servicios y los componentes suelen necesitar tipos distintos de pruebas
- por que el mocking ayuda a mantener las pruebas enfocadas
- por que el codigo estructurado es mas facil de probar que el codigo enredado

La siguiente leccion vuelve a la estructura de la aplicacion y muestra como las apps Angular mas grandes se mantienen organizadas a medida que se multiplican las funcionalidades.
