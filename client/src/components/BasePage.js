import React, { Component } from 'react';
import Footer from './Footer';
import Nav from './Nav';

import './BasePage.css';

export default class BasePage extends Component {
  render() {
    return <div className="base">
      <Nav />
      {this.props.children}
      <Footer />
    </div>
  }
}