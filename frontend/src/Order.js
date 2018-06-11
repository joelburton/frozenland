import React from 'react';
import currency from './currency';

import './Order.css';


class Order extends React.Component {
  totalPrice = () => this.props.order.reduce((accum, item) => accum + item.price, 0);

  render() {
    return (
      <div className="Order" >
        <h2>Order</h2>
        <ul className="Order-list">
          {this.props.order.map((item, idx) => (
            <li className="Order-item" key={idx} >
              <span className="Order-item-name">{item.name}</span>
              <span className="Order-item-price">{currency(item.price)}</span></li>
          ))}
        </ul>
        <p className="Order-total">Total: {currency(this.totalPrice())}</p>
      </div >
    )
  }

}

export default Order;