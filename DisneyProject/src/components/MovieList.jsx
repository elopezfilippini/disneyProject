import React, { useEffect, useState, useRef } from 'react'
import GlobalApi from '../services/GlobalApi'
import MovieCard from './MovieCard'
import { HiChevronLeft,HiChevronRight } from 'react-icons/hi2'
import HrMovieCard from './HrMovieCard'
const screenWidth = window.innerWidth 
function MovieList({genreId,indexx}) {
const [movieList,setMovieList] = useState([])
const elementRef=useRef()
    useEffect(()=>{getMovieBygenreId()})
    const getMovieBygenreId=()=>{
    GlobalApi.getmovieByGenreId(genreId).then(resp=>{
       setMovieList(resp.data.results)
    })  

    }
    const sliderRight=(element)=>{element.scrollLeft+=screenWidth-236}
    const sliderLeft=(element)=>{element.scrollLeft-=screenWidth-236} 
  return (
   
      <div className='relative'>
          <HiChevronLeft onClick={()=>sliderLeft(elementRef.current)} className={` hidden md:block text-white text-[30px] absolute mx-0  ${ indexx%3==0 ? 'mt-[100px]':'mt-[150px]'}  cursor-pointer`}/>
          
        <div className="py-8 flex gap-8 auto scroll-smooth overflow-x-auto scrollbar-none px-3 p-b5"ref={elementRef}>
        {movieList.map((item,index)=>(
        <>{indexx%3==0 ? <HrMovieCard movie={item}/> : <MovieCard movie={item} />   }  </>) )}</div> 

  <HiChevronRight onClick={()=>sliderRight(elementRef.current)} className={` hidden md:block text-white text-[30px] absolute right-0 mx-4 ${ indexx%3==0 ? 'mt-[100px]':'mt-[150px]'} top-0 z-10 cursor-pointer`}/>
 
  
    </div>
  )
}

export default MovieList