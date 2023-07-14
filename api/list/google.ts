import axios from '../build/axios';

export const getGoogleAccount = () => {
    return axios.get('/google-account')
}