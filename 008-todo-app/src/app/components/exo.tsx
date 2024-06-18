import React, { useState, useEffect } from "react";
import axios from "axios";

function App() {
	const [inputValue, setInputValue] = useState("");
	const [recettesListe, setRecettesListe] = useState([]);

	useEffect(() => {
		axios(`https://www.themealdb.com/api/json/v1/1/search.php?s=${inputValue}`)
			.then((response) => {
				if (response.data.meals !== null) {
					setRecettesListe(response.data.meals);
				} else {
					setRecettesListe([]);
				}

				console.log("response", response);
			})
			.catch((error) => {
				console.error(error);
			});
	}, [inputValue]);

	const handleInputChange = (event) => {
		setInputValue(event.target.value);
	};

	return (
		<div>
			<h1>Hello world </h1>
			<form action="" methode="get">
				<label for="recherche"> Recherche de la recette: </label>
				<input type="text" name="recherche" id="recherche" required placeholder="" onChange={handleInputChange} />
				<button type="button"> Search </button>
			</form>
			<ul>
				{recettesListe.map((recette, index) => {
					return <li key={index}> {recette.strMeal} </li>;
				})}
			</ul>
		</div>
	);
}

export default App;
