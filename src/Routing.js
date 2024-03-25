import React from 'react'
import {Routes, Route} from 'react-router-dom'
import SignIn from './components/Auth/SignIn';
import SingInForgetPassword from './components/Auth/SingInForgetPassword';
import Accounting from './components/EntryPanel/Accounting/Accounting';
import Home from './components/EntryPanel/Home/Home';
import MenuFoodLayout from './components/EntryPanel/MenuFood/MenuFoodLayout';
import ProductsLayout from './components/EntryPanel/MenuFood/Products/ProductsLayout';
import CategoriesLayout from './components/EntryPanel/MenuFood/Categories/CategoriesLayout';
import PrivateRoute from './common/utils/authorization';

export default function Routing() {
  return (
     <div>
        <Routes>
          <Route path="/" exact element={<SignIn/>}/>
          {/* <Route path="/signin-forget-password" exact element={<SingInForgetPassword/>}/> */}
          <Route path="/home" element= {
              <PrivateRoute>
                <Home />
              </PrivateRoute>
            }
          />
          <Route path="/comptabilite" element= {
              <PrivateRoute>
                <Accounting />
              </PrivateRoute>
            }
          />
          <Route path="/products" element= {
              <PrivateRoute>
                <ProductsLayout />
              </PrivateRoute>
            }
          />
          <Route path="/categories" element= {
              <PrivateRoute>
                <CategoriesLayout />
              </PrivateRoute>
            }
          />
          {/* <Route path="/menu-food" exact element={<MenuFoodLayout/>}/> */}
       </Routes>
     </div>
  )      
}
