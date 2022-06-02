import React, {Component} from "react";
import {Link} from "gatsby";
import {AnchorLink} from "gatsby-plugin-anchor-links";
import * as styles from "../styles/navbar-component.module.css";
import {FontAwesomeIcon} from "@fortawesome/react-fontawesome";
import {faBars} from "@fortawesome/free-solid-svg-icons";

class Navbar extends Component {
	constructor(props) {
		super(props);
		this.state = {
			view: false
		};
	}

	render() {
		console.log(this.state);
		return (
			<nav>
				<div className={styles.mobileNav}>
					<button onClick={() => this.setState({view: false})}
						className={this.state.view ? styles.closeButton : styles.mobileHide}>X
					</button>
					<button onClick={() => this.setState({view: true})}
						className={!this.state.view ? styles.burgerMenu : styles.mobileHide}>
						<FontAwesomeIcon
							icon={faBars}
							inverse
							className="fa-inverse"
						/>
					</button>
				</div>
				<div className={this.state.view ? styles.navLinks : styles.mobileHide}>
					<li>
						<Link to="/">Home</Link>
					</li>
					<li>
						<Link to="/church/">St Peters Church</Link>
					</li>

					<li>
						<Link to="/parish/">
                            Parish Council
						</Link>
						<ul className={styles.submenu}>
							<li>
								<Link to="/minutes/">Minutes</Link>
							</li>
							<li>
								<Link to="/downloads/">Downloads</Link>
							</li>
						</ul>
					</li>

					<li>
						<Link to="/diggers/">Village Life </Link>
						<ul className={styles.submenu}>
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
						<ul className={styles.submenu}>
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
				</div>
			</nav>
		);
	}
}

export default Navbar;
