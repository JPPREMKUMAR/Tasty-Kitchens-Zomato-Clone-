
import { useContext } from "react"
import MainContext from "../../context/MainContext"

import Navbar from "../../components/Navbar"
import Footer from "../../components/Footer"
import "./index.css"



const Payment = () => {



    const { cartList, totalCartPrice, navigate } = useContext(MainContext)
    // console.log(cartList)


    const onRenderPayment = () => {

        return (

            <div className="payment-container">


                <div className="order-summary-container">

                    <h1 className="order-summary-heading">
                        Order Summary
                    </h1>
                    <ul className="order-list-of-items">
                        {
                            cartList.map((item) => (
                                <li key={item.id}  >

                                    <div className="order-item">

                                        <p className="item-text">{item.name} <span className="text-span">x{item.quantity}</span> </p>



                                        <h1 className="cart-price-text">₹ {item.cost * item.quantity}</h1>
                                    </div>

                                </li>
                            ))
                        }
                        <hr className="hr-cart" />

                        <div className="cart-order-price-container">
                            <h1 className="cart-price-text">Total :  </h1>
                            <h1 className="cart-price-text-total">₹ {totalCartPrice}</h1>
                        </div>

                    </ul>





                </div>

                <div className="payment-details-container">


                    <h1 className="order-summary-heading">
                        Select Payment Method
                    </h1>
                    <div>

                        <div className="option-container">
                            <input type="radio" id="COD" name="payment" defaultValue={true} />
                            <label htmlFor="COD" className="item-text">Cash on Delivery</label>

                        </div>

                        <div className="option-container">
                            <input type="radio" id="UPI" name="payment" />
                            <label htmlFor="UPI" className="item-text">UPI</label>

                        </div>


                    </div>




                </div>


                <div className="cart-order-button-container">
                    <button type="button" className="place-order-button" onClick={() => navigate("/success")}>
                        Pay Now ₹ {totalCartPrice}
                    </button>
                </div>

            </div>
        )
    }

    return (


        <>
            <Navbar />
            {onRenderPayment()}
            <Footer />

        </>
    )
}


export default Payment