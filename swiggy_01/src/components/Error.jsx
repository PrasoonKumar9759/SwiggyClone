import React from 'react'
import { useRouteError } from 'react-router-dom'

function Error() {

    function Error(){
        const err = useRouteError();
        console.log(err , "err");
        
    }
  return (
    <div>
        <h1>ooPS!</h1>
        {/* <h1></h1> */}
    </div>
  )
}

export default Error