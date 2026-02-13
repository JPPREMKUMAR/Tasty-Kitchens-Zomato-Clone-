
import { Route, Routes } from 'react-router-dom'

import Login from './pages/Login'
import Home from './pages/Home'
import Restaurant from "./pages/Restaurant"
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


        </Routes>
      </>

    </>
  )
}

export default App
