import React from 'react';
import StrainSelectionForm from './StrainSelectionForm';
import StrainSelectionState from '../context/strainsSelectContext/StrainSelectionState'
import { BrowserRouter as Router, Switch, Route, Link } from "react-router-dom";

function Strains() {
    return (
        <div>
            <StrainSelectionForm />
        </div>
    )
};

export default Strains;
