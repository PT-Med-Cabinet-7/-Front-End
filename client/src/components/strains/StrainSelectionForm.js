import React, { useState, useContext, useEffect } from 'react';
import { Card, CardImg, Form, FormGroup, Input, Label, Button } from "reactstrap"
import StrainSelectContext from '../context/strainsSelectContext/strainSelectContext';
import { BrowserRouter as Router, Switch, Route, Link, Redirect } from "react-router-dom";
import PropTypes from "prop-types";
import flavorCheckboxes from "./flavorCheckboxes";
import effectCheckboxes from "./effectCheckboxes";
import Checkbox from "./Checkbox";

// import Select from 'react-select';
// import makeAnimated from 'react-select/animated'

class FlavorContainer extends React.Component {
    constructor(props) {
    super(props);

    this.state = {
        checkedItems: new Map(),
    }

    this.handleChange = this.handleChange.bind(this);
    }

    handleChange(e) {
        const item = e.target.name;
        const isChecked = e.target.checked;
        this.setState(prevState => ({ checkedItems: prevState.checkedItems.set(item, isChecked) }));
    }

    render() {

    return (
        <React.Fragment>
        {
            flavorCheckboxes.map(item => (
                <label key={item.key}>
                    {item.name}
                    <Checkbox name={item.name} checked={this.state.checkedItems.get(item.name)} onChange={this.handleChange} />
                </label>
            ))
        }
        <hr></hr>
        </React.Fragment>
    );
    }
};

class EffectContainer extends React.Component {
    constructor(props) {
    super(props);

    this.state = {
        checkedItems: new Map(),
    }

    this.handleChange = this.handleChange.bind(this);
    }

    handleChange(e) {
        const item = e.target.name;
        const isChecked = e.target.checked;
        this.setState(prevState => ({ checkedItems: prevState.checkedItems.set(item, isChecked) }));
    }

    render() {
    return (
        <React.Fragment>
        {
            effectCheckboxes.map(item => (
                <label key={item.key}>
                    {item.name}
                    <Checkbox name={item.name} checked={this.state.checkedItems.get(item.name)} onChange={this.handleChange} />
                </label>
            ))
        }
        </React.Fragment>
    );
    }
};

const StrainSelectionForm = () => {

    return (
        <div>

            <Card>
                <h2 style = {{color: "teal"}}>Select 3 Effects and 5 Flavors below</h2>
            </Card>

            <FormGroup>
                <legend style = {{color: "teal"}}>Flavors -</legend>
                <FlavorContainer />
                <legend style = {{color: "teal"}}>Effects -</legend>
                <EffectContainer />
            </FormGroup>

        </div>
    )

}

export default StrainSelectionForm;