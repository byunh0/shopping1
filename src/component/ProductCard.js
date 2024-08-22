import React from 'react'

const ProductCard = ({item}) => {
  return (
    <div>
        <div className="productCard-style">
        <img src={item?.img} width={350} />
        <div>{`${(item?.choice)?"concious choice":""}`}</div>
        <div>{item?.title}</div>
        <div>{item?.price}</div>
        <div>신제품</div>
        </div>
    </div>
  )
}

export default ProductCard