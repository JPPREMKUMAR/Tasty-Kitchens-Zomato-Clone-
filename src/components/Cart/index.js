import Navbar from '../Navbar'
import './index.css'

const Cart = () => {
    const emptyCart = () => {
        return (
            <div>
                <Navbar />
                <div className="empty-container">
                    <div>
                        <img
                            src="https://res.cloudinary.com/dokbp23jt/image/upload/v1770654195/cooking_1_do1zho.png"
                            alt="cart"
                        />
                    </div>
                    <h1 className="empty-heading">No Orders Yet!</h1>
                    <p className="empty-title">
                        Your cart is empty. Add something from the menu.
                    </p>
                    <div>
                        <button className="empty-button" type="button">
                            Order
                        </button>
                    </div>
                </div>
            </div>
        )
    }

    return <>{emptyCart()}</>
}

export default Cart
