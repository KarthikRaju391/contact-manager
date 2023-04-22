import { CloudX } from "@phosphor-icons/react";

const Error = () => {
	return (
		<div className="grid place-items-center h-screen ">
			<div className="flex gap-2 items-center mt-20 p-4 border border-red-500 bg-red-200 rounded-md">
				<CloudX size={32} color="#ef4444"/>
				<p>Unable to connect to the API!</p>
			</div>
		</div>
	);
};

export default Error;
