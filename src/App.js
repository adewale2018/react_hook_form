import React from 'react';
import logo from './logo.svg';
import MultiStepForm from './components/MultiStepForm';
import AccountSetup from './components/AccountSetup';
import './App.css';

class App extends React.Component {
  render() {
    return (
    <div className="App">
      <MultiStepForm />
    </div>
  );
  }
  
}

export default App;
