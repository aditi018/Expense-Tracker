import React, { useContext, useState } from "react";
import axios from "axios";


const BASE_URL = "http://localhost:5000/api/v1/";

const globalContext =  React.createContext();

export const GlobalProvider = ({children}) => {

    const [income , setIncome ] = useState([]);
    const [expense, setExpense ] = useState([]);
    const [error, setError ] = useState(null);

    const addIncome = async (income) =>{
        const response = await axios.post(`${BASE_URL}add_income`,income)
        .catch((err)=>{
            setError(err.response.data.message);
        })
    }

    return(
        <globalContext.Provider value={{addIncome}}>
            {children}
        </globalContext.Provider>
    )
}


export const useGlobalContext = () =>{
    return useContext(globalContext);
}