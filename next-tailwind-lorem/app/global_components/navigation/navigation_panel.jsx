import React from 'react';
import NavItem from './navigation_item';

export default function NavigationPanel(){

    const navItemsArr = [
        {city: 'Minneapolis', image: "minneapolis.jpg"},
        {city: 'Chicago', image: "chicago.jpg"},
        {city: 'New York City', image: "nyc.jpg"}
    ]

    return (
        <nav className="flex items-center flex-col">
            {navItemsArr.map( (data, index) => <NavItem data={data} index={index} />
            )}
            
        </nav>
    )
}