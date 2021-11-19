import axios from 'axios';
import AuthHeader from '../authHeader';

function onCreatePrayerReq(formData) {
    const AuthorizationHeader = AuthHeader();
    AuthorizationHeader['Content-Type'] = 'application/json';
    axios.post('/createprayerreq', formData, {
        headers: AuthorizationHeader
    })
        .then((response) => {
            return response.data;
        })
        .catch((error) => console.error(error));
}

function getMyPrayerReq() {
    return axios.get('/myprayer', {
        headers: AuthHeader()
    })
        .then((response) => {
            return response.data;
        })
        .catch(error => console.log(error));
}

function onDeletePrayerReq(id) {
    return axios.delete(`/deleteprayerreq/${id}`, {
        headers: AuthHeader()
    })
        .then((response) => {
            return response.data;
        })
        .catch(error => console.log(error));
}

export const PrayerReqService = {
    onCreatePrayerReq,
    getMyPrayerReq,
    onDeletePrayerReq
}
