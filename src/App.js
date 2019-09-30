import React from 'react';
import TodoList from './components/TodoComponents/TodoList';
import TodoForm from './components/TodoComponents/TodoForm';

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

  constructor(props){
    super(props);
    this.state = {
      TodoList: {},
      TodoForm: {}
    }
    this.addTodo = this.addTodo.bind(this);
  }

  addTodo (event) {
    this.setState({
      TodoList: todoData,
    }
    )
  }

  submitForm (event) {
    // this.setState({
    //   TodoForm: LL
    // })
  }

  clearAll (event){
    
  }
  render() {
    return (
      <div>
        <h2>Welcome to your Todo App!</h2>
        <TodoList/>
        <TodoForm/>
      </div>
    );
  }
}

export default App;
