# Guia de la Leccion 01: Fundamentos de Angular

Esta guia explica las ideas detras de la Leccion 1 de una forma mas lenta y didactica que el README principal. Esta escrita para alguien que esta empezando con Angular y quiere entender no solo que hace el codigo, sino tambien por que Angular esta estructurado de esta manera.

## Que estas construyendo

En esta leccion trabajas con un pequeno gestor de tareas.

La app te permite:

- ver una lista de tareas
- anadir una tarea nueva
- marcar una tarea como completada
- eliminar una tarea
- filtrar tareas por estado
- mostrar contadores como total, completadas y abiertas

Este es un muy buen primer ejemplo de Angular porque incluye los ingredientes basicos de muchas interfaces reales:

- algunos datos
- algo de entrada del usuario
- algunos botones
- una lista renderizada a partir del estado
- algunos valores derivados mostrados en la UI

Aunque la app es pequena, las mismas ideas volveran a aparecer en proyectos Angular mas grandes.

## La idea principal de Angular

Angular es un framework para construir interfaces de usuario con componentes.

Un componente suele tener dos lados:

- codigo TypeScript que contiene estado y comportamiento
- una plantilla HTML que describe como debe verse la UI

La idea importante es esta:

La plantilla es un reflejo del estado del componente.

Eso significa que normalmente no editas el DOM manualmente elemento por elemento. En su lugar, cambias los datos del componente y Angular actualiza la pantalla por ti.

En esta leccion, cuando cambian `tasks`, `newTaskTitle` o `selectedFilter`, Angular vuelve a calcular la plantilla y muestra el nuevo resultado.

## Estructura del proyecto

Empieza mirando estos archivos:

- `src/main.ts`
- `src/app/app.config.ts`
- `src/app/task.model.ts`
- `src/app/app.component.ts`
- `src/app/app.component.html`

Cada archivo tiene una responsabilidad distinta.

### `src/main.ts`

Este es el punto de entrada de la app.

Su trabajo es iniciar Angular en el navegador.

La funcion clave es `bootstrapApplication(...)`.

Puedes pensar en el bootstrapping como:

"Inicia Angular y renderiza este componente raiz como la aplicacion."

Angular necesita un punto de partida, y el componente raiz se convierte en ese punto de partida.

### `src/app/app.config.ts`

Este archivo contiene configuracion a nivel de aplicacion.

En lecciones posteriores, aqui suele registrarse cosas como:

- routing
- capacidades HTTP
- providers globales

En la Leccion 1, la configuracion es pequena porque la app es intencionalmente simple.

### `src/app/task.model.ts`

Este archivo define la forma de tus datos con TypeScript.

La interfaz `Task` dice que cada tarea debe tener:

- un `id`
- un `title`
- una bandera `completed`

Esto es importante porque hace explicitos tus datos.

Sin tipos, es mas facil crear objetos inconsistentes por accidente. Con tipos, TypeScript te ayuda a detectar errores antes.

El tipo `TaskFilter` tambien es util. Restringe los valores permitidos del filtro a:

- `"all"`
- `"open"`
- `"completed"`

Eso hace que la logica de filtrado sea mas facil de razonar y mas segura de mantener.

## Entender el componente raiz

La leccion principal vive en `src/app/app.component.ts`.

Este archivo define el componente raiz de la app.

En la parte superior, el decorador `@Component(...)` le dice a Angular como debe comportarse este componente.

Las partes importantes de ese decorador son:

- `selector`: la etiqueta HTML que Angular usa para el componente
- `standalone: true`: este componente no necesita un NgModule de Angular
- `imports`: otras capacidades de Angular que este componente usa
- `templateUrl`: el archivo de la plantilla HTML
- `styleUrl`: el archivo CSS

### Por que importa `standalone: true`

Angular moderno suele usar componentes standalone en lugar de patrones antiguos muy centrados en NgModules.

Eso significa que el componente declara directamente sus propias dependencias.

Por ejemplo, esta leccion importa:

- `CommonModule`
- `FormsModule`

Eso le dice a Angular que capacidades de plantilla estan disponibles en este componente.

## Estado del componente

Dentro de la clase veras varias propiedades.

Esas propiedades son el estado del componente.

### `newTaskTitle`

Esto guarda lo que el usuario esta escribiendo en el campo de entrada.

Angular lo conecta con la plantilla mediante `[(ngModel)]`, que es una capacidad de two-way binding proveniente de `FormsModule`.

Eso significa:

- cuando el usuario escribe, `newTaskTitle` se actualiza
- cuando `newTaskTitle` cambia en el codigo, la entrada tambien se actualiza

Para una persona principiante, este es uno de los ejemplos mas claros de como Angular conecta UI y estado.

### `selectedFilter`

Esto guarda que filtro esta activo actualmente.

