# Guia de la Leccion 02: Composicion de componentes

Esta leccion se apoya en la Leccion 1. Ya sabes que las apps de Angular estan hechas de componentes. Ahora el objetivo es aprender que una pagina real normalmente no es un unico componente gigante.

En su lugar, las aplicaciones Angular suelen componerse de componentes mas pequenos con responsabilidades claras.

## Que cambia en esta leccion

En la Leccion 1, un componente raiz manejaba toda la pagina.

En la Leccion 2, la pagina se divide en piezas mas pequenas como:

- un area de filtrado
- una lista de productos
- una tarjeta o resumen de producto
- un area de detalle del producto

Esto ensena una de las ideas de diseno frontend mas importantes:

Divide una pantalla grande en unidades mas pequenas que sean mas faciles de entender, reutilizar y probar.

## El problema principal que resuelve esta leccion

Si un solo componente hace todo, se vuelve dificil de mantener.

Un componente grande suele tener estos problemas:

- demasiadas propiedades en una sola clase
- demasiada logica de plantilla en un solo archivo
- bloques de UI repetidos
- propiedad poco clara del estado y de los eventos

La composicion de componentes resuelve esto permitiendo que cada componente se enfoque en una parte de la pagina.

## Componentes padre e hijo

Esta leccion introduce una relacion padre-hijo.

El componente padre normalmente:

- posee el estado principal
- decide que datos pasar hacia abajo
- reacciona a los eventos que regresan hacia arriba

El componente hijo normalmente:

- recibe datos del padre
- renderiza una parte enfocada de la UI
- emite eventos cuando el usuario interactua con el

Esto crea un patron Angular muy comun:

Los datos fluyen hacia abajo. Los eventos fluyen hacia arriba.

## `input()`

Los componentes hijos necesitan una forma de recibir datos.

Angular moderno la proporciona mediante `input()`.

Puedes pensar en un input como:

"Un valor que el padre le da al hijo."

En un catalogo de productos, algunos ejemplos pueden ser:

- la lista de productos que se debe mostrar
- el producto seleccionado
- el valor actual del filtro
- los detalles de una tarjeta

Los inputs hacen que los componentes sean configurables. El hijo no necesita saber de donde vienen los datos. Solo necesita saber como renderizarlos.

## `output()`

Los componentes hijos tambien necesitan una forma de comunicar las acciones del usuario de vuelta al padre.

Para eso sirve `output()`.

Puedes pensar en un output como:

"Un evento que el hijo lanza para que el padre responda."

En esta leccion, los ejemplos probablemente incluyen:

- el usuario selecciono un producto
- el usuario cambio un filtro
- el usuario hizo clic en una tarjeta

Esto es importante porque los componentes hijos no deben controlar directamente el estado del padre. En su lugar, notifican al padre y el padre decide que hacer.

## Por que importa este patron

Esto no es solo un detalle especifico de Angular. Es un principio mas amplio de arquitectura de UI.

Cuando los componentes tienen inputs y outputs claros:

- son mas faciles de reutilizar
- son mas faciles de razonar
- son mas faciles de probar
- quedan menos acoplados

En otras palabras, la composicion de componentes es como evitas que una app en crecimiento se convierta en un archivo enorme y fragil.

## Como leer esta leccion

Una buena forma de estudiar este proyecto es:

1. Encuentra el componente principal de la pagina.
2. Identifica que partes de la pantalla se extrajeron a componentes hijos.
3. Para cada hijo, haz dos preguntas:
   Que datos recibe?
   Que eventos emite?
4. Sigue como el padre actualiza su propio estado cuando esos outputs se disparan.

Esa estrategia de lectura es mas util que memorizar sintaxis.

## El modelo mental que debes conservar

En la Leccion 1, el modelo mental clave era:

El estado cambia, luego Angular actualiza la plantilla.

En la Leccion 2, anade este segundo modelo mental:

El padre coordina el estado, mientras los componentes hijos se enfocan en la presentacion y en los limites de interaccion.

## Errores comunes de principiantes

Al aprender composicion de componentes, las personas principiantes suelen:

- poner demasiada logica dentro de los componentes hijos
- mutar datos que pertenecen al padre desde un hijo
- crear demasiados componentes diminutos demasiado pronto
- pasar demasiados datos no relacionados a un solo hijo

La leccion deberia ayudarte a encontrar un mejor equilibrio.

Un componente debe extraerse cuando representa una unidad significativa de UI, no solo porque un archivo se haya vuelto un poco mas largo.

## Que practicar

Prueba estos ejercicios despues de leer el codigo:

1. Anade un campo mas al producto y pasalo por el arbol de componentes.
2. Crea un nuevo output para una accion secundaria.
3. Mueve una seccion repetida de UI a su propio componente hijo.
4. Renombra un input para que su proposito sea mas claro y actualiza todos sus usos.

Estos ejercicios refuerzan tu comprension de como colaboran los componentes.

## Antes de continuar

Asegurate de poder responder estas preguntas:

- Por que dividir una pagina en componentes hijos?
- Cual es la diferencia entre un input y un output?
- Por que el padre suele poseer el estado principal?
- Como se mantienen reutilizables los componentes hijos?

Una vez que estas ideas te resulten comodas, los formularios reactivos de la siguiente leccion tendran mucho mas sentido.
