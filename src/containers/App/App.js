import React, { Component } from 'react';
import './App.css';
import {LoginPage} from "../LoginPage";
import {TodoListPage} from "../TodoList";

class App extends Component {
	
	constructor(props) {
		super();
		this.state = {
			isLogined: false,
			message: ""
			
		}
	}

  loginUser(userName, password) {
    if (userName === "admin" && password === "12345") {
		this.setState({
			isLogined: true
		});
	} else {
		this.setState({
			message: "Login Fail"
		});
	}
  }

  render() {
    return (
      <div className="App">
		{this.state.isLogined ? <TodoListPage/> : <LoginPage loginUser={this.loginUser.bind(this)} message={this.state.message}/>}
      </div>
    );
  }
}

export default App;
