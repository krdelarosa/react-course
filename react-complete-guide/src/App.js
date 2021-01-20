import React, { Component } from 'react';

import classes from './App.css';
import Person from './Person/Person';
import ErrorBoundary from './ErrorBoundary/ErrorBoundary';

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
    let persons = null;
    let btnClasses = "";

    if(this.state.showPersonsList){
      persons = (
        <div>
          {this.state.persons.map( (person, index) => {
            return <ErrorBoundary key={person.id}>
            <Person 
            name={person.name} 
            age={person.age}
            changed={(event) => this.nameChangeHandler(event, person.id)}
            click={() => this.deletePersonInfoHandler(index)}>{person.child}
            </Person></ErrorBoundary>
          })}

        </div>
      );

      // btnClasses.push(classes.Red);
      btnClasses = classes.Red;
    }

    const assignedClasses = [];
    if(this.state.persons.length <= 2){
      assignedClasses.push(classes.red);
    }

    if(this.state.persons.length <= 1){
      assignedClasses.push(classes.bold);
    }

    return (
      <div className={classes.App}> 
        <h1>Hello World! I'm a React App.</h1>
        <p className={assignedClasses.join(' ')}>EUREKA! It's working!</p>
        <button className={btnClasses} onClick={this.togglePersonsHandler}>
        Toggle Persons List
        </button>
        
        {persons}
      </div>
    );
  }

}

export default App;
