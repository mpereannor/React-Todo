// your components will all go in this `component` directory.
// feel free to change this component.js into TodoList.js

import React, {Component} from 'react';

export default class TodoList extends Component{

    render(){
        return(
            <div className="todoListComponent">
                {/* <ul>
                    {this.todo.map(e => (
                        <li>{e.task}</li>
                    ))}
                </ul> */}
            </div>
        )
    };

}