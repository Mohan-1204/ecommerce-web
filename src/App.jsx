// import { useState } from 'react'
// import reactLogo from './assets/react.svg'
// import viteLogo from '/vite.svg'
import './App.css'
import ToDoApps from './Components/ToDoApps'
import Home from "./Components/Home"
import Login from "./Components/Login"
import SignUp from "./Components/SignUp"
import Product from "./Components/Product"
import {BrowserRouter as Router,Routes,Route,Link} from "react-router-dom"
import Productlist from './Components/Productlist'
import Productdetail from './Components/Productdetail'
import '../node_modules/bootstrap/dist/css/bootstrap.min.css'
import NavBar from './Components/NavBar'
import NotFound from './Components/NotFound'
import NewProduct from './Components/NewProduct'
import UpdateProduct from './Components/UpdateProduct'
import Wishlist from './Components/Wishlist'

if (!localStorage.getItem("cart")) {
  localStorage.setItem("cart", JSON.stringify([]))
  
}

// let datafrom = JSON.parse(localStorage.getItem("cart"))
// console.log( datafrom);

// localStorage.removeItem("cart")

function App() {
  // const [count, setCount] = useState(0)

  let uname="Minato"
  return (
    <div className='app'>
      {/* < ToDoApps /> */}
      {/* <Home /> */}
      {/* <Login /> */}
      <Router>
    
        <NavBar/>
        <Routes>
          <Route path='/' element={<Home/>} />
          <Route path='/product' element={<Product />} >
           <Route path='list' element={<Productlist/>}/>
            <Route path='detail' element={<Productdetail/>}/>
          <Route index element={<Productlist/>}/>
          </Route>
          <Route path='/login/:newuser' element={<Login/>} />
          <Route path='/signup' element={<SignUp/>} />
          <Route path='/todo' element={<ToDoApps/>} />
          <Route path='/newproduct' element={<NewProduct/>} />
          <Route path="/update/:id" element={<UpdateProduct/>} />
          <Route path="/wishlist" element={<Wishlist/>} />
          <Route path='*' element={<NotFound/>} />
        </Routes>
      </Router>
    </div>
  );
}


export default App
