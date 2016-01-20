// import 'es6-promise';
// import 'isomorphic-fetch';
import { h, render } from 'preact';
import App from './components/app';
import './style';

render(<App />, document.body, document.body.firstElementChild);
