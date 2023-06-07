import React from "react";

function TopButtons({setQuery}){

var cities =[
        {
        id:1,
        title: 'Reston',
    },
    {
        id:2,
        title: 'USA',
    },
    {
        id:3,
        title: 'Australia',
    },
    {
        id:4,
        title: 'Mexico',
    },
];
    return(
    <div className= "flex items-center justify-around">
        {cities.map((places) => (
        <button
          key={places.id}
          className="text-white text-lg font-medium
            text-white cursor-pointer flex space-y-4 transition ease-out hover:scale-150"  onClick={() => setQuery({ q: places.title })}>
                {places.title}
                </button>

        ))}
    </div>
    );
}


export default TopButtons;