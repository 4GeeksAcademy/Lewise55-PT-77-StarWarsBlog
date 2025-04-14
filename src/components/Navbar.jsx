import { Link } from "react-router-dom";
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faJedi } from '@fortawesome/free-solid-svg-icons';

export const Navbar = () => {

	return (
		<nav className="navbar navbar-dark bg-dark">
			<div className="container">
				<Link to="/">
					<span className="navbar-brand mb-0 h1">
						<FontAwesomeIcon icon={faJedi} />
					</span>
				</Link>
				<div className="ml-auto">
					<div className="d-flex">
					<div class="dropdown">
						<button class="btn btn-warning dropdown-toggle" type="button" data-bs-toggle="dropdown" aria-expanded="false">
							Favorites
						</button>
						<ul class="dropdown-menu">
							<li><a class="dropdown-item" href="#">Action</a></li>
							<li><a class="dropdown-item" href="#">Another action</a></li>
							<li><a class="dropdown-item" href="#">Something else here</a></li>
						</ul>
						</div>
						<Link to="/demo">
						<button className="btn btn-warning mx-3">Check the Context in action</button>
						</Link>
					</div>
					
				</div>
			</div>
		</nav>
	);
};