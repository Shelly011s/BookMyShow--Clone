import React , { useContext }from "react";

// context
import { MovieContext } from "../../context/movie.context";

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

const MovieInfo = () =>{

    const { movie } = useContext(MovieContext);
    const genres = movie.genres?.map(({ name }) => name).join(", ");

    return(
        <>
            <div>
              <h1 className='text-white font-bold text-3xl'>
              {movie.original_title}
              </h1>
              <div className='text-white flex-row justify-evenly py-5'>
                <div className=' font-semibold text-2xl  flex '>
                  <AiTwotoneHeart className='text-red-500 ' size={30} />
                  <span className='mr-2 ml-1'>{movie.original_language}</span>
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
                           
              <div className='text-white mt-2 py-2 text-base font-thin'>
              {(movie.runtime / 60).toFixed(2)} hrs &bull; {genres} &bull; 13+      
              </div>
              <button  onClick={launchRazorPay} class='bg-red-500  text-white lg:mt-10 py-2 px-11 rounded-md'>
                Book tickets
              </button>
            </div>
                     
        </>
    );
};

export default MovieInfo;