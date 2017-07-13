import React, { Component } from 'react';
import './App.css';
import TodoList from './TodoList';

class App extends Component {
  //constructor
  constructor(){
     super();
     var todos = JSON.parse(localStorage.getItem('todos')) || [];
     this.state={
       todos:todos
     };
    this.onSubmit = this.onSubmit.bind(this);
    this.deleteTodo = this.deleteTodo.bind(this);
    this.updateTodo = this.updateTodo.bind(this);
  }
  //onSubit
  onSubmit(e){
    e.preventDefault();
    var todos = this.state.todos;
    var text = this.refs.text.value;
    todos.push({text})
    this.refs.text.value = '';
    //localStorage
    localStorage.setItem('todos',JSON.stringify(todos));
    this.setState({todos})
  }
  //updateTodo
  updateTodo(newText,i){
    var todos = this.state.todos;
    var todo = todos[i];
    todo['text'] = newText;
    localStorage.setItem('todos',JSON.stringify(todos));
    this.setState({todos})
  }
  //deleteTodo
  deleteTodo(i){
    var todo = this.state.todos;
    todo.splice(i,1);
    //localStorage delete
    localStorage.setItem('todos', JSON.stringify(todo));
    this.setState({todos:todo})
  }
  render() {
    const data  = this.state.todos.map((todo,i) => {
      return(
        <TodoList key={i} todo={todo} index={i} deleteTodo={this.deleteTodo} updateTodo={this.updateTodo} />
      )
    })
    const msg = <p className="msg">Add new todo</p>
    return (
       <section>
        <nav>
          <div className="nav">
           <a className="brand-logo">Todo</a>
          </div>
        </nav>
        <div className="container">
          <div className="row">
            <div className="col s6 offset-s4">
              <div className="row">
                <form onSubmit={this.onSubmit}>
                  <div className="row">
                    <div className="input-field col s6">
                      <input ref="text" type="text" placeholder="What do you wanna do ?" required/>
                    </div>
                    <div className="input-field col s6">
                      <button className="btn-floating green"><i className="material-icons">add</i></button>
                    </div>
                  </div>
                </form>
              </div>
            </div>
            <div className="col s12">
              <table>
                <thead>
                  <tr>
                    <th>Task</th>
                    <th>Edit</th>
                    <th>Delete</th>
                  </tr>
                </thead>
                {this.state.todos.length === 0 ? msg : data}
              </table>
            </div>
          </div>
        </div>
       </section>
    );
  }
}

export default App;
