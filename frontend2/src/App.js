import React,{Component} from 'react';
import Products from './Products';

class App extends Component {
  formatName (user){
    return user.firstName + ' ' + user.lastName;
  }
  
  
  render(){
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
     </div>
     );
  }
}

export default App;
