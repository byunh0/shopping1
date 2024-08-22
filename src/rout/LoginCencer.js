

import React from 'react'
import {Navigate} from 'react-router-dom'
import ProductDetail from '../page/ProductDetail'

const LoginCencer = ({authenticate}) => {
  console.log("authenticate",authenticate)
  return authenticate==true? <ProductDetail/> :<Navigate to="/login"/>;
  
};

export default LoginCencer