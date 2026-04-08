# Guia de la Leccion 18: Capstone Customer Success Hub

Esta leccion es el capstone de la serie.

Su proposito no es introducir solo una funcionalidad nueva de Angular. En su lugar, muestra como varias ideas importantes de lecciones anteriores trabajan juntas dentro de una sola aplicacion coherente.

## Por que importa un capstone

Aprender temas uno por uno es util, pero las aplicaciones reales los combinan.

Eso significa que la habilidad final no consiste solo en conocer cada concepto de forma aislada. Consiste en saber como encajan entre si.

Este capstone combina:

- routing
- layout y estructura por features
- infraestructura HTTP
- un interceptor
- un store compartido basado en signals
- formularios reactivos
- preferencias persistidas del usuario

Esa combinacion se parece mucho mas al trabajo real con Angular.

## Que modela la app

El customer success hub es un pequeno workspace operativo.

Incluye:

- un dashboard
- una vista de cola
- un area de preferencias
- informacion de resumen compartida
- datos cargados desde una API simulada

Esto lo convierte en un buen capstone porque mezcla varias preocupaciones frontend sin hacerse demasiado grande para estudiarlo.

## Como encajan las piezas

### Routing y layout

El routing define las principales areas por feature, y el shell les da un marco consistente.

Esto continua las ideas de arquitectura de las Lecciones 5 y 16.

La app no es una sola pagina larga. Es un workspace compuesto por features navegables.

### Servicio de API e interceptor

El servicio de API expresa que datos quiere la app.

El interceptor maneja preocupaciones HTTP compartidas como reescritura de URLs y cabeceras.

Esto continua las ideas de infraestructura de las Lecciones 6 y 14.

### Store con signals

El store actua como propietario del estado compartido.

Hace seguimiento de:

- datos crudos del snapshot
- estado de carga y de error
- filtros
- preferencias
- resultados computados como elementos de trabajo filtrados y conteos urgentes

Esto continua las ideas de estado de las Lecciones 8 y 9.

### Formularios reactivos

La pagina de cola usa un formulario reactivo para impulsar el estado compartido de filtros.

Esto continua las ideas de formularios de la Leccion 3.

### Preferencias persistidas

La pagina de preferencias actualiza ajustes compartidos que afectan a otras partes de la app.

Esto refuerza la idea de que parte del estado es local a una pantalla, mientras que otra parte deberia compartirse en todo el workspace.

## La leccion arquitectonica mas importante

El capstone trata realmente de limites de responsabilidad.

Cada capa deberia tener un trabajo claro:

- los componentes renderizan y reaccionan a la interaccion del usuario
- las paginas de feature organizan la UI de una sola feature
- el store posee el estado compartido y el estado derivado
- el servicio de API posee la intencion de acceso a datos
- el interceptor posee el comportamiento HTTP compartido

Cuando estos limites estan claros, la app se vuelve mas facil de extender.

## Por que sigue siendo una app pequena

Este capstone es intencionadamente moderado en tamano.

Esa es una buena decision didactica.

Si la app fuera mucho mayor, seria mas dificil ver la estructura con claridad. La meta aqui es estudiar integracion, no abrumarte con demasiado alcance.

## Como estudiar el capstone

Usa este orden:

1. Lee `app.routes.ts` para entender el mapa de features.
2. Lee el shell e identifica que es global frente a que es especifico de una feature.
3. Lee el store e identifica estado fuente, estado computado y estado persistido.
4. Lee juntos el servicio de API y el interceptor.
5. Lee la pagina de cola y observa como el formulario reactivo actualiza los filtros del store compartido.
6. Lee la pagina de preferencias y observa como una feature afecta a otra.

Esa secuencia refleja la arquitectura de la app.

## Lo que demuestra esta leccion

Si puedes entender este capstone, ya no estas aprendiendo solo sintaxis aislada de Angular.

Estas aprendiendo a disenar una aplicacion Angular real con multiples piezas en movimiento.

Ese es un paso importante.

## Buenos ejercicios finales

1. Anade una nueva pagina de feature.
2. Anade otra preferencia que afecte al renderizado de la cola.
3. Anade otro valor computado al store compartido.
4. Anade otro endpoint de API que use el mismo comportamiento del interceptor.
5. Anade pruebas para otra pagina de feature.

## Mirando atras en toda la serie

Al final de esta leccion, has recorrido:

- fundamentos de Angular
- componentes
- formularios
- servicios e inyeccion de dependencias
- routing
- HTTP
- RxJS
- signals
- estado compartido
- plantillas avanzadas
- directivas y pipes
- patrones de rendimiento
- auth y guards
- interceptors
- testing
- arquitectura por features
- integracion avanzada de UI
- un capstone final integrado

Esa es una progresion practica muy solida.

## Despues de la serie

Si quieres seguir mejorando despues de esta leccion, enfocate en tres cosas:

1. Construye una app pequena propia sin seguir directamente el tutorial.
2. Vuelve al capstone y refactoriza una de sus partes.
3. Anade mas pruebas y mas manejo de casos limite.

Esos ejercicios convertiran el conocimiento del tutorial en experiencia real de trabajo.
