import React, { useState } from 'react';
import { CreatePrayerRequestWrapper } from './CreatePrayerReqStyles';
import { PrayerReqService } from '../../../services/prayerReqService';
import { toast } from 'react-toastify';

const CreatePrayerReq = ({ show, handleClose }) => {
    const [title, setTitle] = useState('');
    const [description, setDescription] = useState('');
    const showHideClassName = show ? 'modal display-block' : 'modal display-none';

    const handleSubmitRequest = () => {
        const formData = {
            title: title,
            description: description
        }
        PrayerReqService.onCreatePrayerReq(formData)
            .then((results) => {
                console.log('Success!!', results)
                toast.dark('Successfully submitted prayer Request!');
            })
    }
    return(
        <CreatePrayerRequestWrapper>
            <div className={showHideClassName}>
                <div className="main-modal">
                    <div className="background-form">
                        <form className="prayer-request-form" onSubmit={handleSubmitRequest}>
                            <div className="flex-title">
                                <h2>Create Prayer Request</h2>
                                <i className="fas fa-times-circle" onClick={handleClose} />
                            </div>
                            <input type="text" name="title" value={title} onChange={(evt) => setTitle(evt.target.value)} placeholder="Enter your Title" /><br />
                            <input type="text" name="title" value={description} onChange={(evt) => setDescription(evt.target.value)} placeholder="Enter your Description" /><br />
                            <button type="submit">Submit Request</button>
                        </form>
                    </div>
                    <button type="submit" className="close-btn" onClick={handleClose}>Close Form</button>
                </div>
            </div>
        </CreatePrayerRequestWrapper>
    )
}
export default CreatePrayerReq;
