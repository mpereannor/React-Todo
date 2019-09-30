// your components will all go in this `component` directory.
// feel free to change this component.js into TodoList.js

import React, {Component} from 'react';

export default class TodoList extends Component{

    constructor(){
        super();

    };

    render(){
        return(
            <div className="todoListComponent">
                <ul>
                    <li></li>
                    <li></li>
                    <li></li>
                </ul>
                <input/>
                <button>Submit</button>
                <button>Clear All</button>


            </div>
        )
    };

}