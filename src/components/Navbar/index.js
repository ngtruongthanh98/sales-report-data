import React from 'react';
import './styles.scss';
import { Link, useResolvedPath, useMatch } from 'react-router-dom';

const Navbar = () => {
  return (
    <nav className="nav">
      <Link to="/" className="site-title">
        Sales Management Tool
      </Link>
      <ul>
        <CustomLink to="/sale-person">Sale Person</CustomLink>
        <CustomLink to="/analysis">Analysis</CustomLink>
      </ul>
    </nav>
  );
};

export default Navbar;

function CustomLink({ to, children, ...props }) {
  const resolvedPath = useResolvedPath(to);
  const isActive = useMatch({ path: resolvedPath.pathname, end: true });

  return (
    <li className={isActive ? 'active' : ''}>
      <Link to={to} {...props}>
        {children}
      </Link>
    </li>
  );
}
