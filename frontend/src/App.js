
import { Route, Routes } from 'react-router-dom'

import Login from './pages/Login'
import Home from './pages/Home'
import Restaurant from "./pages/Restaurant"
import Cart from "./pages/Cart"
import Success from "./pages/Success"
import './App.css'

const App = () => {


  /*/
    

  import Cart from './components/Cart'
  import RestaurantItem from './components/RestaurantItem'
  
          <Route exact path="/" component={Home} />
          <Route exact path="/cart" component={Cart} />
  
          /*/

  return (
    <>
      <>


        <Routes>
          <Route exact path="/login" element={<Login />} />
          <Route exact path="/" element={<Home />} />
          <Route exact path="/restaurant/:id" element={<Restaurant />} />
          <Route exact path="/cart" element={<Cart />} />
          <Route exact path="/success" element={<Success />} />

        </Routes>
      </>

    </>
  )
}

export default App
