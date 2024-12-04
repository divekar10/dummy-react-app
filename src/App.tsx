import React, { CSSProperties } from 'react';
import { RegistrationContextProvider } from './components/context/RegisterFormContext';
import './App.css';
import RegistrationForm from './components/RegistrationForm';
import DisplayValues from './components/DisplayValues';
import Card from './components/context/CardComponents';
import ReactPaginatorComponent from './components/ReactPaginatorComponent';

function App() {

  const style : CSSProperties ={
    borderStyle:'solid',
    height:'50px',
    width:'50px'
}

  return (
    <div className="container">
      {/* <RegistrationContextProvider>
        <div className="form-selection">
          <RegistrationForm />
        </div>
        <div className="display-selection">
          <DisplayValues />
        </div>
      </RegistrationContextProvider> */
      //    <div>
      //   <div style={style}>Card 1</div>
      //   <div style={style}>Card 2</div>
      //   <div style={style}>Card 3</div>
      //   <div style={style}>Card 4</div>
      // </div>
      <ReactPaginatorComponent/>
      }
    </div>
  );
}

export default App;
