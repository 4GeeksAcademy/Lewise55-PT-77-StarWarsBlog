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

          <div className="d-flex align-items-baseline px-2">
            <h1>Name:</h1>
            <h3 className="px-2">{starship.name}</h3>
          </div>

          <div className="d-flex align-items-baseline px-2">
            <h1>Cargo Capacity:</h1>
            <h3 className="px-2">{starship.cargo_capacity}</h3>
          </div>

          <div className="d-flex align-items-baseline px-2">
            <h1>Passengers:</h1>
            <h3 className="px-2">{starship.passengers}</h3>
          </div>

          <div className="d-flex align-items-baseline px-2">
            <h1>Max Atmosphering Speed:</h1>
            <h3 className="px-2">{starship.max_atmosphering_speed}</h3>
          </div>

          <div className="d-flex align-items-baseline px-2">
            <h1>Crew:</h1>
            <h3 className="px-2">{starship.crew}</h3>
          </div>

          <div className="d-flex align-items-baseline px-2">
            <h1>Length:</h1>
            <h3 className="px-2">{starship.length}</h3>
          </div>

          <div className="d-flex align-items-baseline px-2">
            <h1>Model:</h1>
            <h3 className="px-2">{starship.model}</h3>
          </div>

          <div className="d-flex align-items-baseline px-2">
            <h1>Cost:</h1>
            <h3 className="px-2">{starship.cost_in_credits}</h3>
          </div>

          <div className="d-flex align-items-baseline px-2">
            <h1>Manufacturer:</h1>
            <h3 className="px-2">{starship.manufacturer}</h3>
          </div>

          <div className="d-flex align-items-baseline px-2">
            <h1>MGLT:</h1>
            <h3 className="px-2">{starship.MGLT}</h3>
          </div>
          
          <div className="d-flex align-items-baseline px-2">
            <h1>Starship Class:</h1>
            <h3 className="px-2">{starship.starship_class}</h3>
          </div>

          <div className="d-flex align-items-baseline px-2">
            <h1>Hyperdrive Rating:</h1>
            <h3 className="px-2">{starship.hyperdrive_rating}</h3>
          </div>

        </div>
      </div>
    );
  }; 