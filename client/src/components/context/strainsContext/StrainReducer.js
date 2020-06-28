import {
    ADD_STRAIN,
    DELETE_STRAIN,
    SET_CURRENT,
    CLEAR_CURRENT,
    GRAB_FLAVOR,
    GRAB_EFFECT,
    GET_STRAIN
} from '../types';

export default (state, action) => {
    switch(action.type){
        case ADD_STRAIN:
            return{
                ...state,
                strains: [...state.strains, action.payload]
            }

        case GET_STRAIN: 
            return {
                ...state,
                strain: [...state.strain, action.payload ]
            }
        case DELETE_STRAIN:
            return {
                ...state,
                strains: state.strains.filter(strain => strain.id)
            }
        case SET_CURRENT: 
            return {
                ...state,
                current: action.payload
            }
        case GRAB_FLAVOR:
            return {
                ...state,
                flavor1: [...state.flavor1, action.payload]
            }

        case GRAB_EFFECT:
                return {
                    ...state,
                    effect1: [...state.effect1, action.payload]
                }    
    }
}