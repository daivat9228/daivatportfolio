// src/Context.js
import { createContext, useReducer } from "react";

export const ThemeContext = createContext();

const initialState = { darkMode: false };

const themeReducer = (state, action) => {
  switch (action.type) {
    case "toggle":
      return { darkMode: !state.darkMode };
    default:
      return state;
  }
};

export const ThemeProvider = ({ children }) => {
  const [state, dispatch] = useReducer(themeReducer, initialState);
  return (
    <ThemeContext.Provider value={{ state, dispatch }}>
      {children}
    </ThemeContext.Provider>
  );
};




// import { createContext,useReducer } from "react";

// export const themeContext = createContext();

// const initialState = {darkMode: false};

// const  themeReducer = (state, action) => {
//     switch (action.type){
//         case "toggle":
//             return {darkMode: !state.darkMode};
//             default: 
//             return state;
//     }
// };

// export const ThemeProvider = (props) => {
//     const [state,dispatch]= useReducer(themeReducer, initialState);
//     return (
//         <themeContext.Provider value={{state,dispatch}}>{props.children}</themeContext.Provider>
//     )
// }
