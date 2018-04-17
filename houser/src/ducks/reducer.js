const initialState = {
    name: '',
    address: '',
    city: '',
    state: '',
    zip: '',
    image: '',
    mortgage: '',
    rent: ''

}

const UPDATE_StepOne = "UPDATE_StepOne";
const UPDATE_StepTwo = "UPDATE_StepTwo";
const UPDATE_StepThree = "UPDATE_StepThree";


export function updateStepOne(name, address, city, state, zip){
    return{
        type: UPDATE_StepOne,
        payload: {name, address, city, state, zip}
    }
}

export function updateStepTwo(image){
    return{
        type: UPDATE_StepTwo,
        payload: {image}
    }
}

export function updateStepThree(mortgage, rent){
    return{
        type: UPDATE_StepThree,
        payload: {mortgage, rent}
    }
}



function reducer(state = initialState, action){
    switch(action.type){
        case UPDATE_StepOne:
            return Object.assign({}, state, action.payload);
        case UPDATE_StepTwo:
            return Object.assign({}, state, action.payload);
        case UPDATE_StepThree:
            return Object.assign({}, state, action.payload);
        default:
            return state;
    }
}

export default reducer;