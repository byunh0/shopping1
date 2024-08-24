import React from 'react'
import {useEffect , useState} from 'react'
import {useParams} from 'react-router-dom'
import {Container,Row,Col} from 'react-bootstrap'
import Form from 'react-bootstrap/Form';
import {Button} from 'react-bootstrap'
const ProductDetail = () => {
const {id} = useParams();
// 저장해주기
const [product,setProduct]=useState(null);
const [num,setnum]=useState(0)
const getProductDetail=async()=>{
  let url = `https://my-json-server.typicode.com/byunh0/shopping1/${id}`
  let response = await fetch(url)
  let data = await response.json()
  setProduct(data);
}
// 우선 api 부르기
useEffect(()=>{
getProductDetail()
},[])

const clickEvent=()=>{
const number =setnum(num+1)
return number;
}
  return (
  <Container>
    <Row className="row-Style">
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
              {product?.size?.map((item) => (
                <option  value={item}>
                  {item}
                </option>
              ))}
    </Form.Select>
      </div>
      <div>
        <div>수량: {num}</div>
      <Button variant="dark" onClick={clickEvent}>추가</Button>
      </div>
      <Button variant="secondary" size="lg" className="button-style">
        주문하기
      </Button>
      </Col>
    </Row>
    </Container>
  )
}

export default ProductDetail