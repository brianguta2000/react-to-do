import React, { Component } from 'react';
import './App.css';
import ToDo from './components/ToDo.js';

class App extends Component {
  constructor(props) {
    super(props);
    this.state = {
      todos: [
        { description: 'Walk that cat again', isComplete: true },
        { description: 'Throw the dishes away instead of wash them', isComplete: false },
        { description: 'Buy new dishes cause I am getting hungry again', isComplete: true }
      ]
    };
  }

   render() {
     return (
       <div className="App">
        <ul>
            { this.state.todos.map( (todo, index) =>
              <ToDo key={ index } description={ todo.description } isCompleted={ todo.isCompleted } />
            )}
        </ul>
       </div>
  );
 }
}

export default App;
