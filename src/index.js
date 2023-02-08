import React from 'react';
import ReactDOM from 'react-dom/client';
import Board from './components/Board';
import ScrambleButton from './components/ScrambleButton'
import Timer from './components/Timer';
import store from './redux/app/store';
import { Provider } from 'react-redux';
import "./styles/index.css"
import StartStopButton from './components/StartStopButton';

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <Provider store={store}>
    <Board />
    <ScrambleButton />
    <Timer />
    <StartStopButton />
  </Provider>
);