import DeleteTodo from "./DeleteTodo";

function TodoList ({todo}) {
    return(
        <ol>
            
            {todo.map((myfunc) => (
                <li key={myfunc.id} style = {{paddingTop:9}}>{myfunc.text}
                <DeleteTodo />
                </li>
            ))}
        </ol>
    )
}
export default TodoList;