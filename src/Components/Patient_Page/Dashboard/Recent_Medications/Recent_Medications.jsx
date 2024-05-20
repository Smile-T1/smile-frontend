import React from 'react';
import "./Recent_Medications.css";
import PlaceboMaxIcon from "./icons/PlaceboMax";

function Recent_Medications({Medication}) {

    return (
        <div className='Recent_Medications_Container'>
            <div className='Recent_Medications_inner_Conainer'>
                <h2 className='Recent_Medications_header'>Recent medications</h2>
                <div className='Recent_Medications_inner_box'>
                    <div className="Recent_Medications_row">
                        <div className='Recent_Medications_row_left'>
                            <PlaceboMaxIcon />
                            <span className='Recent_Medications_Name'>{Medication}</span>
                        </div>
                        <div className='Recent_Medications_row_right'>
                            <div className='Recent_Medications_dosage'>
                                <div>
                                    1
                                </div>
                                <span>-</span>
                                <div>
                                    0
                                </div>
                                <span>-</span>
                                <div>
                                    1
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Recent_Medications
