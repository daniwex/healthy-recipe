import React from 'react'
import "../globals.css";

export default function Button({content, width, height, onClick}) {
  return (
    <button onClick={onClick} className={`p-2 text-white w-full text-sm rounded-md`} style={{width: width + 'px', height: height + 'px'}}>
      <span className='font-semibold'>{content}</span> 
    </button>
  )
}
