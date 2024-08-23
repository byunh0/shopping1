import React from 'react'
import {useEffect,useState} from 'react'
import ProductCard from "../component/ProductCard"
import 'bootstrap/dist/css/bootstrap.min.css';
import {Container,Row,Col} from 'react-bootstrap';
import {Navigate}from 'react-router-dom'
import ProductDetail from './ProductDetail'
import {useSearchParams} from "react-router-dom";
const PageAll = ({authenticate}) => {
const[choseProduct,setChoseProduct]=useState([])
const getProduct=async()=>{
  let searchQuery=query.get('q')||"";
  console.log("쿼리 값은?",searchQuery);
    let url = `http://localhost:5000/products?q=${searchQuery}`
    let response = await fetch(url)
    let data = await response.json()
   
    setChoseProduct(data);
   
}

const [query,setQuery]=useSearchParams();


//useEffect는 [] 안에 값이 없으면 딱 한 번만 렌더링 됨.따라서 쿼리값이 바뀔때마다 렌더링 해주려면 [query]
useEffect(()=>{
    getProduct();
},[query])
//쿼리를 유심히 봐주세요.


  return (
    <div className="pageAll-box">
    <Container>
      
        <Row> 
        
           {choseProduct.map((menu)=>{return <Col lg={3} > <ProductCard item={menu}/> </Col>})}
           
        </Row>
       
    </Container>
    </div>

  )
}

export default PageAll