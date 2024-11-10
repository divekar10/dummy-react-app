import React from 'react';
import { RegistrationContextProvider } from './components/context/RegisterFormContext';
import './App.css';
import RegistrationForm from './components/RegistrationForm';
import DisplayValues from './components/DisplayValues';

function App() {
  return (
    <div className="App">
      <RegistrationContextProvider>
        <RegistrationForm />
        <DisplayValues />
      </RegistrationContextProvider>
    </div>
  );
}

export default App;