No es dato de dominio como las tareas mismas. Es estado de vista.

Esa distincion es util:

- los datos de dominio describen los objetos de negocio de la app
- el estado de vista describe como el usuario esta viendo actualmente la app

Las aplicaciones Angular reales casi siempre tienen ambos tipos.

### `tasks`

Esta es la lista principal de datos de tareas.

La leccion empieza con datos semilla para que la UI tenga sentido de inmediato.

Esa es una buena decision didactica porque las personas principiantes pueden explorar renderizado e interaccion sin tener que crear datos manualmente primero.

## Estado derivado con getters

El componente tambien incluye getters:

- `totalTasks`
- `completedTasks`
- `openTasks`
- `visibleTasks`

No se almacenan por separado. Se calculan a partir del estado existente.

A esto se le llama estado derivado.

Por ejemplo, `completedTasks` se deriva de `tasks` contando cuantas estan completadas.

Esto suele ser mejor que guardar tanto las tareas como un conteo separado de completadas, porque el estado duplicado puede desincronizarse.

Si Angular puede calcular un valor a partir de una sola fuente de verdad, normalmente eso es mas simple.

## Conceptos basicos de plantillas

La plantilla en `src/app/app.component.html` es donde aparecen las expresiones y bindings de Angular.

Esta leccion introduce varias de las ideas mas importantes de las plantillas.

### Interpolacion

La interpolacion usa `{{ ... }}`.

Te permite mostrar un valor del componente dentro de la plantilla.

En una leccion como esta, los ejemplos suelen incluir:

- contadores
- titulos de tareas
- etiquetas derivadas del estado

Cuando cambia el valor del componente, Angular actualiza el texto mostrado.

### Event binding

El event binding usa una sintaxis como `(click)="..."`.

Le dice a Angular que ejecute codigo del componente cuando ocurre un evento del navegador.

En este gestor de tareas, los clics en botones activan acciones como:

- anadir una tarea
- alternar completado
- eliminar una tarea
- cambiar el filtro

Asi es como la interaccion del usuario entra en la logica del componente.

### Two-way binding con `[(ngModel)]`

El two-way binding es una combinacion de:

- leer un valor del componente
- escribir cambios de vuelta en el componente

Esta leccion lo usa para el campo donde el usuario escribe un nuevo titulo de tarea.

Es una herramienta didactica temprana muy util porque hace que la entrada de formularios sea facil de entender antes de pasar a formularios mas avanzados en lecciones posteriores.

## Flujo de control moderno en Angular

Esta leccion tambien introduce el flujo de control moderno de Angular.

En lugar de la sintaxis antigua de directivas estructurales como `*ngIf` y `*ngFor`, las versiones nuevas de Angular admiten sintaxis por bloques como:

- `@if`
- `@for`

Esto hace que las plantillas se sientan mas explicitas y mas cercanas al flujo normal de programacion.

### `@if`

Usa `@if` cuando una parte de la UI solo deba aparecer bajo ciertas condiciones.

Algunos ejemplos en un gestor de tareas incluyen:

- mostrar un mensaje de estado vacio cuando ninguna tarea coincide con el filtro
- mostrar un area solo cuando hay tareas para visualizar

### `@for`

Usa `@for` para renderizar listas a partir del estado.

En esta leccion, eso significa iterar sobre las tareas visibles y mostrar una fila por cada una.

Una leccion importante aqui es que Angular no necesita que construyas nodos del DOM manualmente para una coleccion. Tu describes la lista y Angular la renderiza.

## Logica de acciones

Metodos como `addTask`, `toggleTask` y `removeTask` representan acciones del usuario.

Esos metodos cambian el estado, y despues Angular actualiza la plantilla.

Ese ciclo se repetira una y otra vez a lo largo de toda la serie:

1. el usuario hace algo
2. el componente actualiza el estado
3. Angular actualiza la UI

## Por que esta leccion importa

Esta primera leccion no trata de complejidad. Trata de construir un modelo mental correcto.

Si entiendes bien esta parte, las lecciones posteriores sobre formularios, servicios, routing y estado reactivo seran mucho mas faciles.

## Ejercicios

1. Anade un nuevo filtro para tareas creadas recientemente.
2. Muestra un mensaje distinto cuando todas las tareas esten completadas.
3. Agrega un campo opcional de descripcion al modelo `Task`.
4. Ordena las tareas abiertas antes que las completadas.

## Antes de continuar

Asegurate de entender:

- que hace `bootstrapApplication`
- como se relaciona la plantilla con el estado del componente
- como `[(ngModel)]` conecta UI y datos
- por que los valores derivados son mejores cuando se calculan a partir de una unica fuente de verdad

La siguiente leccion tomara una sola pagina y la dividira en componentes reutilizables.
