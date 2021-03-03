import React, { Component } from 'react';

import classes from './App.css';
import Person from '../components/Persons/Person/Person';
import Persons from '../components/Persons/Persons';
import Cockpit from '../components/Cockpit/Cockpit';
import withClass from '../hoc/WithClass';

import Aux from '../hoc/Auxiliary';
import AuthContext from '../context/auth-context';

class App extends Component { // stateful component
  constructor(props){
    super(props);
    console.log('app.js constructor');
  }

  state = {
    persons: [
      {id:1, name:'Karen', age:29},
      {id:2, name:'Juan', age:30, child: 'My hobby is Racing.'},
      {id:3, name:'Juana', age:31}
    ],
    otherState:'other',
    showPersonsList: false,
    showCockpit: true,
    authenticated:true
  }

  static getDerivedStateFromProps(props,state){
    console.log('app.js getDerivedStateFromProps',props);
    return state;
  }

  // componentWillMount(){
  //   console.log('app.js componentWillMount'); // prep for state
  // }

  componentDidMount(){
    console.log('app.js componentdidmount');
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

    this.setState( (prevState, props) => {
      return {
        persons:persons,
        changeCounter: prevState.changeCounter + 1
      };
    });
  }

  togglePersonsHandler = () => {
    const doesShow = this.state.showPersonsList;
    this.setState({ showPersonsList: !doesShow });
  }
  
  loginHandler = () =>{
    this.setState({authenticated:true})
  }

  render() {
    console.log('app.js render');
    let persons = null;

    if(this.state.showPersonsList){
      persons = <Persons
          persons={this.state.persons}
          clicked={this.deletePersonInfoHandler}
          changed={this.nameChangeHandler}
          isAuth={this.state.authenticated} />
    }
    
    return (
      // <WithClass classes={classes.App}>
      <Aux> 
        <button 
          onClick={() => { 
            this.setState({ showCockpit:false }) 
          }}
        >Remove Cockpit</button>
        <AuthContext.Provider 
          value={{
            authenticated: this.state.authenticated,
            login: this.loginHandler
          }}
        >
          {this.state.showCockpit ? 
            <Cockpit
              title={this.props.appTitle}
              showPersons={this.state.showPersonsList}
              persons={this.state.persons}
              personsLength={this.state.persons.length}
              clicked={this.togglePersonsHandler}
            /> : null}
          {persons}
        </AuthContext.Provider>
      </Aux>
      // </WithClass>
    );
  }
}

export default withClass(App,classes.App);
