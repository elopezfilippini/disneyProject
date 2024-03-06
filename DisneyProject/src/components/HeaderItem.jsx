import React from 'react'

function HeaderItem({name,Icon}) {
  return (
    <div className= 'text-white text-[18px] flex items-center font-semibold cursor-pointer gap-3 hover:underline underline-offset-8 mb-3' >
<Icon/>
<h2 className=''>{name}</h2>

    </div >
  )
}

export default HeaderItem