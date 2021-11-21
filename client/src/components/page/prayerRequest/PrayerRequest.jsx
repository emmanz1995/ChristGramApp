import React, { useState, useEffect } from 'react';
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import Navbar from '../../layout/navbar/Navbar';
import { useHistory, Link } from 'react-router-dom';
import { PrayerRequestWrapper, PrayerReqBanner, MainBody, SmNav } from './PrayerRequestStyles';
import AuthService from '../../../services/authService';
import { PrayerReqService } from '../../../services/prayerReqService';
import Card from '../../layout/card/Card';
import CreatePrayerReq from '../createPrayerReq/CreatePrayerReq';

const PrayerRequest = () => {
    const currentUser = AuthService.getUser();
    const [prayers, setPrayers] = useState('');
    const [isLoading, setIsLoading] = useState(false);
    const [show, setShow] = useState(false);
    function handleShow() {
        setShow(true);
    }
    function handleClose() {
        setShow(false);
    }
    useEffect(() => {
        PrayerReqService.getMyPrayerReq()
            .then((results) => {
                if(!results) {
                    return {}
                } else {
                    setPrayers(results)
                    setIsLoading(true);
                    console.log(results);
                }
            })
            .catch(error => {
                console.log(error);
                setIsLoading(false);
            });
    }, [])
    const deletePrayerReq = (id) => {
        PrayerReqService.onDeletePrayerReq(id)
            .then((results) => {
                if(!results) {
                    return null
                } else {
                    toast.dark(`Prayer request successfully`);
                    const deletePrayer = prayers.filter(prayer => {
                       return prayer._id !== id
                    })
                    setPrayers(deletePrayer);
                }
            })
            .catch(error => {
                console.log(error);
            })
    }
    return (
        <div className="prayer-request">
            <Navbar currentUser={currentUser} />
            <PrayerRequestWrapper>
                <PrayerReqBanner>
                    <div className="main-banner-area">
                        <div className="user-info">
                           <h2>Welcome {currentUser.user.name}</h2>
                            <p>Denomination: {currentUser.user.denomination}</p>
                            <p>email Address: {currentUser.user.email}</p>
                            <p>ID no: {currentUser.user._id}</p>
                        </div>
                        <SmNav>
                            <ul>
                                <CreatePrayerReq show={show} handleClose={handleClose} />
                                <li><Link to="#" onClick={handleShow}>Create Prayer Request</Link></li>
                                <li><Link to="/createpost">Create Post</Link></li>
                                <li><Link to="/home">Home</Link></li>
                            </ul>
                        </SmNav>
                    </div>
                </PrayerReqBanner>
                <MainBody>
                    <div className="prayer-req-area">
                        {prayers?.length > 0 ? prayers?.map(({ title, description, _id, postedBy }) => (
                            <Card key={_id} title={title} description={description} _id={_id} postedBy={postedBy} deletePrayerReq={deletePrayerReq} />
                        )): <p className="no-prayer-found">No Prayers found</p>}
                    </div>
                </MainBody>
            </PrayerRequestWrapper>
            <ToastContainer />
        </div>
    )
}

export default PrayerRequest;
