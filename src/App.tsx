import React from 'react';
import { RegistrationContextProvider } from './components/context/RegisterFormContext';
import './App.css';
import RegistrationForm from './components/RegistrationForm';
import DisplayValues from './components/DisplayValues';

function App() {
  return (
    <div className="container">
      <RegistrationContextProvider>
        <div className="form-selection">
          <RegistrationForm />
        </div>
        <div className="display-selection">
          <DisplayValues />
        </div>
      </RegistrationContextProvider>
    </div>
  );
}

export default App;
