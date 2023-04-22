import { useQuery } from "@tanstack/react-query";
import { formatData } from "../lib/FormatData";
import { Line } from "react-chartjs-2";
import {
	Chart as ChartJS,
	CategoryScale,
	LinearScale,
	PointElement,
	LineElement,
	Title,
	Tooltip,
	Legend,
} from "chart.js/auto";
import Loading from "./Loading";
import Error from "./Error";

ChartJS.register(
	CategoryScale,
	LinearScale,
	PointElement,
	LineElement,
	Title,
	Tooltip,
	Legend
);

export type CovidApiData = {
	[date: string]: number;
};

interface CovidData {
	labels: string[];
	datasets: {
		label: string;
		data: number[];
		borderColor: string;
		borderWidth: number;
		tension: number;
	}[];
}

const options: any = {
	responsive: true,
	plugins: {
		legend: {
			position: "top",
		},
		title: {
			display: true,
		},
	},
	scales: {
		y: {
			ticks: {
				callback: function (value: number) {
					return value / 1000000 + "M";
				},
			},
		},
	},
	maintainAspectRatio: false,
};

const LineChart = () => {
	const {
		data: covidData,
		isLoading,
		error,
	} = useQuery(["data", "covid"], () =>
		fetch("https://disease.sh/v3/covid-19/historical/all?lastdays=all").then(
			(res) => res.json()
		)
	);

	if (isLoading) {
		return <Loading />;
	}
	if (error) {
		return <Error />;
	}
	const covidDataSet: CovidData = {
		labels: [],
		datasets: [
			{
				label: "Cases",
				data: [],
				borderColor: "#dc2626",
				borderWidth: 1,
				tension: 0.1,
			},
			{
				label: "Deaths",
				data: [],
				borderColor: "#2563eb",
				borderWidth: 1,
				tension: 0.1,
			},
		],
	};

	const { labels: caseLabels, data: caseData } = formatData(covidData.cases);
	const { data: deathData } = formatData(covidData.deaths);

	covidDataSet.labels = caseLabels;
	covidDataSet.datasets[0].data = caseData;
	covidDataSet.datasets[1].data = deathData;

	return (
		<div className="mt-10 w-3/4 mx-auto md:w-full h-[75vh] mb-5">
			<h1 className="text-3xl">Cases Fluctuation</h1>
			<Line data={covidDataSet} options={options} />
		</div>
	);
};

export default LineChart;
