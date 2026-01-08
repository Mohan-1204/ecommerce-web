import React from 'react'
import { Outlet, useNavigate, useParams } from 'react-router-dom'

const Login = () => {


  let { newuser } = useParams()
  let navigate=useNavigate()
  
  let handleNavigate = () => {
    navigate("/")
  }

  return (

    <div>Login-{newuser}
    <button onClick={handleNavigate}>Move to Home</button> 
    
    </div>
    

   
  )
}

export default Login