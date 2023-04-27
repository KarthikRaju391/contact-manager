import LineChart from "../components/LineChart";
import Map from "../components/Map";

const ChartsAndMaps = () => {
	return (
		<div className="w-full md:w-3/4 mx-auto mt-14 flex flex-col mb-16">
			<h1 className="w-3/4 md:w-full mx-auto text-4xl md:text-5xl">Covid Data</h1>
			<LineChart />
			<Map />
		</div>
	);
};

export default ChartsAndMaps;
