import React, { useContext, useState } from "react";
import axios from "axios";


const BASE_URL = "http://localhost:5000/api/v1/";

const globalContext =  React.createContext();

export const GlobalProvider = ({children}) => {

    const [incomes , setIncome ] = useState([]);
    const [expense, setExpense ] = useState([]);
    const [error, setError ] = useState(null);

    const addIncome = async (income) =>{
        const response = await axios.post(`${BASE_URL}add_income`,income)
        .catch((err)=>{
            setError(err.response.data.message);
        })
        getIncome();
    }

    const getIncome = async() => {
        const response = await axios.get(`${BASE_URL}get_incomes`);
        setIncome(response.data);
        
    }

    const deleteIncome = async (id) => {
        const response = await axios.delete(`${BASE_URL}delete_income/${id}`);
        getIncome();
    }


    const totalIncome = () => {
        let totalIncome = 0;
        incomes.forEach((income) => {
            totalIncome += income.amount;
        })

        return totalIncome;
    }

    return(
        <globalContext.Provider value={{addIncome , getIncome , incomes,deleteIncome , totalIncome}}>
            {children}
        </globalContext.Provider>
    )
}


export const useGlobalContext = () =>{
    return useContext(globalContext);
}