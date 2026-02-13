import { useState } from 'react'
import { Link } from 'react-router-dom'
import './index.css'

const Navbar = () => {
    const [isMenu, setIsMenu] = useState(false)

    const onClickMenu = () => {
        setIsMenu(!isMenu)
    }
    return (
        <div>
            <div className="navbar-card">
                <Link to="/" className="navbar-part-1">
                    <img
                        src="https://res.cloudinary.com/dokbp23jt/image/upload/v1770647579/Frame_274_kfajmp.png"
                        alt="website logo"
                        className="navbar-logo"
                    />
                    <h1 className="navbar-title">Tasty Kitchens</h1>
                </Link>

                <div className="navbar-part-2">
                    <button
                        type="button"
                        className="navbar-menu-button"
                        onClick={onClickMenu}
                    >
                        <img
                            src="https://res.cloudinary.com/dokbp23jt/image/upload/v1770650878/menu_fugbrc.png"
                            alt="menu"
                            className="navbar-menu"
                        />
                    </button>
                </div>
                <div className="navbar-part-2-md">
                    <div className="navbar-links-container">
                        <div className="navbar-link-container">
                            <Link to="/" className="navbar-link">
                                Home
                            </Link>
                        </div>
                        <div className="navbar-link-container">
                            <Link to="/cart" className="navbar-link">
                                Cart
                            </Link>
                        </div>
                        <button type="button" className="navbar-logout-button">
                            Logout
                        </button>
                    </div>
                </div>
            </div>

            {isMenu && (
                <div className="navbar-menu-sm">
                    <div className="navbar-part-2-sm">
                        <div className="navbar-links-container">
                            <div className="navbar-link-container">
                                <Link to="/" className="navbar-link">
                                    Home
                                </Link>
                            </div>
                            <div className="navbar-link-container">
                                <Link to="/cart" className="navbar-link">
                                    Cart
                                </Link>
                            </div>
                            <button type="button" className="navbar-logout-button">
                                Logout
                            </button>
                        </div>
                    </div>
                    <div className="navbar-cross-container">
                        <button
                            type="button"
                            className="navbar-menu-button"
                            onClick={onClickMenu}
                        >
                            <img
                                src="https://res.cloudinary.com/dokbp23jt/image/upload/v1770652554/Solid_md9hqj.png"
                                alt="close"
                                className="navbar-menu"
                            />
                        </button>
                    </div>
                </div>
            )}
        </div>
    )
}

export default Navbar
