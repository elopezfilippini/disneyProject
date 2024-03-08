import React, { useEffect, useState, useRef } from 'react'
import GlobalApi from '../services/GlobalApi'
import { HiChevronLeft,HiChevronRight } from 'react-icons/hi2'
const imageBaseUrl = "https://image.tmdb.org/t/p/original"
const screenWidth = window.innerWidth 

function Slider() {
    const elementRef=useRef()
    const [movieList,setMovieList]= useState([])
    useEffect(()=>{
        getTrendingMovies() 
    },[])
    const getTrendingMovies= async ()=>{
     await   GlobalApi.getTrendingVideos.then(response =>{
            
            setMovieList(response.data.results)
             
        })
    }
    const sliderRight=(element)=>{element.scrollLeft+=screenWidth-236}
    const sliderLeft=(element)=>{element.scrollLeft-=screenWidth-236}


    return (
        <div className='relative'>
            <HiChevronLeft onClick={()=>sliderLeft(elementRef.current)} className="hidden md:block text-white text-[30px] absolute mx-0 mt-[150px]  cursor-pointer"/>
        
        <div className="flex overflow-x-auto min-w-full px-4 py-4 mr-5 scrollbar-none scroll-smooth " ref={elementRef}>
{movieList.map((item,index)=>(
<img key={index} src={imageBaseUrl+item.backdrop_path} 
className="min-w-full md:h-[310px] object-cover object-top rounded-md mr-5 ml-0 hover:border-[4px] border-gray-400 transition-all duration -100 ease-in"/>)

)}




    </div>

    <HiChevronRight onClick={()=>sliderRight(elementRef.current)} className="hidden md:block text-white text-[30px] top-0 absolute z-10 mt-[150px]  right-[0] cursor-pointer"/>

     </div>
  )
}

export default Slider