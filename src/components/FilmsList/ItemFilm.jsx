import React from 'react';

const ItemFilm = ({item}) => {
    return (
        <div class="container">
           
            <img src={item.image}  alt="" width="300 px" height="500px"></img>
            <p>{item.name}</p> 
            <p>{item.year}</p> 
           

        </div>
    );
}

export default ItemFilm;
