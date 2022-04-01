import React, { useState, useEffect } from 'react'
import { Spinner, Container, Card, Button } from "react-bootstrap";
import { useParams } from 'react-router-dom'
import { showOneBoxer } from '../../api/boxers'

const ShowBoxer = (props) => {
    const [boxer, setBoxer] = useState(null)
    const {id} = useParams()
    console.log('props in ShowBoxer', props)

    useEffect( () => {
        showOneBoxer(id)
            .then( res => {
                // console.log('response from API:', res)
                setBoxer(res.data.boxer)
            })
            .catch(console.error)
    }, [id])

    console.log(boxer)
    return (
        <>
            <Container>
                <p>Name: {boxer.name}</p>
                <p>Record: {boxer.record}</p>
                <p>Active: {boxer.active}</p>
                <Button className="m-2" variant="warning">Edit Boxer</Button>
                <Button className="m-2" variant="danger">Delete Boxer</Button>
            </Container>
        </>
    )
}

export default ShowBoxer