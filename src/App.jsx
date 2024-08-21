import { useState } from 'react';
import reactLogo from './assets/react.svg';
import viteLogo from '/vite.svg';
import './App.css';

function App() {
  const [value, setValue] = useState('');

  const handleButtonClick = (buttonValue) => {
    setValue(value + buttonValue);
  };

  const handleClear = () => {
    setValue('');
  };

  const handleDelete = () => {
    setValue(value.slice(0, -1));
  };

  const handleEqual = () => {
    try {
      setValue(eval(value));
    } catch (error) {
      setValue('Error');
    }
  };

  return (
    <>
      <div className="container">
        <div className="calculator">
          <form onSubmit={(e) => e.preventDefault()}>
            <div>
              <input type="text" value={value} readOnly />
            </div>
            <div className="inside">
              <div>
                <button type="button" onClick={handleClear}>C</button>
                <button type="button" onClick={handleDelete}>De</button>
                <button type="button" onClick={() => handleButtonClick('.')}>.</button>
                <button type="button" className="operator" onClick={() => handleButtonClick('/')}>/</button>
              </div>
              <div>
                <button type="button" onClick={() => handleButtonClick('7')}>7</button>
                <button type="button" onClick={() => handleButtonClick('8')}>8</button>
                <button type="button" onClick={() => handleButtonClick('9')}>9</button>
                <button type="button" className="operator" onClick={() => handleButtonClick('*')}>*</button>
              </div>
              <div>
                <button type="button" onClick={() => handleButtonClick('4')}>4</button>
                <button type="button" onClick={() => handleButtonClick('5')}>5</button>
                <button type="button" onClick={() => handleButtonClick('6')}>6</button>
                <button type="button" className="operator" onClick={() => handleButtonClick('+')}>+</button>
              </div>
              <div>
                <button type="button" onClick={() => handleButtonClick('1')}>1</button>
                <button type="button" onClick={() => handleButtonClick('2')}>2</button>
                <button type="button" onClick={() => handleButtonClick('3')}>3</button>
                <button type="button" className="operator" onClick={() => handleButtonClick('-')}>-</button>
              </div>
              <div>
                <button type="button" id="double" onClick={() => handleButtonClick('00')}>00</button>
                <button type="button" onClick={() => handleButtonClick('0')}>0</button>
                <button type="button" className="operator" onClick={handleEqual}>=</button>
              </div>
            </div>
          </form>
        </div>
      </div>
    </>
  );
}

export default App;
