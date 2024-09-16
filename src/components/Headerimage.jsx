import React from 'react'
import header from "../assets/header.png"
import "./Headerimage.css"

export default function Headerimage() {
  return (
    <div className='header-main'>
      <img src={header} alt="" />
    </div>
  )
}
