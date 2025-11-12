import React, { useEffect, useState } from 'react'
import MenuCard from './MenuCard'
import Apicalling2 from './Apicalling2'

function RestaurantBody() {
  const RestaurantMenu = Apicalling2();
  const [allMenuData,setAllMenuData] = useState(RestaurantMenu);

//   const [isClicked1 , setIsClicked1] = useState(false);
//   const [isClicked2 , setIsClicked2] = useState(false);

  useEffect(()=>{
    if(RestaurantMenu && RestaurantMenu.length){
      setAllMenuData(RestaurantMenu);
    }
  },[RestaurantMenu])


// function handleTopRest(RestaurantMenu){
//   console.log("hi");
  
//   setAllRestData(RestaurantMenu.filter((rest)=>rest.info.avgRating>4.2))
//   setIsClicked1(true);
//   setIsClicked2(false);
// }
// function handleReset(RestaurantMenu){
//   console.log("hi");
//   setAllRestData(RestaurantMenu)
//   setIsClicked1(false);
//   setIsClicked2(true);
// }

  return (
    <div className='m-12'>
        <h1 className='text-xl font-bold'>Restaurants with online food delivery in Aligarh</h1>
        {/* <button onClick={()=>handleTopRest(allRestaurants)}  className={isClicked1?'bg-amber-200 border rounded-3xl m-4 p-4 text-2xl':'border rounded-3xl m-4 p-4 text-2xl'}>Rating 4.2+</button>
        <button onClick={()=>handleReset(allRestaurants)} className={isClicked2?'bg-amber-200 border rounded-3xl m-4 p-4 text-2xl':'border rounded-3xl m-4 p-4 text-2xl'}>Reset</button> */}
        {/* <div>
          <Search allRestaurants={allRestaurants} setAllRestData={setAllRestData}/>
        </div> */}
        <div className='flex flex-wrap w-10/12 m-auto'>
            {
              allMenuData.map((Menu)=>{
                return(
                  <MenuCard Menu={Menu}/>
                )
              })
            }
        </div>
    </div>
  )
}

export default RestaurantBody;