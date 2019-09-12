import React, {Component} from "react";
import {Link} from "react-router-dom";

export default class Navbar extends Component {
  render() {
    return (
      <nav className='navbar navbar-dark bg-dark navbar-expand-lg'>
        <Link to='/' className='navbar-brand'>
          ExcerTracker
        </Link>
        <button
          className='navbar-toggler'
          type='button'
          data-toggle='collapse'
          data-target='#collapsibleNavbar'
        >
          <span className='navbar-toggler-icon'></span>
        </button>
        <div className='navbar-collapse' id='collapsibleNavbar'>
          <ul className='navbar-nav '>
            <li className='nav-item'>
              <Link to='/' className='nav-link'>
                Exercises
              </Link>
            </li>
            <li className='nav-item'>
              <Link to='/create' className='nav-link'>
                Create Exercise Log
              </Link>
            </li>
            <li className='nav-item'>
              <Link to='/user' className='nav-link'>
                Create User
              </Link>
            </li>
          </ul>
        </div>
      </nav>
    );
  }
}
