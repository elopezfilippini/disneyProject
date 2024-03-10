import React from 'react'
const imageBaseUrl = "https://image.tmdb.org/t/p/original"

function HrMovieCard({movie}) {
  return (<section>
      <img src = {imageBaseUrl+movie.backdrop_path}
      className='w-[110px] md:w-[260px] rounded-lg hover:border-[3px] hover:border-gray-500 cursor-pointer hover:scale-110 transition-all duration-200 ease-in'/>
<h2 className='text-white w-[110px] md:w-[260px] mt-2'>{movie.title}</h2>
      </section>
  )
   
}

export default HrMovieCard
{/* <img src = {imageBaseUrl+movie.backdrop_path}
className='w-[110px] md:w-[200px] rounded-lg hover:border-[3px] hover:border-gray-500 cursor-pointer hover:scale-110 transition-all duration-200 ease-in'/>

) */}