import React from 'react'

const Navbar = ({filterItem,menuList}) => {
    return (
        <>
         <nav className="navbar">
         <div className="btn-group"></div>
         {
             menuList.map((curElem)=>{
                 return (
                     <>
                       <button className="btn-group__item" onClick={()=>filterItem(curElem)} >{curElem}</button>
                     </>
                 )
             })
         }
        </nav>
        </>
    )
}

export default Navbar
