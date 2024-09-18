import { Component } from 'react';
import './index.css';

class Speedometer extends Component {
  state = { count: 0 };

  increase = () => {
    this.setState(prevState => {
      if (prevState.count < 200) {
        return { count: prevState.count + 10 };
      }
      return prevState;
    });
  };

  reset = () => {
    this.setState(prevState => {
      if (prevState.count > 0) {
        return { count: prevState.count - 10 };
      }
      return prevState;
    });
  };

  render() {
    const { count } = this.state;
    return (
      <div className="container">
        <h1 className="heading">SPEEDOMETER</h1>
        <img
          src="https://assets.ccbp.in/frontend/react-js/speedometer-img.png"
          className="image"
          alt="speedometer"
        />
        <h1 className="speedCount">Speed is {count}mph</h1>
        <p className="content">Min Limit is 0mph, Max Limit is 200mph</p>
        <div className="buttonContainer">
          <button className="btn1" onClick={this.increase}>
            Accelerate
          </button>
          <button className="btn2" onClick={this.reset}>
            Apply Brake
          </button>
        </div>
      </div>
    );
  }
}

export default Speedometer;
