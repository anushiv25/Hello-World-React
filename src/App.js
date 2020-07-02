import React from 'react';
import logo from './logo.svg';
import './App.css';
import {Greet} from './components/Greet'
import Welcome from './components/Welcome'
import Hello from './components/Hello'
import Message from './components/Message'
import Counter from './components/Counter';
import FunctionClick from './components/FunctionClick';
import ClassClick from './components/ClassClick';

function App() {
  return (
    <div className="App">
      <FunctionClick/>
      <ClassClick/>
      {/* <Counter/> */}
      {/* <Message/>  */}
      {/* {<Greet name="Bruce" heroName="BatMan">
        <p>This is children props.</p>
      </Greet> */}
      {/* <Greet name="Tony" heroName="IronMan"/>  */}
      {/* <Welcome name="ABCD" heroName="xyz" /> */}
      {/* <Hello/> */}
      
    </div>
  );
}

export default App;
