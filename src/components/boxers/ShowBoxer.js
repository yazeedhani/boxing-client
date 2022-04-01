import React, { useState, useEffect } from 'react'
import { Spinner, Container, Card, Button } from "react-bootstrap";
import { useParams, useNavigate } from 'react-router-dom'
import { showOneBoxer, removeBoxer } from '../../api/boxers'

const ShowBoxer = (props) => {
    const [boxer, setBoxer] = useState(null)
    const {id} = useParams()
    const [updated, setUpdated] = useState(false)
    const navigate = useNavigate()
    console.log('props in ShowBoxer', props)
    console.log('boxer id:', id)

    useEffect( () => {
        showOneBoxer(id)
            .then( res => {
                // console.log('response from API:', res)
                setBoxer(res.data.boxer)
            })
            .catch(console.error)
    }, [id])

    const removeTheBoxer = () => {
        console.log('removed')
        removeBoxer(boxer._id)
            .then( () => {navigate('/')})
            .catch(console.error)
    }

    if(!boxer)
    {
        return (
            <p>Loading...</p>
        )
    }

    console.log(boxer)
    return (
        <>
            <p>Name: {boxer.name}</p>
            <p>Record: {boxer.record}</p>
            <p>Active: {boxer.active}</p>
            <Button className="m-2" variant="warning">Edit Boxer</Button>
            <Button onClick={() => removeTheBoxer()} className="m-2" variant="danger">Delete Boxer</Button>
        </>
    )
}


export default ShowBoxer