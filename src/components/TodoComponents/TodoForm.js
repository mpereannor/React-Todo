import React, {Component} from 'react';

export default class TodoForm extends Component{

    render(){
        return (
            <div>
                <form>
                <input type="text" placeholder="...todo" />
                <button>Add Todo</button>
                <button>Clear All</button>
                </form>
            </div>
        )
    }

}