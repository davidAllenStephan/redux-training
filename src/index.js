import React from 'react';
import ReactDOM from 'react-dom/client';
import Board from './components/Board';
import ScrambleButton from './components/ScrambleButton'
import Timer from './components/Timer';
import store from './redux/app/store';
import { Provider } from 'react-redux';
import "./styles/index.css"
import StartStopButton from './components/StartStopButton';
import SaveButton from './components/SaveButton';
import NameInput from './components/NameInput';
import Score from './components/Score';

const root = ReactDOM.createRoot(document.getElementById('root'));
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