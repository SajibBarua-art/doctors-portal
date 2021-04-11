import React from 'react';

const Testimonial = (props) => {
    const {quote,name,from ,img} = props.testimonial;
    return (
        <div className="card shadow-sm col-md-4">
            <div className="card-body">
                <p className="card-text" style={{textAlign:'justify'}}>{quote}</p>
            </div>
            <div className="card-footer d-flex align-items-center">
                <img className="mx-3" src={img} alt="" width="60"/>
                <div>
                    <h6 style={{color: '#1CC7C1'}}>{name}</h6>
                    <p className="m-0 text-secondary">{from}</p>
                </div>
            </div>
       </div>
    );
};

export default Testimonial;