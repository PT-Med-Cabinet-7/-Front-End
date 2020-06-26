import React from 'react';
import GetStrains from './GetStrains'
import StrainSelectionForm from './StrainSelectionForm';
import StrainSelectionState from '../context/strainsSelectContext/StrainSelectionState'

export const Strains = () => {
    return (
        <StrainSelectionState>
        <div>
            <div>
                <StrainSelectionForm/>
            </div>

            <div>
            <GetStrains/>
            </div>
            
        </div>
        </StrainSelectionState>
    )
}

export default Strains
