import React, { useContext, useState } from "react";
import axios from "axios";


const BASE_URL = "http://localhost:5000/api/v1/";

const globalContext =  React.createContext();

export const GlobalProvider = ({children}) => {

    const [incomes , setIncome ] = useState([]);
    const [expenses, setExpense ] = useState([]);
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


    //calculate Expenses

    const addExpense = async(expense) => {
        const response = await axios.post(`${BASE_URL}add_expense`,expense)
        .catch((err) => {
            setError(err.response.data.message);
        })
        getExpense();
    }

    const getExpense = async () => {
        const response = await axios.get(`${BASE_URL}get_expenses`);
        setExpense(response.data);
    }

    const deleteExpense = (id) => {
        const response = axios.delete(`${BASE_URL}delete_expense/${id}`);
        getExpense();
    }

    const totalExpense = () => {
        let totalExpense = 0;
        expenses.forEach((expense) => {
            totalExpense += expense.amount;
        })
        return totalExpense;
    }

    return(
        <globalContext.Provider value={{addIncome , getIncome , incomes,deleteIncome , totalIncome ,addExpense, getExpense,deleteExpense , expenses, totalExpense}}>
            {children}
        </globalContext.Provider>
    )
}


export const useGlobalContext = () =>{
    return useContext(globalContext);
}