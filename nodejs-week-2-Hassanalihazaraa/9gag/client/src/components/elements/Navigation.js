import React, { Component } from 'react';
import { Link } from 'react-router-dom';

class Navigation extends Component {
  render() {
    return (
      <nav>
          <Link to="/home">
            <h1>HACK YOUR FUTURE JOKES</h1>
          </Link>
          <Link to="/upload" className="link_upload">
            <button>UPLOAD</button>
          </Link>
      </nav>
    );
  }
}

export default Navigation;
