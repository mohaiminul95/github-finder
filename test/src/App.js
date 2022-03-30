import React, { useState, useReducer } from "react";
import "./App.css"

const reducer = (state, action) => {
  switch(action.type) {
    case "INCREMENT":
      return {
        ...state,
        counter: state.counter + 1
      }
    case "DECREMENT":
      return {
        ...state,
        counter: state.counter - 1
      }
    case "INIT":
      return {
        ...state,
        counter: action.payload
      }  
    default:
      return state
  }
}

const initialState = {
  counter: 0
}

function App() {
  const [input, setInput] = useState(0)
  const [state, dispatch] = useReducer(reducer, initialState)

  return (
    <div>
      <h1>Reducer Example</h1>

      <input type='number'
             onChange={(e) => setInput(parseInt(e.target.value))}
             value={input}
      />
      <br/>
      <button onClick={() => dispatch({type: 'INIT', payload: input})}>Initialize Counter</button>

      <p>{ state.counter }</p>
      <button onClick={() => dispatch({type: 'INCREMENT'})}>Increment</button>
      <button onClick={() => dispatch({type: 'DECREMENT'})}>Decrement</button>

    </div>
  );
}

export default App;
