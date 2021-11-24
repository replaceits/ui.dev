
import * as React from 'react';
import {useSelector} from 'react-redux';
import List from './List';
import {handleAddGoal, handleDeleteGoal} from '../actions/goals';

export default function Goals() {
  const input = React.useRef('');
  const goals = useSelector((state) => state.goals);

  const addItem = (e) => {
    e.preventDefault();

    this.props.dispatch(handleAddGoal(
      input.current.value, 
      () => input.current.value = ''
    ));
  }

  const removeItem = (goal) => {
    this.props.dispatch(handleDeleteGoal(goal));
  }

  return (
    <div>
      <h1>Goals</h1>
      <input
        type='text'
        placeholder='Add Goal'
        ref={input}
      />

      <button onClick={addItem}>Add Goal</button>

      <List 
        items={goals}
        remove={removeItem}
      />
    </div>
  );
}
