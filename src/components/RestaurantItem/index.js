import { useEffect, useState, useContext } from 'react'
import { useLocation } from 'react-router-dom'
import Cookies from 'js-cookie'
import Loader from 'react-loader-spinner'
import MainContext from '../../context/MainContext'
import Navbar from '../Navbar'
import Footer from '../Footer'

import './index.css'

const RestaurantItem = props => {
    const location = useLocation()
    const splitPath = location.pathname.split('/')
    const restrauntId = splitPath[2]
    //console.log(restrauntId)
    const { cartList, setCartList } = useContext(MainContext)
    console.log(cartList)

    const [isLoader, setIsLoader] = useState(true)

    const [restaurantPresentItem, setRestaurantPresentItem] = useState({})

    const fetchRestaurantData = async () => {
        const jwtToken = Cookies.get('jwt_token')
        const url = `https://apis.ccbp.in/restaurants-list/${restrauntId}`
        const options = {
            method: 'GET',
            headers: {
                Authorization: `bearer ${jwtToken}`,
            },
        }
        const response = await fetch(url, options)
        const data = await response.json()
        //console.log(data)
        const updatedData = {
            id: data.id,
            costForTwo: data.cost_for_two,
            cuisine: data.cuisine,
            foodItems: data.food_items,
            imageUrl: data.image_url,
            itemsCount: data.items_count,
            location: data.location,
            name: data.name,
            opensAt: data.opens_at,
            rating: data.rating,
            reviewsCount: data.reviews_count,
        }

        //console.log(updatedData)
        setRestaurantPresentItem(updatedData)

        setIsLoader(false)
    }

    useEffect(() => {
        fetchRestaurantData()
    }, [])

    const onLoadingRender = () => {
        return (
            <div className="loader-container">
                <div>
                    <Loader type="TailSpin" color="#F7931E" width={32} height={32} />
                </div>
            </div>
        )
    }

    const onRenderRestaurantItem = item => {
        //console.log(item)
        const newItem = {
            cost: item.cost,
            id: item.id,
            imageUrl: item.image_url,
            name: item.name,
            rating: item.rating,
        }
        const { cost, id, imageUrl, name, rating } = newItem

        const onClickAddToCart = () => {
            console.log('Add cart Button Clicked', id)
            console.log(newItem)
            const cartItem = {
                id: id,
            }
        }

        return (
            <div className="li-item res-item">
                <div className="li-item-part-1">
                    <img src={imageUrl} alt={name} className="li-item-image" />
                </div>
                <div className="li-item-part-2">
                    <h1 className="li-item-heading-new">{name}</h1>
                    <p className="li-item-paragraph-new">₹{cost}.00</p>
                    <div className="ratings-star-con">
                        <img
                            src="https://res.cloudinary.com/dokbp23jt/image/upload/v1770660182/7_Rating_p98sxm.png"
                            alt="start"
                        />
                        <p>{rating}</p>
                    </div>
                    <div>
                        <button
                            type="button"
                            className="add-button"
                            onClick={onClickAddToCart}
                        >
                            Add
                        </button>
                    </div>
                </div>
            </div>
        )
    }

    const onItemRender = () => {
        const {
            imageUrl,
            name,
            cuisine,
            location,
            rating,
            costForTwo,
            foodItems,
            reviewsCount,
        } = restaurantPresentItem
        //console.log(restaurantPresentItem)
        return (
            <div>
                <div className="item-banner-container">
                    <div className="item-banner-container-part-1">
                        <div className="item-banner-image-container">
                            <img
                                src={imageUrl}
                                alt={name}
                                className="item-banner-image-container-image"
                            />
                        </div>
                    </div>
                    <div className="item-banner-container-part-2">
                        <h1 className="part-2-heading">{name}</h1>
                        <p className="part-2-paragraph">{cuisine}</p>
                        <p className="part-2-paragraph">{location}</p>

                        <div className="item-banner-part-2-rating-container">
                            <div className="item-banner-part-2-rating-container-part1">
                                <div className="rating-container">
                                    <img
                                        src="https://res.cloudinary.com/dokbp23jt/image/upload/v1770732461/7_Rating_nmkzrf.png"
                                        alt="7 start"
                                        className="start-icon"
                                    />
                                    <h1 className="rating-heading">{rating}</h1>
                                </div>
                                <div>
                                    <p className="ratings-count">{reviewsCount}+ Ratings</p>
                                </div>
                            </div>
                            <div className="item-banner-part-2-rating-container-part1">
                                <div className="rating-container">
                                    <h1 className="rating-heading">₹ {costForTwo}</h1>
                                </div>
                                <div>
                                    <p className="ratings-count">Cost Per Two</p>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>

                <ul className="restaurants-list-items">
                    {foodItems.map(item => (
                        <li key={item.id}>{onRenderRestaurantItem(item)}</li>
                    ))}
                </ul>
            </div>
        )
    }

    return (
        <>
            <Navbar />
            {isLoader ? onLoadingRender() : onItemRender()}
            <Footer />
        </>
    )
}

export default RestaurantItem
