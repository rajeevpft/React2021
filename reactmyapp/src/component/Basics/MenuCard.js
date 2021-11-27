import React from 'react'

const MenuCard = ( {menuData} ) => {
    console.log(menuData);
    return (
        <>
        {
            <section className="main-card--cointainer">
           { menuData.map((curElem) => 
            {
                const {id,image,name,category,price,Description} = curElem;
                return(
                    <>
                     <div className="card-container">
                     <div className="card">
                     <div className="card-body">
                     <span className="card-number card-circle subtle">{id}</span>
                     <span className="card-author subtle">Breakfast</span>
                     <h2 className="card-title">{name}</h2>
                     <span className="card-description subtle">
                      {Description} 
                     </span>
                     <div className="card-read">Read</div>
                     </div>
                     <img src={image} alt="images" className="card-media" />
                     <span className="card-tag subtle">Order now</span>
                     <span className="card-tag subtle">Price : {price}</span>
                     </div>
                     </div>
                    </>
                );
              })
            }
             </section> 
            }
              </> 
    )
}

export default MenuCard
