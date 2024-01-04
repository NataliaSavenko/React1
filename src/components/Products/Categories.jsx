import axios from 'axios';
import React, { useEffect, useState } from 'react';
import { Link, NavLink, Outlet, useSearchParams } from 'react-router-dom';


const Categories = () => {
const [categories, setCategories] = useState([]);
const [search, setSearch] = useSearchParams("");
const [searchText, setSearchText] = useState(search.get('q') || "");


const getCategories=async ()=>{
    const recponse=await axios("https://fakestoreapi.com/products/categories");
    setCategories(recponse.data);
    }

    useEffect(()=>{
        getCategories();
        },[]);

    const searchHandler=(e)=>{
        setSearchText(e.target.value);
        setSearch({q:e.target.value});
    };

    return (
        <div>

        <h1>Categories</h1>
       
        
            
    
        

<input type='text' value={searchText} onChange={searchHandler}></input>
            {categories
        .filter((category, index) => category.toLowerCase().includes(searchText.toLowerCase()))
        .map((category, index) => (
          <div key={index}>
            <Link to={`/category/${searchText}`}>
            {category.toUpperCase()}
       <p></p>
            </Link>
          </div>
        ))}


  

   
     
   

    <Outlet/>
    </div>
    );
}

  
/*{categories.map((category, index)=>
    (<NavLink className="cat" to={`/${category}`} key={index}>
        {category.toUpperCase()}
       <p></p>
       
    </NavLink>*/
         
export default Categories;
