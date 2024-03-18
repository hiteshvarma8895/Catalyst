import React from 'react';
import "./Sidebar.scss";

function SideBar({colors,materials,setSelectedFilters}) {
    const handleFilter=(key,value)=>{
        setSelectedFilters(prev=>({...prev,
            [key]:value
        }))
    }
  return (
    <div className='sidebar'>
        <p className='title'>Filter</p>
        <p className='filtertitle'>Colors</p>
        <ul className='filteroption'>
            {colors.map(color=>{return <li key={color.id} onClick={()=>handleFilter('selectedColor',color.name)}>{color.name}</li>})}
        </ul>
        <p className='filtertitle'>Materials</p>
        <ul className='filteroption'>
            {materials.map(material=>{return <li key={material.id} onClick={()=>handleFilter('selectedMaterial',material.name)}>{material.name}</li>})}
        </ul>
    </div>
  )
}

export default SideBar