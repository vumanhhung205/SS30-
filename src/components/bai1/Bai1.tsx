import React from 'react'

export default function Bai1() {
    const handleClick=()=>{
        console.log("clicked");
    }
  return (
    <div>Bai1
        <button onClick={handleClick}>Click</button>
    </div>
  )
}
