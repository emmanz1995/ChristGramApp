import React from 'react';
import { CardWrapper, CardHeader, CardBody } from './CardStyles';

const Card = ({ title, description, _id, postedBy, deletePrayerReq }) => {
    return(
        <CardWrapper key={_id}>
            <CardHeader>
                <h3>{title}</h3>
                <button className="delete-btn" onClick={() => deletePrayerReq(_id)}>Delete</button>
            </CardHeader>
            <CardBody>
                <p>{description}</p>
                <p>Prayed by: {postedBy.name}</p>
            </CardBody>
        </CardWrapper>
    );
}

export default Card;
