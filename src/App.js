import { TodoStatus } from './TodoStatus';
import { TodoSearch } from './TodoSearch';
import { TodoListContainer } from './TodoListContainer';
import { TodoItem } from './TodoItem';
import { TodoCreateButton } from './TodoCreateButton';
import React from 'react';
import './App.css';


const defaultTodos = [
  { text: "Sacar al Joicito", completed: false},
  { text: "Cenar", completed: false},
  { text: "Bañarme", completed: false},
  { text: "Acostarme a dormir", completed: false},
];

function App() { // esta funcion es un componente de react (los componentes usan UpperCamelCase)
  return (
// todo lo que retorna un componente son los elementos
    <React.Fragment>

      <TodoStatus todoDone={10} todoTotal={20} /> 

      <TodoSearch />

      <TodoListContainer>
        {defaultTodos.map(todo => (
          <TodoItem 
          key={todo.text} 
          text={todo.text}
          completed={todo.completed}
           />
        ))}
      </TodoListContainer>

      <TodoCreateButton />

    </React.Fragment>


    

  );
}

export default App;
