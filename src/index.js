import React from 'react';
import ReactDOM from 'react-dom/client';

import { Provider } from 'react-redux';
import store from './redux/store';

import Board from './components/Board';
import ScrambleButton from './components/ScrambleButton'
import Timer from './components/Timer';
import StartStopButton from './components/StartStopButton';
import SaveButton from './components/SaveButton';
import NameInput from './components/NameInput';
import Score from './components/Score';

import Connection from './config/Connection';

import "./styles/index.css"


const root = ReactDOM.createRoot(document.getElementById('root'));

new Connection()
root.render(
  <Provider store={store}>
    <Board />
    <ScrambleButton />
    <Timer />
    <StartStopButton />
    <SaveButton />
    <NameInput />
    <Score />
    <h3>After completeing successfully the timer will stop automatically<br />To submit your time put your name in the textfield and hit save</h3>
  </Provider>
);