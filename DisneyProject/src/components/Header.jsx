import React, { useState } from 'react'
import logo from "../assets/logo.png"
import {HiHome, HiMagnifyingGlass,HiStar,HiPlayCircle,HiTv} from 'react-icons/hi2'
import {HiPlus,HiDotsVertical} from 'react-icons/hi'
import HeaderItem from './HeaderItem.jsx'

function Header() {
  const [toggle,setToggle] =useState(false)
    const menu =[{
name: 'HOME',
icon:HiHome},
{
    name: 'SEARCH',
    icon: HiMagnifyingGlass},
    {
      name: 'WATCHLIST',
      icon: HiPlus},
      
    {
        name: 'ORIGINALS',
        icon: HiStar},
        {
            name: 'MOVIES',
            icon: HiPlayCircle},
            {
                name: 'SERIES',
                icon: HiTv }
    ]
  return (<div className='flex items-center  p-5 m-0 '>
    <img src ={logo} className='w-[100px] md:w-[130px] object-cover'/>

    <div className = 'hidden md:flex gap-8 pl-10'>
    {menu.map((item) =>(<HeaderItem name ={item.name} Icon={item.icon}/>))}</div>
    
    
    <div className = "flex md:hidden gap-8 pl-10">
    {menu.map((item,index) => index <3 &&(<HeaderItem name ={""} Icon={item.icon}/>))}</div>


   <div className = "md:hidden  gap-8  pl-10" onClick={()=>setToggle(!toggle)}>
   {<HeaderItem name ={" "} Icon={HiDotsVertical}/>}
   {toggle?
   <div className = "absolute mt-3 bg-black border-[1px] border-gray-800 p-3 px-5 py-4">
    
    {menu.map((item,index) => index >2 &&(<HeaderItem name ={item.name} Icon={item.icon}/>))}</div>:null}</div>
  </div>)
}

export default Header