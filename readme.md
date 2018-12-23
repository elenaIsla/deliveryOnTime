# Delivery On time

## Description
Es una especie de Sokoban. Un laberinto con un jugador que tiene que empujar cajas a un lugrar en concreto.


## MVP (DOM - CANVAS)
MVP definition, deliverables.
Una pantalla de un laberinto con una caja un jugador y una casilla para depositar la caja en un tiempo determinado.


## Backlog
Añadir mas cajas.
Crear mas pantallas.
Poner gráficos al jugador. 


## Data structure
Classes and methods definition.
Un grid que sea el tablero / laberinto. Una array de array.
Poner un jugador, cajas y sitio para depositarlas. Una x,y del array.
Eventos que muevan al jugador : up down right left.


## States y States Transitions
Definition of the different states and their transition (transition functions)

- splashScreen

Titulo del juego con cajas de amazon-ebay-alibey ( cada caja es una pantalla diferente ) y un boton para empezar. 

- gameScreen

En el centro de la pantalla esta el tablero/laberinto. Arriba a la izquierda el número de cajas entregadas y un contador con los movimientos. Arriba a la derecha un reloj con la cuenta atrás. 


- gameoverScreen

Pantalla donde aparezca el mensaje "Time over: Lo sentimos, su paquete ha sido retenido en la aduana contante con la empresa emisora :(". Abajo del mensaje 2 botonoes: volver a pantalla inicio y reiniziar la pantalla donde estabas. 

- winScreen

Pantalla donde aparezca el mensaje "Paquete entregado con éxito!! :)". Abajo del mensaje 2 botonoes: volver a pantalla inicio y reiniziar la pantalla donde estabas. 


## Task

Crear las 4 pantallas.
Crear laberinto, el jugador, los paquetes y puntos de entrega.
Crer los eventos que muevan al jugador según las keys : up-right-down-left.
Añadir los puntos de backlog.

## Links


### Trello

https://trello.com/b/ULDkZ130/delivery-on-time-game



### Git
URls for the project repo and deploy

https://github.com/elenaIsla/deliveryOnTime


### Slides
URls for the project presentation (slides)
[Link Slides.com](http://slides.com)