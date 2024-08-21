import React from 'react'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faUser } from "@fortawesome/free-solid-svg-icons";
import { faMagnifyingGlass } from "@fortawesome/free-solid-svg-icons";
import "../App.css";
const Navbar = () => {
    const menu =["여성","Divided","남성","신생아/유아","아동","H&M HOME","Sale","지속가능성"]
  return (
    <div>
    <div className="first-nav">
    <FontAwesomeIcon icon={faUser}/>
    <span className="between-turm">로그인</span>
    </div>
    <div className="second-nav"> 
        <img src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSAYHegUQHJC2L1TEfXRiEtKuVCN6l0lKGAebFxx7-V-njhjl8Atx3q4NxgZey-T1isJPA&usqp=CAU" width={180} hieght={80}/>
    </div>
    <div className="third-nav">
    {menu.map((item)=>{return <span className="item-style">{item}</span>})}
    <div className="inputbox-nav">
        <FontAwesomeIcon icon={faMagnifyingGlass} />
        <input type="text" value="검색" maxlength="10" className="between-turm input-design"/>
        </div>
    </div>
    </div>
  )
}

export default Navbar