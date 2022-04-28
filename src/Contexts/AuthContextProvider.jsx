import React, { createContext, useState } from "react";
import { useNavigate } from "react-router-dom";
// import { Box } from "./Navbar.styled.js";

export const AuthContext = createContext();
export default function AuthContextProvider({ children }) {
const [save, setSave] = React.useState(false)
const [rule, setRule] = React.useState([1,2])
const [condition, setCondition] = React.useState([1,2, 3, 4])
const [action, setAction] = React.useState([1])
const addRule = () => { 
   setRule([...rule, 1])
 }
const addCondition = () => { 
   setRule([...condition, 1])
 }
const addAction = () => { 
   setRule([...action, 1])
 }
  return (
    <AuthContext.Provider value={{save, setSave, addRule, rule, addCondition, addAction}}>
      {children}
    </AuthContext.Provider>
  );
}
