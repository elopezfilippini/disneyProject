import React from 'react'
const imageBaseUrl = "https://image.tmdb.org/t/p/original"

function MovieCard({movie}) {
  return (
   
        <img src = {imageBaseUrl+movie.poster_path}
        className='w-[110px] md:w-[200px] rounded-lg hover:border-[3px] hover:border-gray-500 cursor-pointer hover:scale-110 transition-all duration-200 ease-in'/>
  
  )
}

export default MovieCard    