import React from 'react'
import {useEffect,useState} from 'react'
import ProductCard from "../component/ProductCard"
import 'bootstrap/dist/css/bootstrap.min.css';
import {Container,Row,Col} from 'react-bootstrap';
import {Navigate}from 'react-router-dom'
import ProductDetail from './ProductDetail'
const PageAll = ({authenticate}) => {
const[choseProduct,setChoseProduct]=useState([])
const getProduct=async()=>{
    let url = "http://localhost:5000/products"
    let response = await fetch(url)
    let data = await response.json()
    console.log(data);
    setChoseProduct(data);
   
}



useEffect(()=>{
    getProduct();
},[])


  return (
    <div>
    <Container>
        <Row> 
           {choseProduct.map((menu)=>{return <Col lg={3} > <ProductCard item={menu}/> </Col>})}
           
        </Row>
    </Container>
    </div>

  )
}

export default PageAll