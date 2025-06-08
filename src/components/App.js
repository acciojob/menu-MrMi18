import React, { useState } from 'react'
import menuData from '../menuData'
import Menu from './Menu'

const App = () => {
    const [data , setData] = useState(menuData);
    const [filterData,setFilterData] = useState(data);
    const filterHandler = (meal) =>{
            setFilterData(() => data.filter(food => food.category===meal));
    }
    console.log(filterData)
  return (
    <div id="main" >
     <h1>Our Menu</h1>
     <button id = "filter-btn" >All</button>
      <button id = "filter-btn-1" onClick={() => filterHandler("Breakfast")} >Breakfast</button>
      <button id = "filter-btn-2" onClick={() => filterHandler("Lunch")} >Lunch</button>
      <button id = "filter-btn-3" onClick={() => filterHandler("Shakes")} >Shakes</button>
      <Menu data= {filterData} category={filterData[0].category} />
    </div>
  )
}

export default App


