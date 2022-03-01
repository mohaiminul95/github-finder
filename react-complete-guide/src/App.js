import { useState } from 'react';
import './App.css';
import Person from './components/Person';


const App = props =>  {

  const [ personState, setPersonState ] = useState({
    persons: [
      { name: 'Rabid', age: 27 },
      { name: 'Ruhan', age: 21 },
      { name: 'Rafi', age: 20 },
    ]
  });

  return (
    <div className="App">
      <h1>Hello</h1>
      <button onClick={this.switchNameHandler}>Switch Name</button>
      <Person name={this.state.persons[0].name} age={this.state.persons[0].age}></Person>
      <Person name={this.state.persons[1].name} age={this.state.persons[1].age}>Hobby: Biking</Person>
      <Person name={this.state.persons[2].name} age={this.state.persons[2].age}></Person>
    </div>
  )
}

// class App extends Component {

  // state = {
  //   persons: [
  //     { name: 'Rabid', age: 27 },
  //     { name: 'Ruhan', age: 21 },
  //     { name: 'Rafi', age: 20 },
  //   ]
  // };

//   switchNameHandler = () => {
//     this.setState({
//       persons: [
//         { name: 'MI Rabid', age: 27 },
//         { name: 'Ruhan Islam', age: 21 },
//         { name: 'MD Rafi', age: 20 },
//       ]
//     })
//   }

//   render() {
//     return (
//       <div className="App">
//         <h1>Hello</h1>
//         <button onClick={this.switchNameHandler}>Switch Name</button>
//         <Person name={this.state.persons[0].name} age={this.state.persons[0].age}></Person>
//         <Person name={this.state.persons[1].name} age={this.state.persons[1].age}>Hobby: Biking</Person>
//         <Person name={this.state.persons[2].name} age={this.state.persons[2].age}></Person>
//       </div>
//     )
//   }
  
// }

export default App;
