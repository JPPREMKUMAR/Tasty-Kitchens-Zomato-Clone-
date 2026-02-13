import React, { useState, useEffect } from 'react'
import { useNavigate } from "react-router-dom"

const MainContext = React.createContext({ sortByOptions: [] })




export const MainContextProvider = (props) => {


    const sortByOptions = [
        {
            id: 0,
            displayText: 'Highest',
            value: 'Highest',
        },
        {
            id: 2,
            displayText: 'Lowest',
            value: 'Lowest',
        },
    ]


    const navigate = useNavigate()

    const [cartList, setCartList] = useState([])


    return (

        <MainContext.Provider value={{ name: "premkumar", sortByOptions, navigate, cartList }}>

            {props.children}

        </MainContext.Provider>
    )
}


export default MainContext



