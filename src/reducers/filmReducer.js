const filmReducer = (state, action) => {

    switch (action.type) {
        
        case 'add':
            return [
                ...state,
                action.payload
            ]
        
       
            }

        
}

export default filmReducer;