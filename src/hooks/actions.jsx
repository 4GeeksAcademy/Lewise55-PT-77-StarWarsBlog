export const getCharacters = async(dispatch, payload) => {
    let response = await fetch("https://www.swapi.tech/api/people")
    let data = await response.json();

    // send dispatch to store
    dispatch({
        type: "add_Character",
        payload: data.results
    });
};

export const getPlanets = async(dispatch, payload) => {
    let response = await fetch("https://www.swapi.tech/api/planets")
    let data = await response.json();

    // send dispatch to store
    dispatch({
        type: "add_Planets",
        payload: data.results
    });
};

export const getStarships = async(dispatch, payload) => {
    let response = await fetch("https://www.swapi.tech/api/starships")
    let data = await response.json();

    // send dispatch to store
    dispatch({
        type: "add_Starships",
        payload: data.results
    });
};
