import React from 'react';
import { Link } from 'react-router-dom';

function NavBar() {
  return (
    <nav>
      <h1>Basic Blog Post System</h1>
      <ul className='nav__links'>
        <Link to='/posts'>
          <li>Posts</li>
        </Link>
        <Link to='/users'>
          <li>Users</li>
        </Link>
      </ul>
    </nav>
  );
}

export default NavBar;
