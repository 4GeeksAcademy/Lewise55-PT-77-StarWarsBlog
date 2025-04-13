import React, {useState, useEffect} from "react";
import useGlobalReducer from "../hooks/useGlobalReducer.jsx";
import { useParams } from "react-router-dom";

export const StarshipDetails = () => {
    const {uid} = useParams()
    const [starship, setStarship] = useState({})
    const { store, dispatch, } = useGlobalReducer()

    useEffect(() => {
      getEachStarship()
    },[])

    const getEachStarship = async() => {
      let response = await fetch("https://www.swapi.tech/api/starships/" + uid )
      let data = await response.json();
      setStarship(data.result.properties);
    }
    console.log(starship);
    

    return (
      <div className="text-center mt-5">
        <div className="StarShip Info">
            
        </div>
      </div>
    );
  }; 