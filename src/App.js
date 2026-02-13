
import { Switch, Route } from 'react-router-dom'
import { MainContextProvider } from "./context/MainContext"
import Login from './components/Login'

import Home from './components/Home'
import Cart from './components/Cart'
import RestaurantItem from './components/RestaurantItem'
import { MainContextProvider } from './context/MainContext'
import './App.css'

const App = () => {


  return (
    <MainContextProvider>
      <Switch>
        <Route exact path="/login" component={Login} />
        <Route exact path="/" component={Home} />
        <Route exact path="/cart" component={Cart} />
        <Route exact path="/restaurant/:id" component={RestaurantItem} />
      </Switch>

    </MainContextProvider>
  )
}

export default App
