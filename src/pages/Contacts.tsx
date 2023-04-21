import { useAppDispatch, useAppSelector } from "../app/hooks";
import { incremented, amountAdded } from "../features/counter/counterSlice";
import { Link } from "react-router-dom";

const Contacts = () => {
	const count = useAppSelector((state) => state.counter.value)
	const dispatch = useAppDispatch();

	const handleClick = () => {
		dispatch(amountAdded(3))
	}

	return (
		<div className="flex flex-col items-center mt-4">
			<h1 className="text-4xl font-bold">Contacts</h1>	
			<div>
				<button onClick={handleClick}>
					count is: {count}
				</button>
			</div>
			<Link to="/add">Add Contact</Link>
		</div>
	);
};

export default Contacts;
