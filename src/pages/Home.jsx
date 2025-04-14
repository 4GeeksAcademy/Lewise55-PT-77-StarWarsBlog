import React, {useState, useEffect} from "react";
import useGlobalReducer from "../hooks/useGlobalReducer.jsx";
import { CharacterCard } from "../components/CharacterCard.jsx";
import { PlanetCard } from "../components/PlanetCard.jsx"; 
import { StarshipCard } from "../components/StarshipCard.jsx";

export const Home = () => {
	const [characters, setCharacters] = useState([])
	const [planets, setPlanets] = useState([])
	const [starships, setStarships] = useState([])
	const {store, dispatch, getCharacters, getPlanets, getStarships} =useGlobalReducer()

	console.log("store.characters:", store.characters);

	useEffect(() => {
		getCharacters();
		getPlanets();
		getStarships();
	}, [])

	useEffect(() => {
		setCharacters(store.characters)
	}, [store.characters])

	useEffect(() => {
		setPlanets(store.planets)
	}, [store.planets])

	useEffect(() => {
		setStarships(store.starships)
	}, [store.starships])
	
	
	return (
		<div className="text-center text-warning mt-5">
			<h2>Characters</h2>
			<div className="d-flex col-10 overflow-auto mt-5 mx-auto ">
				{characters?.map((character, index) => {
					return	<CharacterCard key={character.uid} name={character.name} uid={character.uid}/>				
				})}				
			</div>

			<h2>Planets</h2>
			<div className="d-flex col-10 overflow-auto mt-5 mx-auto ">
				{planets?.map((planet, index) => {
					return	<PlanetCard key={planet.uid} name={planet.name} uid={planet.uid}/>				
				})}		
			</div>

			<h2>Startships</h2>
			<div className="d-flex col-10 overflow-auto mt-5 mx-auto ">
				{starships?.map((starship, index) => {
					return	<StarshipCard key={starship.uid} name={starship.name} uid={starship.uid}/>				
				})}			
			</div>
			
		</div>
	);
}; 