import React,{Component} from 'react';
import Products from './Products';
import {Button} from 'react-bootstrap';
import Rating from './Rating';

class App extends Component {
  
  formatName (user){
    return user.firstName + ' ' + user.lastName;
  }
  
  
  render(){
    const isValid = false;
    
    const user = {
      firstName : 'Felipe',
      lastName : 'Daniel'
    };
    
   return(
     <div>
      <h1>
      Hello, {this.formatName(user)}
      </h1>
      <Products />
      <Rating rating="1" pinto="5" />
      <Rating rating="2" pinto="4"/>
      <Rating rating="3" pinto="3" />
      <Rating rating="4" pinto="2" />
      <Rating rating="5" pinto="1" />
      <Button variant="primary" disabled={!isValid}> Vagabundo</Button>
     </div>
     );
  }
}

export default App;
