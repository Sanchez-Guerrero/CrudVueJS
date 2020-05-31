export function setTodos( state, todos ) { // Para usar Todos
    //Cuando hagamos la accion de obtener todos
    state.todos = todos;
}

export function setTodo( state, todo ) { //Para usar uno
    state.selectedTodo = todo;
}

export function updateTodoStatus ( state, payload ) { //payload seria realmente todo
    const todo = state.find(t => t.id === payload.id)
    if( todo ){
        todo.done = ! todo.done
    }
}

export function todosError ( state, payload ) {
    state.error = true
    state.errorMessage = payload
    state.todos = []
}