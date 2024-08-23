import React from 'react'
import {useNavigate} from "react-router-dom"
const ProductCard = ({item}) => {
    const navigate=useNavigate()
    const showDetail=()=>{
        navigate(`/product/${item.id}`)
    }
  return (
    <div onClick={showDetail} className="productcard-box">
        <div className="productCard-style" >
        <img src={item?.img} width={350} className="productcard-img"/>
        <div>{`${(item?.choice)?"concious choice":""}`}</div>
        <div>{item?.title}</div>
        <div>{item?.price}</div>
        <div>{`${(item?.new)?"신제품":""}`}</div>
        </div>
    </div>
  )
}

export default ProductCard