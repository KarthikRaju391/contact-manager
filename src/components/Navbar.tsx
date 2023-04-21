import { Link } from "react-router-dom";

const Navbar = () => {
	return (
		<nav className="border min-h-screen max-w-xs">
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
