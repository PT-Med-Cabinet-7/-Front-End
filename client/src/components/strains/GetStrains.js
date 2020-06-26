import React, { useState, useEffect } from 'react'
import axios from 'axios'
export const GetStrains = () => {
    const [ strains, setStrains] = useState([])
    
    useEffect(()=> {
        axios
        .get("https://sheltered-retreat-61575.herokuapp.com/predict?effect=Sleepy&flavor=Pine")
        .then(res => {
            setStrains(res.data);
            console.log(res.data)
        })
        .catch(error=>console.log(error))
    })
    
    return (
        <div>
         {strains.map(data=> {
             return(
                 <div></div>
             )
         })}   
            
        </div>
    )
}

export default GetStrains
