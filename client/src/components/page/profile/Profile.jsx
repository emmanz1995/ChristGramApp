import React, { useState, useEffect } from 'react';
import Navbar from '../../layout/navbar/Navbar';
import { ProfileWrapper, ProfileBanner, PostMenu } from './ProfileStyles';
import AuthService from '../../../services/authService';
import { PostService } from '../../../services/postService';
import { Link } from 'react-router-dom';
import { useHistory } from 'react-router-dom';

const Profile = () => {
    const currentUser = AuthService.getUser();
    const [myPosts, setMyPosts] = useState([]);
    const [isLoading, setIsLoading] = useState(false);
    const history = useHistory();
    useEffect(() => {
        function fetchMyPosts() {
            PostService.getMyPosts()
                .then((results) => {
                    setMyPosts(results);
                    setIsLoading(true);
                })
                .catch(error => console.log(error));
        }
        return fetchMyPosts()
    }, [])
    return (
        <div>
            <Navbar currentUser={currentUser} />
            <ProfileWrapper>
                <ProfileBanner>
                    <div className="banner-content">
                        <div className="profile-img-container">
                            <img src={currentUser?.user?.pic} className="profile-img" alt="placeholder" width="600" height="400" />
                        </div>
                        <div className="profile-info">
                            <div className="top-content">
                                <div className="first-content">
                                    <h2>{currentUser?.user?.name}</h2>
                                    <button onClick={()=> history.push('/prayer-request')}>Prayers Requests</button>
                                </div>
                                <div className="second-content">
                                    <p>Denomination: {currentUser?.user?.denomination}</p>
                                    <p>email Address: {currentUser?.user?.email}</p>
                                    <p>ID no: {currentUser?.user?._id}</p>
                                </div>
                            </div>
                        </div>
                    </div>
                </ProfileBanner>
                <PostMenu>
                    <div className="mypost-content">
                        {myPosts?.map(mypost => (
                            <div className="card" key={mypost._id}>
                                {isLoading ?
                                <Link className="post-link" href="">
                                    <div className="card-img">
                                        <img className="post-img" src={mypost.photo} alt="photo" width="600" height="400" />
                                    </div>
                                    <h2 className="title">{mypost.title}</h2>
                                </Link> : 'Loading...'}
                            </div>
                        ))}
                    </div>
                </PostMenu>
            </ProfileWrapper>
        </div>
    );
}

export default Profile;
