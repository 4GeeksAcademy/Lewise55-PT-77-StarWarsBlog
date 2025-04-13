export const initialStore=()=>{
  return{
    message: null,
    todos: [
      {
        id: 1,
        title: "Make the bed",
        background: null,
      },
      {
        id: 2,
        title: "Do my homework",
        background: null,
      }
    ],
    characters: [],
    planets: [],
    starships: [],
    favorites: []
  }

}

export default function storeReducer(store, action = {}) {
  switch(action.type){
    case 'add_task':

      const { id,  color } = action.payload

      return {
        ...store,
        todos: store.todos.map((todo) => (todo.id === id ? { ...todo, background: color } : todo))
      };

    case 'add_Character':

      return {
        ...store,
        characters: action.payload
      };

    case 'add_Planets':

      return {
        ...store,
        planets: action.payload
      };

    case 'add_Starshis':

      return {
        ...store,
        starships: action.payload
      };

    case 'toggle_favorites':
      let favs = store.favorites;
      if(favs.includes(action.payload)) {
        //filter the favs off the favorites array
        favs = favs.filter((fav, index) => fav.name !== action.payload);
      }else {
        //add favs to the favorites array
        favs = [...favs, action.payload];
      }

      return {
        ...store,
        favorites: favs
      };
      

      throw Error('Unknown action.');
  }    
}
