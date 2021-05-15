import React from 'react';
import feature from '../../../images/featuredental-img.png'
const DentalFeatures = () => {
    return (
        <section className="dentalFeatures-container pt-5">
            <div className="d-flex justify-content-center pt-5">
                <div className="row w-75">
                    <div className="col-md-5">
                        <img src={feature} alt="" className="img-fluid" style={{ height: '500px' }} />
                    </div>
                    <div className="col-md-7">
                        <h3>Exceptional Dental Care, <br /> on Your Turms</h3>
                        <p className="pt-4">Lorem ipsum dolor sit amet consectetur adipisicing elit. Nihil optio ipsa harum perspiciatis veniam ratione qui eligendi corrupti. Ut, magnam, aperiam odio veniam sed esse error suscipit autem explicabo asperiores nesciunt iusto? Tempore, nihil ex. Totam tempora dolores doloribus illo, vero velit qui expedita, veritatis dignissimos nam unde deserunt accusantium.</p>
                        <button>Read More</button>
                    </div>
                </div>
            </div>
        </section>
    );
};

export default DentalFeatures;