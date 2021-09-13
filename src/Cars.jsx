// src/Cars.jsx
import PropTypes from 'prop-types';
import React, { Component } from 'react';
import carBlue from './images/carBlue.jpeg';
import carRed from './images/carRed.jpeg';
import carYellow from './images/carYellow.jpeg';
import MyContext from './context/MyContext';

function Cars() {
  return (
    <MyContext.Consumer>
      {({ cars: { red, blue, yellow }, move }, ) => (
        <div>
          <div>
            <img
              className={red ? 'car-right' : 'car-left'}
              src={carRed}
              alt="red car"
            />
            <button onClick={() => move('red', !red)} type="button">
              Move
            </button>
          </div>
          <div>
            <img
              className={blue ? 'car-right' : 'car-left'}
              src={carBlue}
              alt="blue car"
            />
            <button onClick={() => move('blue', !blue)} type="button">
              Move
            </button>
          </div>
          <div>
            <img
              className={yellow ? 'car-right' : 'car-left'}
              src={carYellow}
              alt="yellow car"
            />
            <button onClick={() => move('yellow', !yellow)} type="button">
              Move
            </button>
          </div>
        </div>
      )}
    </MyContext.Consumer>
  );
}

Cars.propTypes = {
  moveCar: PropTypes.func.isRequired,
  blueCar: PropTypes.bool.isRequired,
  redCar: PropTypes.bool.isRequired,
  yellowCar: PropTypes.bool.isRequired,
};

export default Cars;
