
import React, { useState }  from 'react';
//import {description} from './listFilms';
import DescriptionButton from './DescriptionButton';


const ItemFilm = ({item}) => {

   const[description,setDescription]=useState(false);

    
   
   const  addDescription=()=> {
    setDescription(item.description);
    
  }
   
   
    return (
        <div class="container">
           
            <img src={item.image}  alt="" width="300 px" height="500px"></img>
            <p>{item.name}</p> 
            <p>{item.year}</p> 
            
         
            <p>
			<button  onClick={addDescription }>Подробнее</button>
           
            </p>

        </div>
    );
   
}


   

export default ItemFilm;
