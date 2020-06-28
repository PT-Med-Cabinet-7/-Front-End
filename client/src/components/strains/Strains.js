import React from 'react';

import StrainSelectionForm from './StrainSelectionForm';
import StrainState from '../context/strainsContext/StrainState'

export const Strains = () => {
    return (
        <StrainState>
        <div>
            <div>
                <StrainSelectionForm/>
            </div>

           
            
        </div>
        </StrainState>
    )
}

export default Strains
