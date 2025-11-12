import React, { useState } from 'react'

function Search({allRestaurants,setAllRestData}) {
    
    function handleSearch(serachedText){
        setAllRestData(allRestaurants.filter(item=>item.info.name.toUpperCase().includes(serachedText.toUpperCase())))
    }

  return (
    <div>
        <input onChange={(e)=>handleSearch(e.target.value)} type="text" />
    </div>
  )
}

export default Search