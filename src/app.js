import React, { Component } from 'react';
import $ from 'jquery';
import io from 'socket.io-client';

let socket = io(`http://localhost:3000`);

export default class App extends Component {

  componentDidMount() {
    socket.on('connect', function() {
      console.log('connected')
    })
  }

  render() {
    return (
      <div>WELCOME</div>
    );
  }
}
