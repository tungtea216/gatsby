import React, { Component } from 'react';
import { Link } from 'gatsby';
import './index.css';
import { fromEvent } from 'rxjs';
class Header extends Component {
	constructor(props) {
		super(props);
		this.state = {
			isMin: false
		}
	}
	componentDidMount() {
		fromEvent(window, 'scroll').subscribe(e => {
			if (window.scrollY > 50) {
				this.setState({
					isMin: true
				})

			}
			else {
				this.setState({
					isMin: false
				})
			}
		})
	}
	render() {
		const { isMin } = this.state;
		return (
			<header className={`header-area ${isMin ? 'header-sticky' : ''}`}>
				<div className="container">
					<div className="row">
						<div className="col-lg-12">
							<nav className="main-nav">
								<Link to="/" className="logo">
									{isMin ?
										<img src="http://localhost:8000/assets/images/logo-dark.svg" alt="Arda ICO" /> :
										<img src="http://localhost:8000/assets/images/logo-white.svg" className="white-logo" alt="Arda ICO" />}
								</Link>
							</nav>
						</div>
					</div>
				</div>
			</header>
		);
	}
}

export default Header;