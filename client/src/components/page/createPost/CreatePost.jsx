import React, { useState, useEffect } from 'react';
import { CreatePostWrapper, BackgroundForm, CreatePostForm } from './CreatePostStyles';
import Navbar from '../../layout/navbar/Navbar';
import AuthService from '../../../services/authService';
import { PostService } from '../../../services/postService';
import { useAlert } from 'react-alert';
import { useHistory } from 'react-router-dom';
import { toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';

const CreatePost = () => {
    const [title, setTitle] = useState('');
    const [body, setBody] = useState('');
    const [image, setImage] = useState('');
    const [url, setUrl] = useState('');
    const currentUser = AuthService.getUser();
    // const alert = useAlert();
    const history = useHistory();

    const uploadImage = (evt) => {
        evt.preventDefault();
        let data = new FormData();
        data.append('file', image)
        data.append('upload_preset', 'christ-centered-app');
        data.append('cloud_name', 'emmanuel-cloud-storage');
        PostService.onUploadImage(data)
            .then((response) => {
                setUrl(response.url)
                console.log(response);
                // alert.success('Your post was created!');
                history.push('/home');
                toast.success('Created Post successfully!!')
            })
            .catch(error => {
                console.log(error);
                // alert.error('Couldnt create your post!');
            })
    }

    useEffect(() => {
        let formData = {
            title: title,
            body: body,
            pic: url
        }
        if(url) {
            PostService.onCreatePost(formData)
                .then((success) => {
                    console.log(success);
                })
                .catch(error => console.log(error));
        }
    }, [url])
    return (
        <div className="createpost">
            <Navbar currentUser={currentUser} />
            <CreatePostWrapper>
                <BackgroundForm>
                    <CreatePostForm>
                        <h2>Create a new Post</h2>
                        <input className="input-field" type="text" name="title" value={title} onChange={(evt) => setTitle(evt.target.value)} placeholder="Enter your title" />
                        <textarea className="text-area" name="body" cols="3" rows="20" value={body} onChange={(evt) => setBody(evt.target.value)} placeholder="Enter your post content" />
                        <label htmlFor="photo">Choose your image</label><br />
                        <input type="file" onChange={(evt) => setImage(evt.target.files[0])} /><br />
                        <button className="create-post-btn" type="submit" onClick={uploadImage}>Create Post</button>
                    </CreatePostForm>
                </BackgroundForm>
            </CreatePostWrapper>
        </div>
    );
}

export default CreatePost;
