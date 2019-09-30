import React from 'react';
import TodoList from './components/TodoComponents/TodoList';

const todoData = 
              [
                {
                  task: 'Wake Up',
                  id: 100,
                  completed: false
                },
                {
                  task: 'Go Jogging',
                  id: 200,
                  completed: false
                },
                {
                  task: 'Play Music',
                  id: 400,
                  completed: false
                },
                {
                  task: 'Take Breakfast',
                  id: 600,
                  completed: false
                } 
            ]

class App extends React.Component {
  // you will need a place to store your state in this component.
  // design `App` to be the parent component of your application.
  // this component is going to take care of state, and any change handlers you need to work with your state
  render() {
    return (
      <div>
        <h2>Welcome to your Todo App!</h2>
        <TodoList/>
      </div>
    );
  }
}

export default App;
