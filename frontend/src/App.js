import React, { Component } from 'react';
import Menu from './Menu';
import Order from './Order';
import Messages from './Messages';

import axios from 'axios';

import './App.css';

class App extends Component {
  state = { order: [], messages: [] };

  addToOrder = async (name, price) => {
    const order = { flavor: name };
    const avail = await axios.post("http://localhost:5000/order", order);
    if (avail.data.result === "ordered") {
      this.setState(state => ({
        order: [...state.order, { name, price }]
      }))
    } else {
      this.setState(state => ({
        messages: [...state.messages, `${name} unavailable`]
      }))
    }
  }

  render() {
    return (
      <div className="App">
        <h1>Frozenland™</h1>
        <p>
          <i>Warning: </i>
          some flavors are so popular that they're temmporarily sold out!
        </p>

        <Menu addToOrder={this.addToOrder} />
        <Order order={this.state.order} />
        <Messages messages={this.state.messages} />
      </div>
    );
  }
}

export default App;
