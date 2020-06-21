import React, { useState } from 'react';


export const StrainSelectionForm = () => {
    const [flavors, setFlavors] = useState({
        flavor1: '',
        flavor2: '',
        flavor3: '',
        flavor4: '',
        flavor5: ''
       
    });
    const [effects, setEffects] = useState({
        effect1: '',
        effect2: '',
        effect3: ''
    });

    const { flavor1, flavor2, flavor3, flavor4, flavor5} = flavors

    const onChangeFlavors = e => {
        setFlavors({
            ...flavors,
        value: e.target.value
            
        })
        

    }

    const onSubmitFlavors = e => {
        e.preventDefault();
        setFlavors({
            flavor1: '',
            flavor2: '',
            flavor3: '',
            flavor4: '',
            flavor5: ''

        })
    }
    
    return (
       <form onSubmit={onSubmitFlavors}>
           <label>
               Pick Flavors(5)
               <select multiple={true} onChange={onChangeFlavors} value={flavors}>
                   <option value="Sweet">Sweet</option>
                   <option value="Tropical">Tropical</option>
                   <option value='Peach'>Peach</option>
                   <option value='Minty'>Minty</option>
                   <option value='Fruit'>Fruit</option>
                   <option value="Coffee">Coffee</option>
                   <option value='Chemical'>Chemical</option>
                   <option value="BlueBerry">Blueberry</option>
                   <option value="Pear">Pear</option>
                   <option value="Apple">Apple</option>
                   <option value="Woody">Woody</option>
                   <option value="Cheese">Cheese</option>
                   <option value="Pungent">Pungent</option>
                   <option value="Flowery">Flowery</option>
                   <option value="Pepper">Pepper</option>
                   <option value="Sage">Sage</option>
                   <option value="Chestnut">Chestnut</option>
                   <option value="Strawberry">Strawberry</option>
                   <option value="Honey">Honey</option>
                   <option value="Mint">Mint</option>
                   <option value="Orange">Orange</option>
                   <option value="Tobacco">Tobacco</option>
                   <option value="Tea">Tea</option>
                   <option value="Lime">Lime</option>
                   <option value="Grapefruit">Grapefruit</option>
                   <option value="Lavender">Lavender</option>
                   <option value="Tar">Tar</option>
                   <option value="Skunk">Skunk</option>
                   <option value="Pine">Pine</option>
                   <option value="Mango">Mango</option>
                   <option value="Tree">Tree</option>
                   <option value="Apricot">Apricot</option>
                   <option value="Vanilla">Vanilla</option>
                   <option value="Berry">Berry</option>
                   <option value="Menthol">Menthol</option>
                   <option value="Violet">Violet</option>
                   <option value="Blue">Blue</option>
                   <option value="Nutty">Nutty</option>
                   <option value="Grape">Grape</option>
                   <option value="Pineapple">Pineapple</option>
                   <option value="Diesal">Diesel</option>
                   <option value="Ammonia">Ammonia</option>
                   <option value="Plum">Plum</option>
                   <option value="Lemon">Lemon</option>
                   <option value="Butter">Butter</option>
                   <option value="Citrus">Citrus</option>
                   <option value="Rose">Rose</option>
                   <option value="Earthy">Earthy</option>
                   <option value="Spicy/Herbal">Spicy/Herbal</option>
                   <option value="None">None</option>
               </select>
               
           </label>
           <input type="submit" value="Submit"/>
       </form>

    )
}

export default StrainSelectionForm;
