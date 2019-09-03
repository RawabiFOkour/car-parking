import React, { Component } from 'react';
import { BrowserRouter as Router, Route } from 'react-router-dom';
import Home from './component/Home';
import LogIn from './component/LogIn';
import SignUp from './component/SignUp';
import axios from 'axios';
import UserAccount from './component/UserAccount';

export default class App extends Component {
  state = {
    user:[]
  };

  //SignUp page
  postUser = (name, phone, balance ,password,cleanInput) => {
    console.log("postUser")
    axios
      .post(`http://localhost:9000/user/${name}/${phone}/${balance}/${password}`)
      .then(response => {
        this.setState({ user: response.data });
      });
      cleanInput()
  };


  //Login page
  getUser = (name,password,cleanInput) => {
    console.log("getUser")
    axios.get(`http://localhost:9000/user/${name}/${password}`)
    .then(response => {
      this.setState({ user: response.data });
      console.log(response.data)
    });
    cleanInput()
  };

  
  render() {
    return (
      <React.Fragment>

         <Router>
          <Route path='/' exact component={Home} /> 
          <Route path='/signup' component={() => <SignUp postUser={this.postUser} />} />
          <Route path='/login' component={() => <LogIn getUser={this.getUser} />} />
          <Route path='/useraccount' component={() => <UserAccount  />} />
        </Router>
       
      </React.Fragment>
    );
  }
}

