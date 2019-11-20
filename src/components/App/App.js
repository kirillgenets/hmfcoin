import React, { Component } from "react";
import PropTypes from 'prop-types';
import Logo from './Logo.js';
import Capitalization from '../Capitalization/Capitalization.js';

class App extends Component {
  constructor(props) {
    super(props);
    this.state = {
      capitalization: '240 882 812 345'.replace(/(\d)(?=(\d{3})+(\D|$))/g, '$1 ')
    }
  }

  render() {
    return [
      <Logo />,
      <Capitalization value={this.state.capitalization} />
    ];
  }
}

export default App;