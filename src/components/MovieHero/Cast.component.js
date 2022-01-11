import React from 'react';

const Cast = (props) => {
  return (
<<<<<<< HEAD
    <div className='flex flex-col justify-center'>
      <img
        className=' px-3 rounded-full h-20 w-25'
        src={props.src}
        alt='cast'
      />
=======
    <div className='flex flex-col items-center'>
      <div className="w-20 h-20">
          <img
            src={props.src}
            alt="crew man"
            className="w-full h-full rounded-full"
          />
        </div>
>>>>>>> master
      <h4 className='mx-auto mt-2'>{props.name}</h4>
      <h4 className=' mx-auto text-gray-500'>{props.castName}</h4>
    </div>
  );
};

export default Cast;
