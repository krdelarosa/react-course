import React, { Component } from 'react';
import './App.css';
import Person from './Person/Person';

class App extends Component {
  state = {
    persons: [
      {id:1, name:'Karen', age:29},
      {id:2, name:'Juan', age:30, child: 'My hobby is Racing.'},
      {id:3, name:'Juana', age:31}
    ],
    otherState:'other',
    showPersonsList: false
  }

  deletePersonInfoHandler = (personIndex) => {
    // const persons = this.state.persons.slice();
    const persons = [...this.state.persons];
    persons.splice(personIndex,1);
    this.setState({persons: persons});
  }

  nameChangeHandler = (event,id) => {
    const personIndex = this.state.persons.findIndex(p => { // executed for each element in persons
      return p.id === id;
    });

    const person = {...this.state.persons[personIndex]};
    person.name = event.target.value;

    const persons = [...this.state.persons];
    persons[personIndex] = person;

    this.setState({persons:persons});
  }

  togglePersonsHandler = () => {
    const doesShow = this.state.showPersonsList;
    this.setState({ showPersonsList: !doesShow });
  }
  
  render() {
    // inline styling
    const style = {
      backgroundColor: 'white',
      font: 'inherit',
      border: '1px solid blue',
      padding: '8px',
      cursor: 'pointer'
    };

    let persons = null;

    if(this.state.showPersonsList){
      persons = (
        <div>
          {this.state.persons.map( (person, index) => {
            return <Person 
            name={person.name} 
            age={person.age}
            key={person.id}
            changed={(event) => this.nameChangeHandler(event, person.id)}
            click={() => this.deletePersonInfoHandler(index)}>{person.child}</Person>
          })}

        </div>
      );
    }

    return (
      // className instead of class; class is a reserved word
      <div className="App"> 
        <h1>Hello World! I'm a React App.</h1>
        <p>EUREKA! It's working!</p>
        <button 
        style={style} // inline styling for localized styling
        onClick={this.togglePersonsHandler}>Toggle Persons List</button>
        
        {persons}
      </div>
    );
  }

}

export default App;
