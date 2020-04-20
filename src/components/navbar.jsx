import React from 'react';

// Stateless Functional Component
const Navbar = ({ totalCounters }) => {
  console.log('Navbar - 2.1. Rendered');

  return (
    <nav className="navbar navbar-light bg-light">
      <a className="navbar-brand" href="#">
        Navbar{' '}
        <span className="badge badge-pill badge-secondary">
          {totalCounters}
        </span>
      </a>
    </nav>
  );
};

// class Navbar extends Component {
//   render() {}
// }

export default Navbar;
