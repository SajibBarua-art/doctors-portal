import React from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import './InfoCard.css';

const InfoCard = ({ info }) => {
    return (
        <div className='col-md-4 text-white info-card'>
            <div className={`d-flex justify-content-center align-items-center info-container info-${info.background} rounded`}>
                <div>
                    <FontAwesomeIcon className='info-icon me-3' icon={info.icon} />
                </div>
                <div>
                    <h6>{info.title}</h6>
                    <small>{info.description}</small>
                </div>
            </div>
        </div>
    );
};

export default InfoCard;