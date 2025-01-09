import React, { useState } from 'react'

function RandomNumberGenerator() {
    const [number,setNumber] = useState(0);
    function handleBtnClick(){
        const random = Math.round(Math.random()*1000);
        setNumber(random);
    }
  return (
    <div className='random'>
        <h1>{number}</h1>
       <div > <button onClick={handleBtnClick}>Generate</button>
       <button onClick={()=>setNumber(0)}>Reset</button></div>
    </div>
  )
}

export default RandomNumberGenerator