import { CovidApiData } from "../components/LineChart";

export function formatData(inputData: CovidApiData) {
	const labels = [];
	const data = [];
	for (const caseDate in inputData) {
		const cases = inputData[caseDate];
		const year = `${new Date(caseDate).toLocaleDateString("en-US", {
			month: "short",
		})} 20${caseDate.split("/")[2]}`;
		labels.push(year);
		data.push(cases);
	}

	return { labels, data };
}
