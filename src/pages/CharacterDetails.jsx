import React, {useState, useEffect} from "react";
import useGlobalReducer from "../hooks/useGlobalReducer.jsx";
import { useParams } from "react-router-dom";

export const CharacterDetails = () => {
    const {uid} = useParams()
    const [character, setCharacter] = useState({})
    const { store, dispatch } = useGlobalReducer()

    useEffect(() => {
      getEachCharacter()
    },[])

    const getEachCharacter = async() => {
      let response = await fetch("https://www.swapi.tech/api/people/" + uid )
      let data = await response.json();
      setCharacter(data.result.properties);
    }
    console.log(character);
    

    return (
      <div className="text-center mt-5">
        <div className="CharacterBlock">
          <div className="Character info"> 
            <div className="d-flex align-items-baseline px-2">
              <h1>Name:</h1>
              <h3 className="px-2">{character.name}</h3>
            </div>

            <div className="d-flex align-items-baseline px-2">
              <h1>gender:</h1>
              <h3 className="px-2">{character.gender}</h3>
            </div>

            <div className="d-flex align-items-baseline px-2">
              <h1>Hair Color:</h1>
              <h3 className="px-2">{character.hair_color}</h3>
            </div>

            <div className="d-flex align-items-baseline px-2">
              <h1>Skin Color:</h1>
              <h3 className="px-2">{character.skin_color}</h3>
            </div>

            <div className="d-flex align-items-baseline px-2">
              <h1>Height:</h1>
              <h3 className="px-2">{character.height}</h3>
            </div>

            <div className="d-flex align-items-baseline px-2">
              <h1>Eye Color:</h1>
              <h3 className="px-2">{character.eye_color}</h3>          
            </div>

            <div className="d-flex align-items-baseline px-2">
              <h1>Birth Year:</h1>
              <h3 className="px-2">{character.birth_year}</h3>          
            </div>
          </div>
          <img scr="" />
        </div>
        
       
      </div>
    );
  }; 