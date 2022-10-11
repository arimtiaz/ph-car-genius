import React from 'react';
import './Service.css'

const Service = ({service}) => {
    const {name, img, description, price} = service;

    return (
        <div className='service'>
            <img src={img} alt="" />
            <h2>Service: {name}</h2>
            <p>{description}</p>
        </div>
    );
};

export default Service;