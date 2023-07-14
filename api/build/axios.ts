import axios from "axios";

const instance = axios.create({
    baseURL: 'http://127.0.0.1:4444',
    headers: {
        'Content-type': 'application/json'
    }
})

export default instance
