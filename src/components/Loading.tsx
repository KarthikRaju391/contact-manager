import { SpinnerGap } from "@phosphor-icons/react";

const Loading = () => {
	return (
		<div className="grid place-items-center h-screen">
			<SpinnerGap size={32} className="animate-spin" />
		</div>
	);
};

export default Loading;
