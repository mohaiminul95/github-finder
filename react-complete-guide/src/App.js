import React, { useState } from 'react';
import './App.css';
import Person from './components/Person';


function  App() {

  const [ personState, setPersonState ] = useState({
    persons: [
      { name: 'Rabid', age: 27 },
      { name: 'Ruhan', age: 21 },
      { name: 'Rafi', age: 20 },
    ]
  });

  function switchNameHandler(newName) {
    setPersonState({
      persons: [
        { name: newName, age: 27 },
        { name: 'Ruhan Islam', age: 21 },
        { name: 'MD Rafi', age: 20 },
      ]
    })
  }

  function nameChangeHandler(event) {
    setPersonState({
      persons: [
        { name: 'MI Rabid', age: 27 },
        { name: event.target.value, age: 21 },
        { name: 'MD Rafi', age: 20 },
      ]
    })
  }

  return (
    <div className="App">
      <h1>Hello</h1>
      <button onClick={switchNameHandler.bind(this, 'TEST')}>Switch Name</button>
      <Person name={personState.persons[0].name} 
              age={personState.persons[0].age} />
      <Person name={personState.persons[1].name} 
              age={personState.persons[1].age}
              click={switchNameHandler.bind(this, 'TEST 2')}
              changed={nameChangeHandler}>Hobby: Biking
      </Person>
      <Person name={personState.persons[2].name} 
              age={personState.persons[2].age} />
    </div>
  )
}

export default App;
