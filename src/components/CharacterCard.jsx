import React, {useState} from "react";
import { useParams } from "react-router-dom";
import useGlobalReducer from "../hooks/useGlobalReducer.jsx";
import { Link } from "react-router-dom";
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faHeart } from '@fortawesome/free-solid-svg-icons';


export const CharacterCard = (props) => {

  const [liked, setLiked] = useState(false);

  const toggleLiked = (name) => {
    setLiked(!liked);
    // if(liked){
      dispatch({type:'toggle_favorites', payload: name})
    // }
  };

  

  const {store, dispatch } =useGlobalReducer()

    return (
      <div className="card bg-dark mx-2" style={{"minWidth": "18rem"}}>
        <img src="https://media.timeout.com/images/105863223/750/562/image.jpg" className="card-img-top" alt="..."/>
        <div className="card-body text-center">
          <h5 className="card-title text-light">{props.name}</h5>
          <div className=" d-flex justify-content-between">            
            <Link to={`/CharacterDetails/${props.uid}`} className="btn btn-warning">Learn More</Link>
              <span 
                onClick={() => toggleLiked(props.name)}
                style={{ color: liked ? 'red' : 'gray'}} 
                className="icon">
                  <FontAwesomeIcon icon={faHeart} />
            </span>
          </div>
          
        </div>
      </div>
    );
}; 