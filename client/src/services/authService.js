import axios from 'axios';

    function onSignin(formData) {
        return axios.post('/signin', (formData), {
            headers: {
                'Content-Type': 'application/json'
            }
        })
            .then((response) => {
                if(response.data.token) {
                    localStorage.setItem('user', JSON.stringify(response.data));
                }
                return response.data;
            })
            .catch(error => console.log(error));
    }

    function getUser() {
        return JSON.parse(localStorage.getItem('user'));
    }

    function onSignup(formData) {
        return axios.post('/signup', (formData),{
            headers: {
                'Content-Type': 'application/json'
            }
        })
            .then((response) => {
                return response.data;
            })
            .catch(error => console.log(error));
    }

    function onSignout() {
        localStorage.clear();
    }

export const AuthService = {
    onSignin,
    onSignup,
    onSignout,
    getUser
}
