import axios from 'axios';
import React, { useEffect, useState } from 'react';
import { NavLink, Outlet, useParams } from 'react-router-dom';


const Category = () => {

    const {searchText} = useParams();

    const [category, setCategory] = useState([]);
    
    
    const recponse=0;
    const getCategory=async ()=>{
        const recponse=await axios(`https://fakestoreapi.com/products/category/${searchText}`);
        setCategory(recponse.data);
        }
   
        useEffect(()=>{
            getCategory();
            },[searchText]);
    
      
    
        return (
            <div>
    
            <h1>ProductOfCategory</h1>
           
            
                
        
       
        <div> {category.image}   </div>

           
           
       </div>
            
            
      
    
       
         
        
        );
    }
    
export default Category;
