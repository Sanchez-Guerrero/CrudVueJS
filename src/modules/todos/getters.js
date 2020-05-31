//Esto es para dividirlos en tablas si estan completos o no

export function pending (state) {
    return state.todos.filter(todo => ! todo.done) //los que no esten finalizados estaran en pendiente, son los que tienen la propiedad DONE = false seran retornados en esta linea
}

export function done (state) {
    return state.todos.filter(todo => todo.done) //Si el DONE = TRUE
}