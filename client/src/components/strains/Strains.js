import React from 'react';

import StrainSelectionForm from './StrainSelectionForm';
import StrainSelectionState from '../context/strainsSelectContext/StrainSelectionState'

export const Strains = () => {
    return (
        <StrainSelectionState>
        <div>
            <div>
                <StrainSelectionForm/>
            </div>

            
            
        </div>
        </StrainSelectionState>
    )
}

export default Strains;
