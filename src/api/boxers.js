import apiUrl from "../apiConfig";
import axios from "axios";

// GET -> Index function
export const getAllBoxers = () => {
    return axios(`${apiUrl}/boxers`)
}

// GET -> Show function
export const showOneBoxer = (boxerId) => {
    return axios(`${apiUrl}/boxers/${boxerId}`)
}

// DELETE -> Remove function
export const removeBoxer = (boxerId) => {
    return axios({
        url: `${apiUrl}/boxers/${boxerId}`,
        method: 'DELETE',
        headers: {},
        data: { boxer: '' }
    })
}