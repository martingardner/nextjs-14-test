import React from 'react';

import Image from 'next/image';
/**
 * @name NavItem
 * @function
 * @param {Object, Number} param
 * @returns Component
 * @description
 * data {city, image}
 */
export default function NavItem({data, index}){

    return (
        <div key={`${index}-nav-item`} className="rounded-full p-6 bg-radial-gradient border-single border-2 border-sky-100 overflow-hidden aspect-square  mt-10">
            <div className="rounded-full overflow-hidden w-200 h-200 border-single border-2 border-sky-300 relative group">
            
                <Image 
                    className="h-full opacity-100 group-hover:opacity-50 transition-all duration-500 ease-in-out" 
                    src={`/${data.image}`}
                    height={234}
                    width={384}
                    alt="Image of city"
                />
                <div className="opacity-0 group-hover:opacity-100 transition-all duration-500 ease-in-out h-half bg-black/75 absolute h-100 w-full bottom-0 text-white text-center font-bold text-lg py-2 border-t-2 border-sky-300">
                    {data.city}
                </div>
            
            </div>
        </div>
    )
}