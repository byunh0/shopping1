import React from 'react'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faUser } from "@fortawesome/free-solid-svg-icons";
import { faMagnifyingGlass } from "@fortawesome/free-solid-svg-icons";
import {useNavigate}from "react-router-dom"
import {useState} from "react"
import "../App.css";
const Navbar = ({authenticate , setAuthenticate}) => {
    const menu =["여성","Divided","남성","신생아/유아","아동","H&M HOME","Sale","지속가능성"]
    const navigate = useNavigate()
    const clickLogin=()=>{
     navigate('/login')
    }
    const search=(event)=>{
      //우리가 읽고자하는 값이 event안에 있음.
    if(event.key==="Enter"){
      let keyword = event.target.value
      //이벤트안에 우리가 원하는 value값 있음.//서치하는 추가 조건=쿼리
      console.log ("keyword",keyword)

      //URL바꿔준다.
      navigate(`/?q=${keyword}`)
    }
    }
    const clicktitle=()=>{
      navigate('/')
    }
   
  return (
    <div>
    <div className="first-nav">
   <div>
    {authenticate?(
      <div onClick={()=>setAuthenticate(false)}>
         <FontAwesomeIcon icon={faUser} />
         <span style={{ cursor: "pointer" }}>로그아웃</span>
         </div>
    ):(
      <div onClick={()=>navigate("/login")}>
        <FontAwesomeIcon icon={faUser} />
         <span style={{ cursor: "pointer" }}>로그인</span>
         </div>

    )}
   </div>
    </div>
    <div className="second-nav"> 
        <img src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSAYHegUQHJC2L1TEfXRiEtKuVCN6l0lKGAebFxx7-V-njhjl8Atx3q4NxgZey-T1isJPA&usqp=CAU" width={180} height={80} onClick={clicktitle}/>
    </div>
    <div className="third-nav">
    {menu.map((item)=>{return <span className="item-style">{item}</span>})}
    <div className="inputbox-nav">
        <FontAwesomeIcon icon={faMagnifyingGlass} />
        <input type="text" placeholder="검색"  onKeyPress={(event)=>search(event)}  className="between-turm input-design"/>
        </div>
    </div>
    </div>
  )
}

export default Navbar