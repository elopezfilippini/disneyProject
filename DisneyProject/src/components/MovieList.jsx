import React, { useEffect, useState } from 'react'
import GlobalApi from '../services/GlobalApi'
import MovieCard from './MovieCard'
import { HiChevronLeft,HiChevronRight } from 'react-icons/hi2'
function MovieList({genreId}) {
const [movieList,setMovieList] = useState([])

    useEffect(()=>{getMovieBygenreId()})
    const getMovieBygenreId=()=>{
    GlobalApi.getmovieByGenreId(genreId).then(resp=>{
       setMovieList(resp.data.results)
    })    
    }
  return (
    <div className='py-8 flex gap-8 auto overflow-x-auto scrollbar-none scroll-smooth px-3 p-b5'>
         <HiChevronLeft onClick={()=>sliderLeft(elementRef.current)} className="hidden md:block text-white text-[30px] absolute mx-8 mt-[150px]  cursor-pointer"/>
            <HiChevronRight onClick={()=>sliderRight(elementRef.current)} className="hidden md:block text-white text-[30px] absolute mx-4 mt-[150px] right-20 cursor-pointer"/>
        
        {movieList.map((item,index)=>(<MovieCard movie={item} />

        ))}

    </div>
  )
}

export default MovieList