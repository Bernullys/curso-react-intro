
function TodoStatus( { todoDone, todoTotal }) {
    return (
        <h1>
            Has completado {todoDone} de {todoTotal} TODO's
        </h1>
    );
}

export { TodoStatus };