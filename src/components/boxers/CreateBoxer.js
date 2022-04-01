import React, { useState, useEffect } from "react";
import { useNavigate } from "react-router-dom";
import BoxerForm from "../shared/BoxerForm";
import { createBoxer } from "../../api/boxers";

const CreateBoxer = (props) => {
    const [newBoxer, setNewBoxer] = useState({name: '', record: '', active: false})
    const navigate = useNavigate()

    const handleChange = (e) => {
        e.persist()

        setNewBoxer( prevBoxer => {
            const name = e.target.name
            const value = e.target.value
            const updatedValue = { [name]: value}

            console.log('prevBoxer: ', prevBoxer)
            console.log('updatedValue: ', updatedValue)
            console.log('boxer after update: ', newBoxer)
            return {...prevBoxer, ...updatedValue}
        })
    }

    const handleSubmit = (e) => {
        e.preventDefault()

        createBoxer(newBoxer)
            .then( () => {navigate('/')})
            .catch(console.error)
    }

    return (
        <BoxerForm handleChange={handleChange} handleSubmit={handleSubmit} newBoxer={newBoxer}/>
    )
}

export default CreateBoxer