import React from 'react'
import disney from "./../assets/Images/disney.png"
import marvel from "./../assets/Images/marvel.png"
import nationalG from "./../assets/Images/nationalG.png"
import pixar from "./../assets/Images/pixar.png"
import starwar from "./../assets/Images/starwar.png"

import starwarV from "./../assets/videos/star-wars.mp4"
import disneyV from  "./../assets/videos/disney.mp4"
import marvelV from  "./../assets/videos/marvel.mp4"
import nationalGeographicV from  "./../assets/videos/national-geographic.mp4"
import pixarV from  "./../assets/videos/pixar.mp4"




function ProductionHouse() {
const list = [

{
id:1,
image:disney,
vide:disneyV

},

{
    id:2,
    image:pixar,
    vide:pixarV
    
    },
{
        id:3,
        image:starwar,
        vide:starwarV
        
        },
        {
            id:4,
            image:marvel,
            vide:marvelV
            
            },
            {
                id:5,
                image:nationalG,
                vide:nationalGeographicV
                
                },

]





  return (
    <div className='flex gap-5 px-5 md:px16'>
{list.map((item)=>(
    <div className=' border-[2px] rounded-lg hover:scale-110 transition-all duration-200 cursor-pointer ease-in-out shadow-xl shadow-slate-700 '>
<video className="z-0 opacity-0 absolute top-0 rounded-md hover:opacity-50"src={item.vide} autoPlay loop playsInline muted /> 
    <img key={item.id}src={item.image} className='z-[1] w-full'/>
</div>

))}



    </div>
  )
}

export default ProductionHouse