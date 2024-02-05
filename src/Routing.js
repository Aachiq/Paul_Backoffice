import React from 'react'
import {Routes, Route} from 'react-router-dom'
import SignIn from './components/Auth/SignIn';
import SingInForgetPassword from './components/Auth/SingInForgetPassword';
import Home from './components/Auth/Home';

export default function Routing() {
  return (
     <div>
        <Routes>
          <Route path="/" exact element={<SignIn/>}/>
          <Route path="/signin-forget-password" exact element={<SingInForgetPassword/>}/>
          <Route path="/home" exact element={<Home/>}/>
       </Routes>
     </div>
  )      
}
