¿Qué tareas se consideran macrotareas y cuáles son microtareas?
R//En este caso los "setTimeout" se consideran macrotareas, mientras las "promesas" son microtareas.

¿Cómo se relacionan las macrotareas y microtareas con el event loop?
R//El event loop se encarga del flujo de ejecucion tanto de las microtareas como las macrotareas, la diferencia es el orden de prioridad de ejecución, teniendo mas prioridad las microtareas.

¿Qué sucede cuando una microtarea genera una nueva macrotarea dentro de ella?
R// Esta se coloca en la cola de tareas pendientes de la macrotarea, esperando hasta que no hayan mas microtareas o hasta que sea su turno.

¿Cómo se manejan las promesas y los setTimeout en relación con el event loop?
R//Se manejan de forma similar, los dos entran a la "pila" dependiendo su posición en la cola y si son micro o macrotareas