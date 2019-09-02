import React, { Component } from 'react';

import {Link} from 'react-router-dom';


export default class Home extends Component {

  render() {
    
    return (
      <React.Fragment>
        {/* <Router>
       
 
       <Route path='/signup' component={SignUp} />
       <Route path='/login' component={LogIn} />
       
     </Router> */}
        <h1>Home</h1>
        
         <Link to='/login'>
         <button>LogIn</button>
         </Link> 

        {/*SignUp button  */}
        
       <Link to='/signup'>
        <button>SignUp</button>
      </Link>

      </React.Fragment>
    );
  }
}