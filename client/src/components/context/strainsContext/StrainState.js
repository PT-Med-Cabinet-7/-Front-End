import React, { useReducer } from 'react'
import { v4 as uuid } from 'uuid';
import StrainContext from './strainContext';
import StrainReducer from './StrainReducer';
import axios from 'axios';

import {
    ADD_STRAIN,
    DELETE_STRAIN,
    GET_STRAIN,
    SET_CURRENT,
    CLEAR_CURRENT,
    GRAB_FLAVOR,
    ADD_USER,
    GRAB_EFFECT
} from '../types';

const StrainState = props => {
    const initialState = {
        strains: [],
        flavor1: '',
        effect1: '',
        current: null
    }

    const [state, dispatch] = useReducer(StrainReducer, initialState);

    //Add Strain 
   
    const addStrain =  (strains) =>{
        strains.id = uuid()
        dispatch({ type: ADD_STRAIN, payload: strains})
    }

    //Get Strain


    
    //Delete Strain Selection

    const deleteStrain = id => {
        dispatch({ type: DELETE_STRAIN, payload: id})
    }

    //Set Current Strain,

    const setCurrent = strains => {
        dispatch({ type: SET_CURRENT, payload : strains})
    } 

    //Grab Flavor 

    const grabflavor = flavor1 =>{
        dispatch({ type: GRAB_FLAVOR, payload: flavor1})
    }

    //Grab Effect

    const grabeffect = effect1 =>{
        dispatch({ type: GRAB_EFFECT, payload: effect1})
    }

  

    // Clear Current Selection

    return (
        <StrainContext.Provider value={{
            strains: state.strains,
            flavor1: state.flavor1,
            effect1: state.effect1,
            current: state.current,
            addStrain,
            setCurrent,
            grabflavor,
            grabeffect,
            deleteStrain
            
        }}>
            { props.children }
        </StrainContext.Provider>
    )

}

export default StrainState;