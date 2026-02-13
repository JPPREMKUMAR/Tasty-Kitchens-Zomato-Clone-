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

    const newCartItem = (item) => {
        console.log(item)
        setCartList([...cartList, item])
    }

    useEffect(() => {
        const newList = JSON.parse(localStorage.getItem("cartData")) || []
        // console.log(newList, "local Storage list")
        setCartList(newList)

    }, [])

    useEffect(() => {
        console.log("cart list updated")
        if (cartList.length > 0) {
            return localStorage.setItem("cartData", JSON.stringify(cartList))
        }


    }, [cartList])



    const onIncrementQuantity = (newItem) => {
        //console.log(newItem)
        const { quantity, id, cost, imageUrl, name, rating } = newItem
        const updatedItem = {
            quantity: quantity + 1, id, cost, imageUrl, name, rating
        }
        //console.log(updatedItem)
        const filterList = cartList.filter((val) => val.id !== newItem.id)
        //console.log(filterList)
        const updateCartList = [...filterList, updatedItem]
        //console.log(updateCartList)
        localStorage.setItem("cartData", JSON.stringify(updateCartList))
        setCartList(updateCartList)
    }

    const onDecrementQunatity = (newItem) => {
        const { quantity, id, cost, imageUrl, name, rating } = newItem
        if (quantity !== 1) {
            const updatedItem = {
                quantity: quantity - 1, id, cost, imageUrl, name, rating
            }
            //console.log(updatedItem)
            const filterList = cartList.filter((val) => val.id !== newItem.id)
            //console.log(filterList)
            const updateCartList = [...filterList, updatedItem]
            //console.log(updateCartList)
            localStorage.setItem("cartData", JSON.stringify(updateCartList))
            setCartList(updateCartList)
        }


    }


    return (

        <MainContext.Provider value={{
            name: "premkumar",
            sortByOptions,
            navigate,
            cartList,
            newCartItem,
            onIncrementQuantity,
            onDecrementQunatity
        }}>

            {props.children}

        </MainContext.Provider>
    )
}


export default MainContext



