import React, { useState, useEffect } from 'react';
import Navbar from '../../layout/navbar/Navbar';
import { HomeWrapper, SubPosts, MainPosts } from './HomeStyles';
import PostData from '../../../mockData/mockPostData';
import SubPostsData from '../../../mockData/mockSubPostData';
import AuthService from '../../../services/authService';
import { PostService } from "../../../services/postService";
import { useAlert } from 'react-alert';
import { toast, ToastContainer } from 'react-toastify';

const Home = () => {
    const currentUser = AuthService.getUser();
    const [posts, setPosts] = useState([]);
    const alert = useAlert();

    useEffect(() => {
        function getPosts() {
            PostService.getPosts()
                .then((res) => {
                    setPosts(res);
                    console.log(res);
                })
                .catch(error => console.log(error))
        }
        return getPosts();
    }, [])
    const likePosts = (id) => {
        const dataId = {
            postId: id
        }
        PostService.onLikePosts(dataId)
            .then(res => {
                const newData = posts?.map(post => {
                    if(post._id === res._id){
                        return res;
                    } else {
                        return post;
                    }
                })
                setPosts(newData)
            })
            .catch(error => console.log(error));
    }

    const unLikePosts = (id) => {
        const dataId = {
            postId: id
        }
        PostService.onUnLikePosts(dataId)
        .then((res) => {
            console.log('Unliked');
            const newData = posts?.map(post => {
                if(post._id === id) {
                    return res;
                } else {
                    return post;
                }
            })
            setPosts(newData);
        })
        .catch(error => console.log(error));
    }

    const makeComments = (commentText, id) => {
        const data = {
            postId: id,
            text: commentText
        }
        PostService.onMakeComments(data)
        .then((results) => {
            console.log(results);
            const newData = posts?.map(res => {
                if(res._id === id){
                    return results
                } else {
                    return res
                }
            })
            setPosts(newData)
        })
        .catch(error => console.log(error));
    }

    const deletePost = (id) => {
        PostService.onDeletePosts(id)
            .then((response) => {
                toast.success('Successfully Deleted');
                console.log(response);
                const newData = posts?.filter(item => {
                    return item._id !== id
                })
                setPosts(newData)
            })
            .catch(error => console.log(error));
    }

    return (
        <div className="home">
            <Navbar currentUser={currentUser} />
            <HomeWrapper>
                <SubPosts>
                    <div className="sub-posts-content">
                        {SubPostsData?.results?.map(sub => (
                            <div className="sub-image-container" key={sub.id}>
                                <img className="sub-image" src={sub.image} alt="placeholder" width="600" height="400" />
                            </div>
                        ))}
                    </div>
                </SubPosts>
                <MainPosts>
                    <div className="post-content">
                        {posts?.map(post => (
                            <div className="card" key={post._id}>
                                <button onClick={() => deletePost(post._id)}>Delete</button>
                                <a href="">{post.postedBy.name}</a>
                                <div className="img-container">
                                    <img src={post.photo} alt={post.title} className="img-thumbnail" width="600" height="400" />
                                </div>
                                <div className="author-flex">
                                    <div className="title-author-section">
                                        <h4 className="padding">
                                            {post.title}
                                            <hr />
                                        </h4>
                                    </div>
                                    <div className="padding">
                                        <i className="fas fa-thumbs-up" onClick={() => likePosts(post._id)} />
                                        <i className="fas fa-thumbs-down" onClick={() => unLikePosts(post._id)} />
                                    </div>

                                    <span className="padding">{post?.likes?.length} likes</span>
                                    {post?.comments.map(comment => (
                                        <h4 key={comment._id}><span style={{fontWeight:"500", padding: '20px'}}>{comment?.postedBy?.name}</span>{' '}{comment?.text}</h4>
                                    ))}
                                </div>
                                <form className="comment-form" onSubmit={(evt) => {evt.preventDefault()
                                    makeComments(evt.target[0].value, post._id)}}
                                >
                                    <input className="comment-input" type="text" placeholder="Add comments" />
                                </form>
                            </div>
                        ))}
                    </div>
                </MainPosts>
            </HomeWrapper>
            <ToastContainer />
        </div>
    );
}
export default Home;
