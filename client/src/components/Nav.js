import React, { Component } from 'react';
import {Link} from 'react-router-dom';

export default class Nav extends Component {
  render() {
    return <nav className="navbar">
      <div className="container">
        <div className="navbar-brand">
          <Link class="navbar-item" to="http://bulma.io">
            <img src="http://bulma.io/images/bulma-logo.png" 
              alt="Bulma: a modern CSS framework based on Flexbox" 
              width="112" height="28"/>
          </Link>
        </div>
      </div>
    </nav>
  }
}