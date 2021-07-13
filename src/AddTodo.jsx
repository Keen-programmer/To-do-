import React from 'react';

function AddTodo ({passTodo}) {

    const inputRef = React.useRef();

    function handleAddTodo (event) {
        event.preventDefault();

       const text = event.target.elements.AddTodo.value;

       const list = {
           id: 1,
           text,
           done:false
       };
       passTodo((prevTodo) => {
           return prevTodo.concat(list)
       });
       inputRef.current.value = "";
    }

    return(
        <form onSubmit={handleAddTodo}>
            <input name="AddTodo" placeholder="Add Todo" ref={inputRef}/><br />
            <button type="submit">Submit</button>
        </form>
    )
}

export default AddTodo;