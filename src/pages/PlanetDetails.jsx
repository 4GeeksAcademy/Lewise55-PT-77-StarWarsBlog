import React, {useState, useEffect} from "react";
import useGlobalReducer from "../hooks/useGlobalReducer.jsx";
import { useParams } from "react-router-dom";

export const PlanetDetails = () => {
    const {uid} = useParams()
    const [planet, setPlanet] = useState({})
    const { store, dispatch, } = useGlobalReducer()

    useEffect(() => {
      getEachPlanet()
    },[])

    const getEachPlanet = async() => {
      let response = await fetch("https://www.swapi.tech/api/planets/" + uid )
      let data = await response.json();
      setPlanet(data.result.properties);
    }
    console.log(planet);
    

    return (
      <div className="text-center mt-5">
        <div className="Planet Info">
            <div className="d-flex align-items-baseline px-2">
              <h1>Name:</h1>
              <h3 className="px-2">{planet.name}</h3>
            </div>
            <div className="d-flex align-items-baseline px-2">
              <h1>Climate:</h1>
              <h3 className="px-2">{planet.climate}</h3>
            </div>
            <div className="d-flex align-items-baseline px-2">
              <h1>Surface Water:</h1>
              <h3 className="px-2">{planet.surface_water}</h3>
            </div>
            <div className="d-flex align-items-baseline px-2">
              <h1>Diameter:</h1>
              <h3 className="px-2">{planet.diameter}</h3>
            </div>
            <div className="d-flex align-items-baseline px-2">
              <h1>Rotation Period:</h1>
              <h3 className="px-2">{planet.rotation_period}</h3>
            </div>
            <div className="d-flex align-items-baseline px-2">
              <h1>Terrain:</h1>
              <h3 className="px-2">{planet.terrain}</h3>
            </div>
            <div className="d-flex align-items-baseline px-2">
              <h1>Orbital Period:</h1>
              <h3 className="px-2">{planet.orbital_period}</h3>
            </div>
            <div className="d-flex align-items-baseline px-2">
              <h1>Population:</h1>
              <h3 className="px-2">{planet.population}</h3>
            </div>
        </div>
      </div>
    );
  }; 