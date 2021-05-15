import React from 'react';
import PrescriptionsTable from '../PrescriptionsTable/PrescriptionsTable';
import Sidebar from '../Sidebar/Sidebar';

const Prescriptions = () => {
    return (
        <div>
            <section>
                <div className="container-fluid">
                    <div className="row">
                        <div className="col-md-2 sidebar ">
                            <div className="mt-5">
                                <Sidebar></Sidebar>
                            </div>
                        </div>
                        <div className="col-md-10">
                            <div className="row  p-3">
                                <h6 className="p-4"> Prescriptions</h6>
                                <div className="main bg-light m-2">
                                    <div className="d-flex">
                                        <p>All Prescriptions </p>
                                        <input type="date" className="ms-auto" />
                                    </div>
                                    <PrescriptionsTable></PrescriptionsTable>
                                </div>

                            </div>

                        </div>
                    </div>

                </div>
            </section>
        </div>
    );
};

export default Prescriptions;