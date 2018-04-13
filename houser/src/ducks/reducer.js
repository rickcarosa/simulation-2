const initialState = {
    name: '',
    address: '',
    city: '',
    state: '',
    zip: 0
}


function reducer(state = initialState, action){
    switch(action.type){
        default:
            return state;
    }
}

export default reducer;