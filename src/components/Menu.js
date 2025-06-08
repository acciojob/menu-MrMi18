import React, { useState } from 'react'

const Menu = ({data}) => {
    // const [food , setFood] = useState(data);
        
  return (
    <div>
        {
            data.map((fd) =>{
                return( <div key={fd.id} data-test-id = {"menu-item-"+fd.category.toLowerCase()}>
                    <img src={fd.image}></img>
                   <h3>{fd.name}</h3>
                   <p>{fd.category}</p>
                   <h4>{fd.price}</h4>
                </div>)
            })
        }
    </div>
  )
}

export default Menu