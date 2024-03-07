import React from 'react'
import GenresList from '../Constant/GenresList'
import MovieList from './MovieList';


function GenreMovieList() {
  return (
    <div>
      {GenresList.genere.map((item,index) => index <=4 && (
        <div className="p-8 px-4 md:px-6" key={item.id}>
            <h1 className='text-[25px] text-white font-bold'>{item.name}</h1>
            <MovieList genreId={item.id}/>
        </div>
      ))}
    </div>
  );
}

export default GenreMovieList