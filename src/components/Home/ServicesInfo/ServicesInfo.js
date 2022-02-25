import React from 'react';

const ServicesInfo = ({ service }) => {
    return (
        <div className="col-md-4 text-center">
        <div className="border p-3">
            <img style={{height:'50px', color: 'red'}} src={service.img} alt="" className="img-fluid mt-2" />
            <p className="mt-2">{service.name}</p>
            <small>Lorem ipsum dolor sit amet consectetur adipisicing elit. Obcaecati hic dolores iusto aut assumenda corrupti soluta aperiam deserunt nisi impedit.</small>
        </div>
        </div>
    );
};

export default ServicesInfo;