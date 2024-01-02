import axios from 'axios';
import React, { useState } from 'react';

const AddFilm = ({addFilm}) => {

    const [name, setName] = useState('');
    const [year, setYear] = useState('');
    const [image, setImage] = useState('');
    const [director, setDirector] = useState('');
    const [description, setDescription] = useState('');

    const [error, setError] = useState(null);
    
    
    const handleAdd=()=>
    {
        if(name.length===0 || year.length===0 ||
             image.length===0 || director.length===0 || description.length===0)
        {
            setError('String is empty');
            return;
        }
        addFilm(name,year,image,director,description);
        setError(null);
        setName('');
        setYear('');
        setImage('');
        setDirector('');
        setDescription('');
       
    
    }

    const f=async()=>{
        var responce=await axios.get("https://upload.wikimedia.org/wikipedia/ru/e/e4/La_La_Land.jpg");
        setImage.value=responce.data;
    }

    return (
        <div>
            
            <input type="text" placeholder='name' value={name} onChange={(e)=>setName(e.target.value)}/>
            <input type="text" placeholder='year'value={year} onChange={(e)=>setYear(e.target.value)}/>
            <input type="text" placeholder='image'value={image} className='im' onChange={(e)=>setImage(e.target.value)}/>
           
           
            <img src={f}  alt="" ></img>
            <input type="text" placeholder='director'value={director} onChange={(e)=>setDirector(e.target.value)}/>
            <input type="text" placeholder='description'value={description} onChange={(e)=>setDescription(e.target.value)}/>
            <div>
            <button onClick={handleAdd}>add</button>
            </div>
            {error ? <div> {error}  </div> : ''}

        </div>
    );
}

export default AddFilm;
