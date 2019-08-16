import React from 'react';
import { NavLink, Switch, Route } from 'react-router-dom';
import Home from '../../views/Home/Home';
import AboutMe from '../../views/AboutMe/AboutMe';

const NavBar = () => {
	return (
		<div>
			<nav className="navbar navbar-expand-lg navbar-fixed-top"  >
				<div className="container-fluid">
					
					<div className="navbar-header">
						<a className="navbar-brand" href="#">Navbar</a>
						<button className="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
							{/* <span className="navbar-toggler-icon"></span> */}
							<span className="sr-only">Toggle navigation</span>
							<span className="icon-bar"></span>
							<span className="icon-bar"></span>
							<span className="icon-bar"></span>
						</button>
					</div>

					<div className="collapse navbar-collapse" id="navbarSupportedContent">
						<ul className="nav navbar-nav mr-auto">
							<li className="nav-item active">
								<NavLink to="/" className="nav-link">Home</NavLink>
							</li>
							<li className="nav-item">
								<NavLink to="/Aboutme" className="nav-link">About Me</NavLink>
							</li>
						</ul>
					</div>
				</div>
			</nav>
			<div className="content">
				<Switch>
					<Route exact path='/' component={Home} />
					<Route path="/AboutMe" component={AboutMe} />
				</Switch>
			</div>
		</div>
	);
};

export default NavBar;


{/* <div classNameName="container-fluid">
					<div classNameName="navbar-header">
						<button type="button" classNameName="navbar-toggle" data-toggle="collapse" data-target="navbar-ex1-collapse">
							<span classNameName="sr-only">Toggle navigation</span>
							<span classNameName="icon-bar"></span>
							<span classNameName="icon-bar"></span>
							<span classNameName="icon-bar"></span>
						</button>
						<a classNameName="navbar-brand" href="#">Brand Name</a>
					</div>
					<div classNameName="collapse navbar-collapse navbar-ex1-collapse">
						<ul classNameName="nav navbar-nav navbar-right">
							<li><NavLink to="/">Home</NavLink></li>
							<li><NavLink to="/Aboutme">About Me</NavLink></li>
						</ul>
					</div>
                </div> */}
                
//     <div classNameName="content">
// 	<Switch>
// 		<Route exact path="/" component={Home} />
// 		<Route path="/AboutMe" component={AboutMe} />
// 	</Switch>
// </div>