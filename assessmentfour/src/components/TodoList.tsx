import { useState } from "react";
import TodoComponent from "./TodoComponent";


export interface Todo {
    id:number | null;
    todoitem: string;
    isCompleted: boolean;
};

const TodoList = () => {

 const [todos, setTodos] = useState<Todo[]>([]);
 const [input, setInput] = useState("");
 const [filter, setFilter] = useState("")
//  const [getItem, setItem] = useLocalStorage



const addTodo = (newItem: string) => {
    
    const newTodo: Todo ={
        id: Math.random(),
        todoitem: newItem,
        isCompleted: false
    };

    // setList ([...list])  

    setInput("");
}

const deleteTodo = (id: number) => {
    // Filter the existing list to create a new list without the item to be deleted
    const updatedTodo = todos.filter((item) => {
      // Check if the current item's id doesn't match the id passed to the function
      if (item.id !== id) {
        // If the ids don't match, include the item in the new list
        return true;
      } else {
        // If the ids match, exclude the item from the new list
        return false;
      }
    });

// const toggleComplete = (id: number) => {
//     const updatedList = list.map((item) =>
//       item.id === id ? { ...item, isCompleted: !item.isCompleted } : item
//     );
//     setList(updatedList);
//   };
  return (
    <>
      <div className="mainContainer">
        <div className="myContainer">
          <div className="row">
              TOdo List
              <div className="row">
                <input
                  className="inputField"
                  type="text"
                  value={input}
                  onChange={(e) => setInput(e.target.value)}
                />
                <button className="addButton" onClick={() => addTodo(input)}>
                  Add
                </button>
              </div>
              <ul>

          <span style={{ textDecoration: todos.isCompleted ? 'line-through' : 'none' }}>
            {todos.todolist}
          </span>

          </button>

        
          <button onClick={() => deleteTodo(todos.id!)}>

         Delete
          </button>
       
      
   
    </>
  )
}

export default TodoList