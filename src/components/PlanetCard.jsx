import React, {useState} from "react";
import useGlobalReducer from "../hooks/useGlobalReducer.jsx";
import { Link } from "react-router-dom";
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faHeart } from '@fortawesome/free-solid-svg-icons';


export const PlanetCard = (props) => {

  const [liked, setLiked] = useState(false);

  const toggleLiked = () => {
    setLiked(!liked);
    if(liked){
      handleFavs();
    }
  };

  const handleFavs = () => {
    store({type:toggle_favorites, payload: props.name})
  };

  const {store, dispatch} =useGlobalReducer()

    return (
      <div className="card bg-dark mx-2" style={{"minWidth": "18rem"}}>
        <img src="..." className="card-img-top" alt="..."/>
        <div className="card-body">
          <h5 className="card-title text-light">{props.name}</h5>
          <div className=" d-flex justify-content-between">
            <Link to={`/PlanetDetails/${props.uid}`} className="btn btn-warning">Learn More</Link>
            <span 
              onClick={toggleLiked}
              style={{ color: liked ? 'red' : 'gray'}} 
              className="icon">
                <FontAwesomeIcon icon={faHeart} />
            </span>
          </div>          
        </div>
      </div>
    );
}; 