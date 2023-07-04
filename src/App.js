import { TodoStatus } from './TodoStatus';
import { TodoSearch } from './TodoSearch';
import { TodoListContainer } from './TodoListContainer';
import { TodoItem } from './TodoItem';
import { TodoCreateButton } from './TodoCreateButton';
import './App.css';

function App() { // esta funcion es un componente de react (los componentes usan UpperCamelCase)
  return (
// todo lo que retorna un componente son los elementos
     <div className="App">

    <TodoStatus /> 

    <TodoSearch />

    <TodoListContainer>
      <TodoItem />
      <TodoItem />
      <TodoItem />
    </TodoListContainer>

    <TodoCreateButton />
    

    </div>
  );
}

export default App;
