import axios from 'axios';
import AuthHeader from '../authHeader';

function getPosts() {
    return axios.get('/allpost')
        .then((response) => {
            if(response.status === 200) {
                return response.data;
            }
        })
        .catch(err => console.log(err));
}
function onCreatePost(formData) {
    const AuthorizationHeader = AuthHeader();
    AuthorizationHeader['Content-Type'] = 'application/json';
    console.log('Authorization header: ', AuthorizationHeader);
    return axios.post('/createpost', formData, {
        headers: AuthorizationHeader
    })
        .then((response) => {
            return response;
        })
        .catch(err => console.log(err));
}
function getMyPosts() {
    return axios.get('/mypost', {
        headers: AuthHeader()
    })
        .then((response) => {
            console.log(response.data);
            return response.data;
        })
        .catch(err => console.log(err));
}
function onUploadImage(data) {
    return axios.post('https://api.cloudinary.com/v1_1/emmanuel-cloud-storage/image/upload', data)
        .then((response) => {
            console.log('Uploaded Image: ', response.data)
            return response.data;
        })
        .catch(error => console.log(error));
}

function onLikePosts (dataId) {
    const AuthorizationHeader = AuthHeader();
    AuthorizationHeader['Content-Type'] = 'application/json';
    return axios.put('/like', dataId, {
        headers: AuthorizationHeader
    })
        .then((result) => {
            console.log(result.data);
            return result.data;
        })
}

function onUnLikePosts (dataId) {
    const AuthorizationHeader = AuthHeader();
    AuthorizationHeader['Content-Type'] = 'application/json';
    return axios.put('/unlike', dataId, {
        headers: AuthorizationHeader
    })
        .then((response) => {
            console.log(response);
            return response.data;
        })
        .catch(error => console.log(error));
}

function onMakeComments(data) {
    const AuthorizationHeader = AuthHeader();
    AuthorizationHeader['Content-Type'] = 'application/json';
    return axios.put('/comment', data, {
        headers: AuthorizationHeader
    })
        .then((response) => {
            return response.data;
        })
        .catch(error => console.log(error));
}

function onDeletePosts(id) {
    return axios.delete(`/deletepost/${id}`, {
        headers: AuthHeader()
    })
        .then((response) => {
            return response.data;
        })
        .catch(error => console.log(error));
}

export const PostService = {
    getPosts,
    onCreatePost,
    getMyPosts,
    onUploadImage,
    onLikePosts,
    onUnLikePosts,
    onMakeComments,
    onDeletePosts
}
