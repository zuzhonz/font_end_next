import axios from '../build/axios';

export const getGoogleAccount = (data:any) => {
    return axios.post('/google-account',data)
}

