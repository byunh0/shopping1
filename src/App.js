import React from 'react'
import { Routes, Route } from 'react-router-dom'
import PageAll from './page/PageAll'
import Login from './page/Login'
import ProductDetail from './page/ProductDetail'
import Navbar from './component/Navbar'

//1.페이지가 3개다 : Home화면, 로그인 페이지, 제품 상세 페이지
//1-1.홈화면에서는 모든 상품들을 볼 수 있다.
//2.Home화면에 로그인 버튼을 누르면 로그인을 할 수 있다.
//3.제품 상세 페이지를 클릭하면 로그인 페이지가 뜬다.
//4.로그인을 했다면 제품 상세 페이지를 확인할 수 있다.
//5.로그인 버튼이 로그인하면 로그아웃으로 바뀌어 있다.
//6.검색도 가능하다
const App = () => {
  return (
    <div>
      <Navbar/>
      <Routes>
        <Route path="/" element={<PageAll/>}/>
        <Route path="/login" element={<Login/>}/>
        <Route path="/productdetail" element={<ProductDetail/>}/>
      </Routes>
    </div>
  )
}

export default App