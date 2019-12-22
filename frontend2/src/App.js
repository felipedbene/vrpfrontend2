import React,{Component} from 'react';
import Products from './Products';
import {Button} from 'react-bootstrap';
import Rating from './Rating';
import JumboTronComponent from './JumboTronComponent';

class App extends Component {
  
  formatName (user){
    return user.firstName + ' ' + user.lastName;
  }
  
  
  render(){
    
   return(
     <div>
     <JumboTronComponent>
     This is a long text!
     </JumboTronComponent>
      <Products />
     </div>
     );
  }
}

export default App;
