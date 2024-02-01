import React from 'react'
import {Routes, Route} from 'react-router-dom'
import SignIn from './components/Auth/SignIn';
import SignInPassword from './components/Auth/SignInPassword';
import SingInForgetPassword from './components/Auth/SingInForgetPassword';

export default function Routing() {
  return (
     <div>
        <Routes>
          <Route path="/" exact element={<SignIn/>}/>
          <Route path="/signin-password" exact element={<SignInPassword/>}/>
          <Route path="/signin-forget-password" exact element={<SingInForgetPassword/>}/>
       </Routes>
     </div>
  )      
}
