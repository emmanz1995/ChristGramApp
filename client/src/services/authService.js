import axios from 'axios';

const AuthService = {
    onSignin: function(formData) {
        return axios.post('/signin', (formData), {
            headers: {
                'Content-Type': 'application/json'
            }
        }).then((response) => {
            if(response.data.token) {
                localStorage.setItem('user', JSON.stringify(response.data));
            }
            return response.data;
        }).catch(error => console.log(error));
    },
    getUser: function() {
        return JSON.parse(localStorage.getItem('user'));
    },
    onRegister: function(formData) {
        return axios.post('/signup', (formData),{
            headers: {
                'Content-Type': 'application/json'
            }
        }).then((response) => {
            return response.data;
        }).catch(error => console.log(error));
    },
    onSignout: function () {
        localStorage.clear();
    }
}

export default AuthService;
