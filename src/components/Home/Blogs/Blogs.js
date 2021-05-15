import React from 'react';
import Blog from '../Blog/Blog';
import Khairul from '../../../images/Ellipse 2.png'
import Rakibul from '../../../images/Ellipse 3.png'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faArrowRight } from '@fortawesome/free-solid-svg-icons'
const blogData = [
    {
        name: 'Dr, Caudi',
        Date: 'Thu Jan 01 2020',
        title: '2 times of brush in a day can keep you healthy',
        img: Khairul
    },
    {
        name: 'Dr. john mitchel',
        Date: 'Thu Jan 01 2020',
        title: 'the tooth cancer is takking a challenge',
        img: Rakibul
    }
]
const Blogs = () => {
    return (
        <div className="row d-flex">
            <div className="text-center mb-5 mt-5 ">
                <h5>Our Blogs</h5>
                <h3>From Your Blog News</h3>
            </div>
            <div className="col-md-3 offset-md-1 shadow-none p-4 mb-5 bg-success rounded">
                <h5>Rashed Kabir</h5>
                <p>22 Jan 20221</p>
                <p>Check at least a doctor in a year for your teeth</p>
                <FontAwesomeIcon className="info-icon" icon={faArrowRight} />
            </div>
            <div className="col-md-7 ">
                <div className="row">
                    {
                        blogData.map(blg => <Blog blg={blg}></Blog>)
                    }
                </div>

            </div>
        </div>

    );
};

export default Blogs;