import React, { Component } from 'react';
import './App.css';
import User from './components/user';
import UniqueId from 'react-html-id';
class App1 extends Component {
  
  constructor(){
    super();
    UniqueId.enableUniqueIds(this);
    this.state = {
      users: [
        {id:this.nextUniqueId(), name:'Navpreet', age:41},
        {id:this.nextUniqueId(),name:'Morpheus', age:50},
        {id:this.nextUniqueId(),name:'Neo', age:35},
        {id:this.nextUniqueId(),name:'Agent Smith', age:999}
      ]
    }
    console.log(this.state);
  }

  deleteUser = (index, e) => {
    const users = Object.assign([], this.state.users);
    users.splice(index, 1);
    this.setState({users:users})
  }

  changeUserName = (id, e) => {
    const index = this.state.users.findIndex((user)=>{
      return user.id === id
    });

    const user = Object.assign({}, this.state.users[index]);

    user.name = e.target.value;

    const users = Object.assign([], this.state.users);

    users[index] = user;

    this.setState({users:users});
  }
  render() {
    return (
      <div className="App1">
        <ul>
        	<h1 class="text-danger">Two Way Binding</h1>
        	<h4 class="text-warning">Edit and Delete Users</h4>
	          {
	            this.state.users.map((user, index) => {

	              return(<User
	               age={user.age}
	               key={user.id}
	               delEvent={this.deleteUser.bind(this, index)}
	               changeEvent={this.changeUserName.bind(this, user.id)}
	               >{user.name}</User>)
	            })
	          }
        </ul>
      </div>
    );
  }
}

export default App1;
