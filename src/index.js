import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import App from './App';
import reportWebVitals from './reportWebVitals';
import { RouterProvider, createBrowserRouter } from 'react-router-dom';
import ToDoList from './components/ToDo/ToDoList';
import Counter from './components/Counter/Counter';
import FilmList from './components/FilmsList/FilmList';
import Users from './components/Users/Users';
import User from './components/Users/User';
import Categories from './components/Products/Categories';

import Category from './components/Products/Category';



const router=createBrowserRouter([

  {
    path: '/',
    element: <App/>,
    errorElement:<h1>Not found</h1>,
    children:[

      {
        path: '/todo',
        element: <ToDoList/>
      },
    

      {
        path: '/counter',
        element: <Counter/>
      },
    
      {
        path: '/filmList',
        element: <FilmList/>
      },

      {
        path: '/categories',
        element: <Categories/>
        
      },
      {
        path: '/category',
        element: <Category/>,
        /*children:[
          {
            path: ':id',
            element: <Category.id/>
          },
        ]*/
      },
     
      
      {
        path: '/users',
        element: <Users/>,
        children:[
          {
            path: ':id',
            element: <User/>
          },
        ]
      },

      /*{
        path: '/users/:id', // переносить на ыншу сторынку
        element: <User/>
      },*/

    ]
  },

  

]  );


const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
//  <React.StrictMode>
   <RouterProvider router={router}/>
  // </React.StrictMode>
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();

