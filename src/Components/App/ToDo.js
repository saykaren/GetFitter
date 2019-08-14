import React, {useState} from 'react';
import './App.css';

const Todo = ({ todo, index, completeTodo, removeToDo }) =>{
 return(
   <div 
    style={{textDecoration: todo.isCompleted ? 'line-through' : ''}}
    className="todo"
    >
     { todo.text }
     <div>
       <button onClick={()=> completeTodo(index)}>
         Done
       </button>
       <button onClick={()=> removeToDo(index)}>
         X
       </button>
     </div>
   </div>
 );
}

const TodoForm = ({addTodo}) =>{
  const [value, setValue] = useState('');

  const handleSubmit = e =>{
    e.preventDefault();
    if(!value) return;
    addTodo(value);
    setValue('');
  }

  return (
    <form onSubmit={handleSubmit}>
      <input 
        type="text" 
        className="input" 
        value={value} 
        placeholder="Add Todo"
        onChange={e=>setValue(e.target.value)}
      />
    </form>
  )

}

const TodoApp = () => {

  const [todos, setTodos] = useState([
    {
      text: "Drink 60oz of water",
      isCompleted: false
    },
    {
      text: "Walk 5 miles",
      isCompleted: false
    },
    {
      text: "Eat veggie with each meal",
      isCompleted: false
    }
  ]);

  const addTodo = text =>{
    const newTodos = [...todos, {text}];
    setTodos(newTodos);
  }

  const completeTodo = index =>{
    const newTodos = [...todos];
    newTodos[index].isCompleted = true;
    setTodos(newTodos);
  };

  const removeToDo = index =>{
    const newTodos = [...todos];
    newTodos.splice(index, 1);
    setTodos(newTodos);
  };

  return(
    <div className="todo-list">
      {todos.map((todo, index)=>(
        <Todo 
          key={index} 
          index={index} 
          todo={todo} 
          completeTodo={completeTodo} 
          removeToDo={removeToDo}
        />
      ))}
      <TodoForm addTodo={addTodo}/>
    </div>
  )
}

export default TodoApp;