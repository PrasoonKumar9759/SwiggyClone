import React from 'react'
import {useParams} from 'react-router-dom'

function RestaurantDatails() {
    let {id} = useParams();
    console.log(id , "id");
    
  return (
    <div>RestaurantDatails</div>
  )
}

export default RestaurantDatails