import React, { useState } from 'react';
import './App.scss';
// STEP 4 - import the button and display components
// Don't forget to import any extra css/scss files you build into the correct component

// Logo has already been provided for you. Do the same for the remaining components
import Logo from './components/DisplayComponents/Logo';
import Display from './components/DisplayComponents/Display';
import Specials from './components/ButtonComponents/SpecialButtons/Specials';
import Numbers from './components/ButtonComponents/NumberButtons/Numbers';
import Operators from './components/ButtonComponents/OperatorButtons/Operators';

function App() {
  const [displayValue, setDisplayValue] = useState('');

  const displayText = number => {
    setDisplayValue(number);
  };

  const addNumber = number => {
    if (number === '=') {
      setDisplayValue(eval(displayValue => number + displayValue));
    } else {
      setDisplayValue(displayValue => number + displayValue);
    }
  };

  return (
    <div className="container">
      <Logo />
      <div className="App">
        <Display displayValue={displayValue} />
        <div>
          <Specials />
          <Numbers addNumber={addNumber} />
        </div>
        <div>
          <Operators />
        </div>
      </div>
    </div>
  );
}

export default App;
