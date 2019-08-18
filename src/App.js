import React from 'react';
import './App.css';
import Todo from './components/ToDoMobx'
import { observer } from 'mobx-react';
import TodoModel from './store/todo'

function App() {
  return (
    <div className="App">
      TODO React
      <p>Task count - {TodoModel.cnt}</p>
      <hr />
      <Todo/>
    </div>
  );
}

export default observer(App);
