import React, {Component} from "react";
import {Link} from "gatsby";
import { AnchorLink } from "gatsby-plugin-anchor-links";


class Header extends Component {
  render() {
    return (<nav>
      <li>
        <Link to="/">Home</Link>
      </li>
      <li>
        <Link to="/church/">St Peters Church</Link>
      </li>

      <li>
        <Link to="/parish/" >
          Parish Council
        </Link>
        <ul className="submenu">
          <li>
            <Link to="/minutes/">Minutes</Link>
          </li>
          <li>
            <Link to="/downloads/">Downloads</Link>
          </li>
        </ul>
      </li>

      <li>
          <Link to="/diggers/" >Village Life </Link>
        <ul className="submenu">
          <li>
            <Link to="/diggers/">Stoke Lyne Diggers</Link>
          </li>
          <li>
            <Link to="/events/">Events</Link>
          </li>
        </ul>
      </li>

      <li>
        <Link to="/about">
          About Stoke Lyne
        </Link>
        <ul className="submenu">
          <li>
            <Link to="/views">Views around Stoke Lyne</Link>
          </li>
          <li>
            <Link to="/history">Memories of Stoke Lyne</Link>
          </li>
        </ul>
      </li>

      <li><Link to="/the-peyton-arms">The Peyton Arms</Link></li>

      <li><AnchorLink to="#footer">Contact</AnchorLink></li>
    </nav>);
  }
}

export default Header;
