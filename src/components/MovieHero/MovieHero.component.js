import React, { useContext } from 'react';

// context
import { MovieContext } from "../../context/movie.context";

import MovieInfo from "./MovieInfo.component";
import { BiShareAlt } from 'react-icons/bi';

const MovieHero = () => {

  const { movie } = useContext(MovieContext);
  
  return (
  <>
      {/* Mobile */}
      <div className='relative md:hidden w-full'style={{ height: "calc(180vw)" }}>
          <div className="absolute z-20 bottom-4 left-4 ml-1">
            <MovieInfo />
          </div>
        <div className="w-full h-56 bg-opacity-50 absolute bg-black z-10 bottom-0" ></div>
            <img
              src={`https://image.tmdb.org/t/p/original${movie.poster_path}`}
              alt="poster"
              className="w-full h-full"
            />
        
      </div>

      <div className='relative hidden md:block lg:hidden w-full'style={{ height: "calc(100vw)" }}>
        <div className="w-full h-56 bg-opacity-50 absolute bg-black z-10 bottom-0" />
          <div className="absolute z-20 bottom-4 ml-4">
            <MovieInfo />
          </div>
            <img
              src={`https://image.tmdb.org/t/p/original${movie.poster_path}`}
              alt="poster"
              className="w-full h-full"
            />
      </div>

      {/* Large */}
      <div className='relative hidden lg:block' style={{ height: '30rem' }}>
        <div
          className='absolute h-full w-full z-10'
          style={{
            backgroundImage:
              'linear-gradient(90deg, rgb(34, 34, 34) 24.97%, rgb(34, 34, 34) 38.3%, rgba(34, 34, 34, 0.04) 97.47%, rgb(34, 34, 34) 100%)',
          }}
        />
        <div className='absolute z-30 h-96 left-24 top-10'>
          <div className=" w-64 h-96 ">
          <img
              src={`https://image.tmdb.org/t/p/original${movie.poster_path}`}
              alt="poster"
              className="w-full h-full rounded-xl"
            />
          </div>
          <div className='absolute w-96 h-96 left-80 top-1 '>
              <MovieInfo />
          </div>          
        </div> 
    <img
        src={`https://image.tmdb.org/t/p/original${movie.backdrop_path}`}
        alt="poster"
        className="w-full h-full"
    />
    <div>
          <button className='btn flex px-4 py-2 text-xl text-white bg-opacity-40 backdrop-filter backdrop-blur bg-navCol-800 absolute top-12 right-20 rounded-md'>
            <BiShareAlt className='mt-1 mr-2' size={25} /> Share
          </button>
        </div>
        
  </div>
  </>
  );
};

export default MovieHero;
