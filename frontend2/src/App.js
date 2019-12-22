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
      <Products />
      <Button variant="primary" disabled={!isValid}> Vagabundo</Button>
     </div>
     );
  }
}

export default App;
