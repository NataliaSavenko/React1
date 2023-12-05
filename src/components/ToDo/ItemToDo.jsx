import React from 'react';

const ItemToDo = ({item}) => {
    //console.log(props);
    return (
        <div>
             
             <div>
                <div className='task'>
            <input type="checkbox" defaultChecked={item.done}/>
            <span>{item.title}</span>
            <button>delete</button>
                </div>
            </div>
        </div>
    );
}

export default ItemToDo;
