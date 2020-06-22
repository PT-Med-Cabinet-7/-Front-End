import React from 'react';
import StrainSelection from './StrainSelection';
import StrainSelctionForm from './StrainSelectionForm';
import StrainSelectionState from '../context/strainsSelectContext/StrainSelectionState'

export const Strains = () => {
    return (
        <StrainSelectionState>
        <div className="grid-2">
            <div>
                <StrainSelctionForm/>
            </div>

            <div>
                <StrainSelection/>
            </div>
            
        </div>
        </StrainSelectionState>
    )
}

export default Strains
