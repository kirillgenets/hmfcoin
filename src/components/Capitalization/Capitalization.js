import React, { Component } from 'react';
import PropTypes from 'prop-types';
import './style/Capitalization.scss';

class Capitalization extends Component {
  static propTypes = {
    value: PropTypes.number.isRequired
  }

  constructor(props) {
    super(props);
    this.value = props.value.toString().replace(/(\d)(?=(\d{3})+(\D|$))/g, '$1 ');
  }

  render() {
    return (
      <div className='capitalization'>
        <h2 className='capitalization-title'>Total market cap:</h2>
        <p className='capitalization-value'>${this.value}</p>
      </div>
    );
  }
}

export default Capitalization;