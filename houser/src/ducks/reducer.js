const initialState = {
    name: '',
    address: '',
    city: '',
    state: '',
    zip: 0
}

const UPDATE_NAME = "UPDATE_NAME";

export function updateName(name){
    return{
        type: UPDATE_NAME,
        payload: name
    }
}

function reducer(state = initialState, action){
    switch(action.type){
        case UPDATE_NAME:
            return Object.assign({}, state, {name: action.payload})
        default:
            return state;
    }
}

export default reducer;