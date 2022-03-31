import React, { useState, useEffect } from "react";
import { getAllBoxers } from "../../api/boxers";

const IndexBoxers = (props) => {
    const [boxers, setBoxers] = useState(null)

    useEffect( () => {
        getAllBoxers()
            .then( res => {
                console.log(`this is res: `, res)
                setBoxers(res.data.boxers)
            })
            .catch(console.error)
    }, [])

    
    //If boxers === null, meaning still waiting for a response from the API
    if(boxers === null)
    {
        return <p>Loading...</p>
    }
    else if(boxers.length === 0)
    {
        return <p>No boxers yet, go add some!</p>
    }
    
    let boxersJsx

    if(boxers.length > 0)
    {
        boxersJsx = boxers.map( boxer => (
            <li key={boxer._id}>{boxer.name}</li>
        ))
    }

    console.log('boxersJsx: ', boxersJsx)

    return (
        <>
            <h3>All the boxers</h3>
            <ul>
                {boxersJsx}
            </ul>
        </>
    )
}

export default IndexBoxers