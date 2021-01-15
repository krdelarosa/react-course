import React, { Component } from 'react';
import './App.css';
import Person from './Person/Person';

class App extends Component {

  
  state = {
    persons: [
      {name:'Karen', age:29},
      {name:'Juan', age:30},
      {name:'Juana', age:31}
    ],
    otherState:'other'
  }

  switchPersonInfoHandler = () => {
  // DO NOT DO THIS!!!! this.state.persons[0].name = 'Kathyrine';
    this.setState({ 
        persons:[
          {name:'Kathyrin', age:29},
          {name:'Juanito', age:50},
          {name:'Juana', age:35}
        ]
      })
  }
  
  render() {
    return (
      // className instead of class; class is a reserved word
      <div className="App"> 
        <h1>Hello World! I'm a React App.</h1>
        <p>EUREKA! It's working!</p>
        <button onClick={this.switchPersonInfoHandler}>Switch Person Data</button>
        <Person name={this.state.persons[0].name} age={this.state.persons[0].age}/>
        <Person name={this.state.persons[1].name} age={this.state.persons[1].age}>My Hobbies is Racing.</Person>
        <Person name={this.state.persons[2].name} age={this.state.persons[2].age}/>
      </div>
    );
    // return React.createElement('div',{className:'App'},React.createElement('h1',null,'Hello World! I\'m a React App.'));
  }

}

export default App;
