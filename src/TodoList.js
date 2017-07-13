import React,{Component} from 'react';

class TodoList extends Component{
  //constructor
  constructor(){
     super();
     this.state={
       editing: false
     };
     this.edit = this.edit.bind(this);
     this.cancel = this.cancel.bind(this);
     this.delete = this.delete.bind(this);
     this.save = this.save.bind(this);
  }

  //save
  save(){
    var newText = this.refs.newText.value;
    this.props.updateTodo(newText, this.props.index);
    this.setState({editing:false})
  }
  //edit
  edit(){
    this.setState({editing:true})
  }
  //cancel
  cancel(){
    this.setState({editing:false})
  }
  //delete
  delete(){
    this.props.deleteTodo(this.props.index);
  }
  //renderItem
  renderItem(){
    return(
      <tr>
        <td>{this.props.todo.text}</td>
        <td>
          <a onClick={this.edit} className="btn-floating  green">
            <i className="material-icons">mode_edit</i>
          </a>
        </td>
        <td>
          <a onClick={this.delete}  className="btn-floating red">
           <i className="material-icons">delete</i>
          </a>
        </td>
      </tr>
    )
  }
  //renderForm
  renderForm(){
    return(
      <tr>
        <td><input type="text" ref="newText" defaultValue={this.props.todo.text}  /></td>
        <td>
          <a onClick={this.save} className="btn-floating  green">
           <i className="material-icons">save</i>
          </a>
        </td>
        <td>
          <a onClick={this.cancel} className="btn-floating blue">
           <i className="material-icons">cancel</i>
          </a>
        </td>
      </tr>
    )
  }
   render(){
     return(

         <tbody>
          {this.state.editing ? this.renderForm() : this.renderItem()}
         </tbody>

     )
   }
}

export default TodoList;
