import axios from 'axios';

export const rimacApi = axios.create({
    baseURL:'https://rimac-front-end-challenge.netlify.app/api'
})