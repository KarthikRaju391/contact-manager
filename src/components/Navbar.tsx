import { AddressBook, ArrowRight, ChartLine } from "@phosphor-icons/react";
import { Link } from "react-router-dom";

const Navbar = ({ screenSize }: { screenSize: string }) => {
	return (
		<nav className="md:block px-5 bg-slate-200 left-0 top-0 bottom-0 overflow-y-auto fixed">
			<ul className="mt-14 flex flex-col gap-3">
				<Link
					to="/"
					className="group text-2xl font-semibold flex items-center justify-center md:justify-normal cursor-pointer"
				>
					{screenSize === "small" ? (
						<AddressBook size={35}/>
					) : (
						<>
							Contacts
							<ArrowRight
								size={25}
								className="ml-auto group-hover:translate-x-1 duration-75"
							/>
						</>
					)}
				</Link>
				<Link
					to="/data"
					className="group text-2xl font-semibold flex justify-center md:justify-normal items-center"
				>
					{screenSize === "small" ? (
						<ChartLine size={35}/>
					) : (
						<>
							Data	
							<ArrowRight
								size={25}
								className="ml-auto group-hover:translate-x-1 duration-75"
							/>
						</>
					)}
				</Link>
			</ul>
		</nav>
	);
};

export default Navbar;