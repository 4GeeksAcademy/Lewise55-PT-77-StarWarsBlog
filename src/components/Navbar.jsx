import { Link } from "react-router-dom";
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faJedi } from '@fortawesome/free-solid-svg-icons';
import useGlobalReducer from "../hooks/useGlobalReducer.jsx";

export const Navbar = () => {

	const {store, dispatch} =useGlobalReducer()


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
					<div className="dropdown">
						<button className="btn btn-warning dropdown-toggle" type="button" data-bs-toggle="dropdown" aria-expanded="false">
							Favorites
						</button>
						<ul className="dropdown-menu">
							{store.favorites?.length > 0 ? (
								store.favorites.map((item, index) => (
								<li key={index}>
									<a className="dropdown-item" href="#">{item}</a>
								</li>
								))
							) : (
								<li>
									<span className="dropdown-item-text">No favorites yet</span>
								</li>
							)}							
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