<<<<<<< HEAD
import React from 'react';
import { BiChevronRight, BiShareAlt } from 'react-icons/bi';
import { AiTwotoneHeart } from 'react-icons/ai';
const launchRazorPay = () => {
  let options = {
    key: "rzp_test_EdX4Phv1GofjlT",
    amount: 500*100,
    currency: "INR",
    name: "Book My Show Clone",
    description: "Movie Purchase on Rental",
    image: "https://i.ibb.co/zPBYW3H/imgbin-bookmyshow-office-android-ticket-png.png",
    handler: () => {
      alert("Payment Done")
    },
    theme: {color: "#c4242d"}
  };
  let rzp = new window.Razorpay(options);
  rzp.open();
};


const MovieHero = () => {
  return (
    <>
      <div className='md:hidden'>
        <img
          src='https://in.bmscdn.com/iedb/movies/images/mobile/listing/xxlarge/shang-chi-and-the-legend-of-the-ten-rings-et00122566-24-08-2021-02-01-36.jpg'
          alt='poster'
        />
      </div>

      <div className='hidden md:block lg:hidden'>
        <img
          src='https://in.bmscdn.com/iedb/movies/images/mobile/listing/xxlarge/shang-chi-and-the-legend-of-the-ten-rings-et00122566-24-08-2021-02-01-36.jpg'
          alt='poster'
        />
      </div>

=======
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
>>>>>>> master
      <div className='relative hidden lg:block' style={{ height: '30rem' }}>
        <div
          className='absolute h-full w-full z-10'
          style={{
            backgroundImage:
              'linear-gradient(90deg, rgb(34, 34, 34) 24.97%, rgb(34, 34, 34) 38.3%, rgba(34, 34, 34, 0.04) 97.47%, rgb(34, 34, 34) 100%)',
          }}
        />
<<<<<<< HEAD
        <div className='absolute z-30  h-96 left-64 top-10'>
          <img
            src='https://in.bmscdn.com/iedb/movies/images/mobile/thumbnail/xlarge/shang-chi-and-the-legend-of-the-ten-rings-et00122566-24-08-2021-02-01-36.jpg'
            className='h-full w-64 rounded-xl'
          />
          <div className='absolute w-96  h-96 left-80  top-1 '>
            <div>
              <h1 className='text-white font-bold text-3xl'>
                Shang-Chi and the Legend of the Ten Rings
              </h1>
              <div className='text-white flex-row justify-evenly py-5'>
                <div className=' font-semibold text-2xl  flex '>
                  <AiTwotoneHeart className='text-red-500 ' size={30} />
                  <span className='mr-2 ml-1'>91%</span>
                  <span className='font-light text-lg flex mt-1'>
                    29.8k ratings <BiChevronRight className='mt-2' size={15} />
                  </span>
                </div>
              </div>
              <div className='bg-gray-700 text-white px-6 py-2 rounded-lg flex justify-between '>
                <div>
                  <h3 className='font-semibold'>Add your rating & review</h3>
                  <h5 className='text-white-200'>Your ratings matter</h5>
                </div>
                <div>
                  <button class='bg-white text-gray-700 font-bold py-2 mt-1 px-4 rounded-md'>
                    Rate now
                  </button>
                </div>
              </div>
              <div className='max-w-xs text-white mt-5 font-semibold rounded-sm '>
                2D, 3D, 4D, 5D, IMAX 2D, MX4D, 4DX
              </div>
              <div className=' text-white mt-2 font-semibold '>
                English , Kannada , Tamil , Hindi , Malayalam
              </div>
              <div className='text-white mt-2 py-2 text-base font-thin'>
                2h 12m • Action , Adventure , Fantasy • UA • 3 Sep
              </div>
              <button  onClick={launchRazorPay} class='bg-red-500  text-white mt-10 py-2 mt-1 px-11 rounded-md'>
                Book tickets
              </button>
            </div>
          </div>
        </div>
        <div>
=======
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
>>>>>>> master
          <button className='btn flex px-4 py-2 text-xl text-white bg-opacity-40 backdrop-filter backdrop-blur bg-navCol-800 absolute top-12 right-20 rounded-md'>
            <BiShareAlt className='mt-1 mr-2' size={25} /> Share
          </button>
        </div>
<<<<<<< HEAD
        <img
          src='https://in.bmscdn.com/iedb/movies/images/mobile/listing/xxlarge/shang-chi-and-the-legend-of-the-ten-rings-et00122566-24-08-2021-02-01-36.jpg'
          alt='poster'
          className='mx-auto w-full h-full'
        />

      </div>
    </>
=======
        
  </div>
  </>
>>>>>>> master
  );
};

export default MovieHero;
