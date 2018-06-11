import React from 'react';
import axios from 'axios';
import currency from './currency';
import './Menu.css';

class Menu extends React.Component {
  state = { "flavors": [] };

  async componentDidMount() {
    const data = await axios.get("http://localhost:5000/flavors");
    this.setState({ flavors: data.data.flavors });
  }

  render() {
    if (!this.state.flavors.length) {
      return <div>Loading...</div>
    }

    return (
      <div className="Menu">
        <h2>Flavors</h2>
        {this.state.flavors.map((flavor, idx) => (
          <div onClick={e => this.props.addToOrder(flavor.name, flavor.price)}
            className="Menu-item"
            key={idx}
            style={{ backgroundColor: flavor.color }}>
            <span className="Menu-item-name">{flavor.name}</span>
            <span className="Menu-item-price">{currency(flavor.price)}</span>
          </div>
        ))
        }
      </div>
    )
  }
}

export default Menu;
