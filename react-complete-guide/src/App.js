import React, { Component } from 'react';
// import styled from 'styled-components';
// import Radium, { StyleRoot } from 'radium';// import in file that uses it
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
      backgroundColor: 'green',
      color: 'white',
      font: 'inherit',
      border: '1px solid blue',
      padding: '8px',
      cursor: 'pointer',
      ':hover': {
        backgroundColor: 'lightgreen',
        color: 'black'
      }
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

      style.backgroundColor = 'red';
      style[':hover'] = {
        backgroundColor: 'salmon',
        color: 'black'
      }
    }

    const classes = [];
    if(this.state.persons.length <= 2){
      classes.push('red');
    }

    if(this.state.persons.length <= 1){
      classes.push('bold');
    }

    return (
      <div className="App"> 
        <h1>Hello World! I'm a React App.</h1>
        <p className={classes.join(' ')}>EUREKA! It's working!</p>
        <button toggle={this.state.showPersonsList} onClick={this.togglePersonsHandler}>
        Toggle Persons List
        </button>
        
        {persons}
      </div>
    );
  }

}

// export default Radium(App); // wrap app with radium
export default App;
