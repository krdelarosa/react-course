import React, { Component } from 'react';
import './App.css';

import UserInput from './UserInput/UserInput';
import UserOutput from './UserOutput/UserOutput';

import ValidationComponent from './ValidationComponent/ValidationComponent';
import CharComponent from './CharComponent/CharComponent';

class App extends Component {
  state = {
    text:'I am a paragraph.'
  };

  changeTextLengthHandler = (event) =>{
    this.setState({text: event.target.value});
  }

  deleteCharacterHandler = (charIndex) =>{
    const charArray = this.state.text.split("");
    
    charArray.splice(charIndex,1);
    const newText = charArray.join("");
    
    this.setState({text: newText});
  }
  
  render() {

    let characters = null;
    let charArray = this.state.text.split("");

    if(this.state.text.length > 0){
      characters = (
        <div>
          {charArray.map((char, index) => {
            return <CharComponent 
            key={index}
            character={char}
            click={() => this.deleteCharacterHandler(index)}
            ></CharComponent>
          })}
        </div>
      );
    }

    return (
      <div className="App">
        <input 
        type="text"
        value={this.state.text}
        onChange={(event) => this.changeTextLengthHandler(event)} 
        />
        <p>{this.state.text}</p>
        <ValidationComponent length={this.state.text.length} />
        {characters}
      </div>
    );
  }
}

export default App;
