import { MapContainer, TileLayer, Marker, Popup } from "react-leaflet";
import { useQuery } from "@tanstack/react-query";
import "leaflet/dist/leaflet.css";
import markerIcon from "leaflet/dist/images/marker-icon.png";
import markerIconShadow from "leaflet/dist/images/marker-shadow.png";
import Loading from "./Loading";
import Error from "./Error";
import { Icon } from "leaflet";
// import L from "leaflet";

interface countryData {
	updated: number;
	country: string;
	countryInfo: {
		_id: number;
		iso2: string;
		iso3: string;
		lat: number;
		long: number;
		flag: string;
	};
	cases: number;
	todayCases: number;
	deaths: number;
	todayDeaths: number;
	recovered: number;
	todayRecovered: number;
	active: number;
	critical: number;
	casesPerOneMillion: number;
	deathsPerOneMillion: number;
	tests: number;
	testsPerOneMillion: number;
	population: number;
	continent: string;
	oneCasePerPeople: number;
	oneDeathPerPeople: number;
	oneTestPerPeople: number;
	activePerOneMillion: number;
	recoveredPerOneMillion: number;
	criticalPerOneMillion: number;
}

const Map = () => {
	const {
		data: covidData,
		isLoading,
		error,
	} = useQuery(["map-data", "covid"], () =>
		fetch("https://disease.sh/v3/covid-19/countries").then((res) => res.json())
	);

	if (isLoading) {
		return (
			<div>
				<Loading />
			</div>
		);
	}
	if (error) {
		return <Error />;
	}

	// removing null Ids
	const filteredCovidData = covidData.filter(
		(country: countryData) => country.countryInfo._id !== null
	);

	const customIcon = new Icon({
		iconUrl: markerIcon,
		shadowUrl: markerIconShadow,
		iconSize: [25, 41],
		iconAnchor: [12, 41],
		popupAnchor: [1, -34],
		tooltipAnchor: [16, -28],
		shadowSize: [41, 41],
	});

	return (
		<div className="mt-10 w-3/4 mx-auto md:w-full">
			<h2 className="text-3xl mb-10">Cases Across Countries</h2>
			<MapContainer
				className="h-[80vh]"
				center={[20, 77]}
				zoom={4}
				scrollWheelZoom={false}
			>
				<TileLayer url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png" />
				{filteredCovidData.map((country: countryData) => (
					<Marker
						key={country.countryInfo._id}
						position={[country.countryInfo.lat, country.countryInfo.long]}
						icon={customIcon}
						// To show the respective country flags
						// icon={L.icon({iconUrl: country.countryInfo.flag, iconSize: [25, 15]})}
					>
						<Popup>
							<div>
								<h2 className="text-xl font-bold">{country.country}</h2>
								<p>
									Cases: <span className="font-semibold">{country.cases}</span>
								</p>
								<p>
									Recovered:{" "}
									<span className="font-semibold">{country.recovered}</span>{" "}
								</p>
								<p>
									Deaths:{" "}
									<span className="font-semibold">{country.deaths}</span>
								</p>
							</div>
						</Popup>
					</Marker>
				))}
			</MapContainer>
		</div>
	);
};

export default Map;
