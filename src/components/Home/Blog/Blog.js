import React from 'react';

const Blog = ({ blg }) => {
    return (
        <div className="col-md-6">
            <div className="shadow-none p-4 mb-5 bg-light rounded ">
                <div className="d-flex justify-content-center">
                    <div>
                        <img src={blg.img} alt="" className="img-fluid" />
                    </div>
                    <div className="p-3">
                        <p>{blg.name}</p>
                        <p>{blg.Date}</p>
                    </div>

                </div>
                <h4>{blg.title}</h4>
                <p className="text-sm-start">Lorem ipsum, dolor sit amet consectetur adipisicing elit. Asperiores id nulla quia modi pariatur incidunt, sint tempore ipsa quos alias fugiat similique esse voluptatibus placeat nobis ea quibusdam molestiae iure facere architecto cum nisi enim!</p>

            </div>
        </div>
    );
};

export default Blog;