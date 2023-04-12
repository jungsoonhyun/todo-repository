// import React from 'react';
import logo from './logo.svg';
import './App.css';
import { useDispatch, useSelector } from 'react-redux';
import styled from 'styled-components';
import { countActions } from './store';

const App = () => {
  const dispatch = useDispatch();
  const count = useSelector((state) => state.counter.count);

  const handleButtonClick = () => {
    dispatch(countActions.increment());
  };

  const Button = styled.button`
    padding: 10px;
    background-color: #393646;
    color: #e86a33;
    font-weight: bold;
    border: none;
    border-radius: 50%;
    font-size: 20px;
    cursor: pointer;
  `;

  return (
    <div className="App">
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        <p>리덕스툴킷 때문에 깊은 빡침이 전단에서 올라옴</p>
        <div>빡쳐서 당근을 흔든 횟수</div>
        <a
          // className="App-link"
          href="https://ko.redux.js.org/redux-toolkit/overview"
          target="_blank"
          rel="noopener noreferrer"
        >
          <Button onClick={handleButtonClick}>Click Me ({count})</Button>
        </a>
      </header>
    </div>
  );
};

export default App;
