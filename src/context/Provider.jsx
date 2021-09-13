import MyContext from "./MyContext";
import React, {Component}  from 'react';
import Cars from "../Cars";

class Provider extends Component {
  constructor () {
    super();
    this.state = {
      cars: {
        red: false,
        blue: false,
        yellow: false,
      }
    }
    this.moveCar = this.moveCar.bind(this);
  }

  moveCar(car,side){
    this.setState({
      cars: {
        ...this.state.cars,
        [car]: side
      }
    })
  }

  render(){
    const contextValue = {
      cars: this.state.cars,
      move: this.moveCar,
    }
    return(
      <MyContext.Provider value={contextValue}>
        <Cars/>
      </MyContext.Provider>
    )
  }
}

export default Provider;




