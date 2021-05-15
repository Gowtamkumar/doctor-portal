import React from 'react';

const PrescriptionsTable = () => {
    return (
        <div>
             <table class="table table-hover">
                <thead>
                    <tr>
                        <th scope="col">Sr.No</th>
                        <th scope="col">Name</th>
                        <th scope="col">Date</th>
                        <th scope="col">Contact</th>
                        <th scope="col">Prescription</th>
                        
                    </tr>
                </thead>
                <tbody>
                    <tr>
                        <th scope="row">1</th>
                        <td>Mark</td>
                        <td>Otto</td>
                        <td>@mdo</td>
                        <td>
                            <button className="btn btn-success">View</button>
                        </td>
                       
                    </tr>

                </tbody>
            </table>
        </div>
    );
};

export default PrescriptionsTable;