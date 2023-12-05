import React from 'react';
import './ToDo.css';
import AddToDo from './AddToDo';
import FilterToDo from './FilterToDo';
import ItemToDo from './ItemToDo';
import toDoItems from './toDoItems';
import FilterFilm from '../FilmsList/FilterFilm';
import ItemFilm from '../FilmsList/ItemFilm';
import listFilms from '../FilmsList/listFilms';



const ToDoList = () => {
    return (
        <>
        <div className='todo-list'>
            <h1 className='text-primary'> ToDo List </h1>
           
           <AddToDo />
           <FilterToDo/>
            <div>
            {
            toDoItems.map((item)=><ItemToDo item={item} key={item.id}/>
            )}

            </div>
        </div>

        <div className='film-list'>

        <FilterFilm />
       
        <div>
            {
            listFilms.map((item)=><ItemFilm item={item} key={item.id}/>
            )}
        </div>

    </div>



        </>
    );
}

export default ToDoList;
