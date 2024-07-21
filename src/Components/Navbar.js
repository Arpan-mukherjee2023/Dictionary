import React from 'react'

export default function Navbar(props) {
  return (
    <>
      <nav className='text-white bg-slate-800 h-3/4 p-4 md:p-2'>
        <div className='w-full bg-slate-400 p-2 h-3/4 rounded-md md:h/5 md:p-0 md:m-0 ' id='menu-item'>
          <ul className='md:flex md:flex-row  justify-center md:justify-center m-2'>
            <li className='text-xl bg-slate-500 py-3 rounded-lg text-center font-bold w-full md:py-2 md:w-3/12 md:m-2'>Dictionary</li>
          </ul>
        </div>
      </nav> 
    </>
    
  );
}
