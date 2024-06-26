import React from 'react';
import "./Medical_History.css";

function Medical_History({prescriptionData}) {

    return (
        <div className='Medical_History_Container'>
            <div className='Medical_History_inner_Container'>
                <h2 className='Medical_History_title'>Medical History</h2>
                <div className='Medical_History_outer_Card'>
        {prescriptionData.map((prescription, index) => (

                    <div className='Medical_History_Table'>
                        <div className='Medical_History_Card'>
                            <div className='Medical_History_Card_Header'>
                                <h2 className='Medical_History_Header'>Consultation</h2>
                                <b>{prescription?.Date}</b>
                            </div>
                            <div className='Medical_History_Body'>
                                Consultation with Dr. {prescription?.Doctor?.user?.username}
                            </div>
                        </div>
                    </div>
                ))}

                </div>
            </div>
        </div>
    )
}

export default Medical_History
