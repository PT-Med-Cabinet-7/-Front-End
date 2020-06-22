import React, { Fragment, useContext} from 'react';

import StrainSelectContext from '../context/strainsSelectContext/strainSelectContext'

export const StrainSelection = () => {
    const strainSelectContext = useContext(StrainSelectContext)

    const { strainSelection } = strainSelectContext;
    return (
        <Fragment>
           {strainSelection.map(item => (
               <h3>{item}</h3>
               
           ))} 
        </Fragment>
    )
}

export default StrainSelection


