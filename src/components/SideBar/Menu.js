import React from 'react';
import {Icon} from "../../Icons"

function Menu() {
  return (
    <div>
       <nav className='px-2'>
            <ul className='flex flex-col'>
                <li>
                    <div  className='h-10 flex gap-x-4 items-center text-sm text-gray-500 font-semibold hover:text-white px-4'>
                    <span>
                    <Icon name="home"></Icon>
                    </span>
                    HOME
                    </div>
                </li>
                <li>
                    <div className='h-10 flex gap-x-4 items-center text-sm text-gray-500 font-semibold hover:text-white px-4'>
                    <span>
                    <Icon name="search"></Icon>
                    </span>
                    SEARCH
                    </div>
                </li>
                <li>
                    <div className='h-10 flex gap-x-4 items-center text-sm text-gray-500 font-semibold hover:text-white px-4'>
                    <span>
                    <Icon name="collection"></Icon>
                    </span>
                    LIBRARY
                    </div>
                </li>
                

            </ul>
        </nav>
    </div>
  )
}

export default Menu
