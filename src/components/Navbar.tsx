import { Link } from "react-router-dom";

const Navbar = () => {
	return (
		<nav className="border">
			<ul>
				<li>
					<Link to="/">Contacts</Link>
				</li>
				<li>
					<Link to="/data">Data</Link>
				</li>
			</ul>
		</nav>
	);
};

export default Navbar;
