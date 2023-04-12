import React from 'react'

import sikander from '../assets/team/sikander.jpg';

const Tile = () => {
  return (
    <div class="relative text-center hover:transform hover:scale-125 hover:rounded transition hover:z-50 hover:cursor-pointer duration-50 ease-in-out">
        <img src={sikander} alt=""/>
        <div class="absolute bottom-0 left-0 right-0 px-2 py-2 bg-gray-800 bg-opacity-50 text-amber-400">
            <h5>Dr. Konrad Hoeft</h5>
        </div>
    </div>
  )
}

export default Tile