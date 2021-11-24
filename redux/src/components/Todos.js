
import * as React from 'react';
import {useDispatch, useSelector} from 'react-redux';
import List from './List';
import {
  handleAddTodo,
  handleDeleteTodo,
  handleToggle,
} from '../actions/todos'

export default function Todos() {
  const dispatch = useDispatch();
  const input = React.useRef('');
  const todos = useSelector((state) => state.todos);

  const addItem = (e) => {
    e.preventDefault();

    dispatch(handleAddTodo(
      input.current.value, 
      () => input.current.value = ''
    ));
  }

  const toggleItem = (todo) => {
    dispatch(handleToggle(todo.id));
  }

  const removeItem = (todo) => {
    dispatch(handleDeleteTodo(todo));
  }

  return (
    <div>
      <h1>Todo List</h1>
      <input
        type='text'
        placeholder='Add Todo'
        ref={input}
      />
      <button onClick={addItem}>Add Todo</button>
      
      <List 
        items={todos}
        remove={removeItem}
        toggle={toggleItem}
      />
    </div>
  );
}
