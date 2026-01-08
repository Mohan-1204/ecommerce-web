import React, { useEffect, useState } from 'react'
import { Link, Outlet } from 'react-router-dom'
import Button from 'react-bootstrap/Button';
import Productlist from '../../../ep-15-fake-server/src/Components/Productlist';


const Product = () => {


  

  return (
    <div>
      
      {/* <Productlist/> */}
      <Outlet/>
    </div>
  )
}

export default Product

