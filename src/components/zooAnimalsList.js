import React from "react";
import axios from "axios";
import { useEffect, useState } from "react";
import ZooAnimalCard from "./zooAnimalsCard";

const ZooAnimalsList = () => {
	const [animals, setAnimals] = useState([]);

	useEffect(() => {
		getZooAnimals()
			.then((res) => {
				console.log(res.data);
				setAnimals(res.data);
			})
			.catch((err) => {
				console.log(err);
			});
	}, []);

	const mapZooAnimals = animals.map((aZooAnimal) => {
		return (
			<ZooAnimalCard
				name={aZooAnimal.name}
				photo={aZooAnimal.image_link}
			/>
		);
	});

	function getZooAnimals() {
		let config = {
			method: "GET",
			url: `https://zoo-animal-api.herokuapp.com/animals/rand/8`,
		};
		return axios(config);
	}

	return <div className="animal-cards">{mapZooAnimals}</div>;
};

export default ZooAnimalsList;
