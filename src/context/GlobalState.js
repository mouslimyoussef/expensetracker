import React, { createContext, useReducer } from 'react';
import AppReducer from './AppReducer';


//initil state
const initialState = {
    transactions: [
       
        ]
}
//create context


export const GlobalContext=createContext(initialState)


//provider

export const GlobalProvider=({children})=>{

const [state,dispatch]=useReducer(AppReducer,initialState)

//actions
const deleteTransaction=(id)=>{
    dispatch({
        type:'DELETE_TRANSACTION',
        payload:id
    });
}

const addTransaction=(transaction)=>{
    dispatch({
        type:'ADD_TRANSACTION',
        payload:transaction
    });
}
return (<GlobalContext.Provider value={{
    transactions:state.transactions,
    deleteTransaction,
    addTransaction
}}>
    {children}
</GlobalContext.Provider>)
}