import { Component, useState, } from 'react'
import { Redirect } from 'react-router-dom'
import Cookies from 'js-cookie'

import './index.css'

class Login extends Component {
    state = {
        username: '',
        password: '',
        errorMessage: '',
    }
    setUsername = e => {
        this.setState({ username: e.target.value })
    }

    setPassword = e => {
        this.setState({ password: e.target.value })
    }

    onSubmitHandler = async e => {
        e.preventDefault()

        const url = 'https://apis.ccbp.in/login'
        const { username, password, errorMessage } = this.state
        const userDetails = {
            username,
            password,
        }
        const options = {
            method: 'POST',
            body: JSON.stringify(userDetails),
        }

        const response = await fetch(url, options)
        const data = await response.json()

        if (response.ok) {
            console.log(data)
            const jwtToken = data.jwt_token
            console.log(jwtToken)
            Cookies.set('jwt_token', jwtToken, { expires: 30 })
            const { history } = this.props
            history.replace('/')
            this.setState({ errorMessage: '' })
        } else {
            this.setState({ errorMessage: data.error_msg })
        }
    }

    render() {
        const { username, password, errorMessage } = this.state

        const jwtToken = Cookies.get('jwt_token')
        if (jwtToken !== undefined) {
            return <Redirect to="/" />
        }
        return (
            <div className="login-container">
                <div className="login-part-1">
                    <img
                        src="https://res.cloudinary.com/dokbp23jt/image/upload/v1770645221/ceff20e8367d1981f2a409a617ac848670d29c7e_z2nrk2.jpg"
                        alt="website login"
                        className="login-part-1-image"
                    />
                </div>
                <div className="login-part-2">
                    <form className="login-card-sm" onSubmit={this.onSubmitHandler}>
                        <div className="login-logo-container">
                            <div>
                                <img
                                    src="https://res.cloudinary.com/dokbp23jt/image/upload/v1770647579/Frame_274_kfajmp.png"
                                    alt="website logo"
                                    className="login-logo"
                                />
                            </div>
                            <h1 className="logo-name">Tasty Kitchens</h1>
                        </div>
                        <h1 className="login-heading">Login</h1>

                        <div className="login-input-container">
                            <label htmlFor="username" className="login-username">
                                USERNAME
                            </label>
                            <div className="input-container">
                                <input
                                    type="text"
                                    id="username"
                                    className="input-element"
                                    value={username}
                                    onChange={this.setUsername}
                                />
                            </div>
                        </div>
                        <div className="login-input-container">
                            <label htmlFor="password" className="login-username">
                                PASSWORD
                            </label>
                            <div className="input-container">
                                <input
                                    type="password"
                                    id="password"
                                    className="input-element"
                                    value={password}
                                    onChange={this.setPassword}
                                />
                            </div>
                        </div>

                        {errorMessage.length !== 0 && (
                            <p className="login-error-message">{errorMessage}</p>
                        )}

                        <div className="login-button-container">
                            <button type="submit" className="login-button">
                                Login
                            </button>
                        </div>
                    </form>
                </div>
            </div>
        )
    }
}
/*/

const Login = () => {


    useEffect(() => {
        const jwtToken = Cookies.get('jwt_token')
        if (jwtToken !== undefined) {
            return navigate("/")
        }

    })

    return (

        <div className="login-container">
            <div className="login-part-1">
                <img
                    src="https://res.cloudinary.com/dokbp23jt/image/upload/v1770645221/ceff20e8367d1981f2a409a617ac848670d29c7e_z2nrk2.jpg"
                    alt="website login"
                    className="login-part-1-image"
                />
            </div>
            <div className="login-part-2">
                <form className="login-card-sm" onSubmit={this.onSubmitHandler}>
                    <div className="login-logo-container">
                        <div>
                            <img
                                src="https://res.cloudinary.com/dokbp23jt/image/upload/v1770647579/Frame_274_kfajmp.png"
                                alt="website logo"
                                className="login-logo"
                            />
                        </div>
                        <h1 className="logo-name">Tasty Kitchens</h1>
                    </div>
                    <h1 className="login-heading">Login</h1>

                    <div className="login-input-container">
                        <label htmlFor="username" className="login-username">
                            USERNAME
                        </label>
                        <div className="input-container">
                            <input
                                type="text"
                                id="username"
                                className="input-element"
                                value={username}
                                onChange={this.setUsername}
                            />
                        </div>
                    </div>
                    <div className="login-input-container">
                        <label htmlFor="password" className="login-username">
                            PASSWORD
                        </label>
                        <div className="input-container">
                            <input
                                type="password"
                                id="password"
                                className="input-element"
                                value={password}
                                onChange={this.setPassword}
                            />
                        </div>
                    </div>

                    {errorMessage.length !== 0 && (
                        <p className="login-error-message">{errorMessage}</p>
                    )}

                    <div className="login-button-container">
                        <button type="submit" className="login-button">
                            Login
                        </button>
                    </div>
                </form>
            </div>
        </div>

    )
}
/*/

export default Login
