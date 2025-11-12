import React, { useEffect, useState } from 'react'
import axios from 'axios';
function Apicalling2() {
    const [RestaurantMenu,setMenu]= useState([])

    useEffect(()=>{
        const API='https://www.swiggy.com/dapi/menu/pl?page-type=REGULAR_MENU&complete-menu=true&lat=27.6054391&lng=77.5945308&restaurantId=112776&catalog_qa=undefined&submitAction=ENTER'
        async function calling(){
            let resp = await axios.get(API)
            // console.log(resp.data.data.cards[1].card.card.gridElements.infoWithStyle.restaurants , "resp");
            setMenu(resp.data.data.cards[4].groupedCard.cardGroupMap.REGULAR.cards[2].card.card.itemCards)
        }
        calling()
    },[])

  return RestaurantMenu;
}

export default Apicalling2;