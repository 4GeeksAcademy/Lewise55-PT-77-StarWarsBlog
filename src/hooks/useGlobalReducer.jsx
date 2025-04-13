// Import necessary hooks and functions from React.
import { useContext, useReducer, createContext } from "react";
import storeReducer, { initialStore } from "../store"  // Import the reducer and the initial state.
import { getCharacters, getPlanets, getStarships } from "./actions";

// Create a context to hold the global state of the application
// We will call this global state the "store" to avoid confusion while using local states
const StoreContext = createContext()

// Define a provider component that encapsulates the store and warps it in a context provider to 
// broadcast the information throught all the app pages and components.
export function StoreProvider({ children }) {
    // Initialize reducer with the initial state.
    const [store, dispatch] = useReducer(storeReducer, initialStore())
    const actions = {
        getCharacters: (payload) => getCharacters(dispatch, payload),
        getPlanets: (payload) => getPlanets(dispatch, payload),
        getStarships: (payload) => getStarships(dispatch, payload)
    }
    // Provide the store and dispatch method to all child components.
    return <StoreContext.Provider value={{ store, dispatch, ...actions }}>
        {children}
    </StoreContext.Provider>
}

// Custom hook to access the global state and dispatch function.
export default function useGlobalReducer() {
    const { dispatch, store, getCharacters, getPlanets, getStarships } = useContext(StoreContext)
    return { dispatch, store, getCharacters, getPlanets, getStarships };
}