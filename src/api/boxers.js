import apiUrl from "../apiConfig";
import axios from "axios";

// INDEX function
export const getAllBoxers = () => {
    return axios(`${apiUrl}/boxers`)
}