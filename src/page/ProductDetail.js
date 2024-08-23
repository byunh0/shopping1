import React from 'react'
import {useEffect , useState} from 'react'
import {useParams} from 'react-router-dom'
import {Container,Row,Col} from 'react-bootstrap'
import Form from 'react-bootstrap/Form';
const ProductDetail = () => {
const {id} = useParams();
// 저장해주기
const [product,setProduct]=useState(null);
const getProductDetail=async()=>{
  let url = `http://localhost:5000/products/${id}`
  let response = await fetch(url)
  let data = await response.json()
  setProduct(data);
}
// 우선 api 부르기
useEffect(()=>{
getProductDetail()
},[])
  return (
  <Container>
    <Row>
      {/* 줄 */}
      <Col className="product-img">
       {/* col은 각각의 묶음 */}
      <img src = {product?.img}/>
      </Col>
      <Col>
      <div>{product?.title}</div>
      <div>{product?.price}</div>
      <div>{`${(product?.choice)?"concious choice":""}`}</div>
      <div>
      
      <Form.Select aria-label="Default select example">
      <option>Select Size</option>
              {product?.size?.map((item, index) => (
                <option key={index} value={item}>
                  {item}
                </option>
              ))}
    </Form.Select>

     
      </div>
      </Col>
    </Row>
    </Container>
  )
}

export default ProductDetail