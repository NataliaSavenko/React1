import axios from 'axios';
import React, { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';

const Product = () => {

    const {id} = useParams();

const [products, setProduct] = useState([]);

const getProduct=async ()=>{

    const recponse=await axios(`https://fakestoreapi.com/products/${id}`);
    setProduct(recponse.data);

}

useEffect(()=>{

getProduct();

},[id]);


    return (
        <div>
            
           


        </div>
    );
}



/*<h1>Product  {products.image}</h1>
            <div>{products.title}</div>
            <div>{products.category}</div>
            <div>{products.price}</div>
            <div>{products.description}</div>
            <div>{products.rating}</div>*/

export default Product;
