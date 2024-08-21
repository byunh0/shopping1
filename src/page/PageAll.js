import React from 'react'
import {useEffect,useState} from 'react'
import ProductCard from "../component/ProductCard"
import 'bootstrap/dist/css/bootstrap.min.css';
import {Container,Row,Col} from 'react-bootstrap';
const PageAll = () => {
const[choseProduct,setChoseProduct]=useState([])
const getProduct=async()=>{
    let url = "http://localhost:5000/products"
    let response = await fetch(url)
    let data = await response.json()
    setChoseProduct(data);
}
useEffect(()=>{
    getProduct();
},[])
  return (
    <div>
    <Container>
        <Row> 
            <Col lg={3}> <ProductCard/> </Col>
            <Col lg={3}> <ProductCard/> </Col>
            <Col lg={3}> <ProductCard/> </Col>
            <Col lg={3}> <ProductCard/> </Col>
        </Row>
    </Container>
    </div>

  )
}

export default PageAll