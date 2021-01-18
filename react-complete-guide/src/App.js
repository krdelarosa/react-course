import React, { useState } from 'react';
import './App.css';
import Person from './Person/Person';

const app = (props) => {
  const [personsState, setPersonsState] = useState({
    persons: [
      {name:'Karen', age:29},
      {name:'Juan', age:30},
      {name:'Juana', age:31}
    ],
    otherState:'other'
  });

  // muliple separate useState hooks (add functionality to functional components)
  // alternative to class-based components
  const [otherState,setOtherState] = useState('some other value');

  const switchPersonInfoHandler = () => {
    // replace old state data with new data
    setPersonsState({ 
      persons:[
        {name:'Kathyrine', age:29},
        {name:'Juanito', age:50},
        {name:'Juana', age:35}
      ],
      otherState:personsState.otherState
    })
  }

  console.log(personsState,otherState);

  return (
    // className instead of class; class is a reserved word
    <div className="App"> 
      <h1>Hello World! I'm a React App.</h1>
      <p>EUREKA! It's working!</p>
      <button onClick={switchPersonInfoHandler}>Switch Person Data</button>
      <Person name={personsState.persons[0].name} age={personsState.persons[0].age}/>
      <Person name={personsState.persons[1].name} age={personsState.persons[1].age}>My Hobbies is Racing.</Person>
      <Person name={personsState.persons[2].name} age={personsState.persons[2].age}/>
    </div>
  );
}

export default app;


