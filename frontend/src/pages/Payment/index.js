import Navbar from "../../components/Navbar"

import "./index.css"



const Payment = () => {




    const onRenderPayment = () => {

        return (

            <div className="payment-container">


                <div>
                    Order Summary

                </div>

            </div>
        )
    }

    return (


        <>
            <Navbar />
            {onRenderPayment()}

        </>
    )
}


export default Payment