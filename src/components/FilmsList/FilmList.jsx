import React, { useReducer } from 'react';
import './Film.css';

import FilterFilm from './FilterFilm';
import ItemFilm from './ItemFilm';
import listFilms from './listFilms';
import filmReducer from '../../reducers/filmReducer';
import { nanoid } from 'nanoid';
import AddFilm from './AddFilm';


const FilmList = () => {

    const [films, dispatch] = useReducer(filmReducer, []);

    const addFilm = (name,year,image,director,description) => {
        dispatch({
          type: "add",
          payload: {
            id: nanoid(),
            name: name,
            year: year,
            image: image,
            director: director,
            description: description,
        },
        });
      };

    return (
        <>
       
        <div className='film-list'>

        <FilterFilm />
       <AddFilm addFilm={addFilm} />

        <div>
            {
            listFilms.map((item)=><ItemFilm item={item} key={item.id}/>
            )}
        </div>
        <div>

       
        
        
        </div>

    </div>



        </>
    );
}

export default FilmList;
