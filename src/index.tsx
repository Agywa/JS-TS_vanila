import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import reportWebVitals from './reportWebVitals';
import {splitInterWords} from "./01-hello-tests/01";
import {sum} from "./03/03";
import {messages} from "./05/05_01";
import {User} from "./06/06_calback";
import {ManComponent} from "./07-destructuring-assigment/destrructuring";

const sentense = "Hello my friend!"
const result = splitInterWords(sentense)
console.log(result[0] === "hello")
console.log(result[1] === "my")
console.log(result[2] === "friend")
console.log(messages)

let  a = sum;



ReactDOM.render(
  <React.StrictMode>

      <User/>
  </React.StrictMode>,
  document.getElementById('root')
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
