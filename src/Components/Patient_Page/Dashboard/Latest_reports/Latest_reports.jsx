import React from 'react';
import "./Latest_reports.css";
import ReportIcon from "./icons/report";
import DownloadIcon from "./icons/download";
import ViewIcon from "./icons/view";

function Latest_reports() {

    return (
        <div className='Latest_reports_Container'>
            <div className='Latest_reports_inner_Container'>
                <h2 className='Latest_reports_title'>Latest reports</h2>
                <div className='Latest_reports_details'>
                    <div className='Latest_reports_row'>
                        <div className='Latest_reports_row_left'>
                            <ReportIcon />
                            <span className='Latest_reports_row_left_type'>X-ray reports</span>
                        </div>
                        <div className='Latest_reports_row_right'>
                            <DownloadIcon />
                            <ViewIcon />
                        </div>
                    </div>
                    <div className='Latest_reports_row'>
                        <div className='Latest_reports_row_left'>
                            <ReportIcon />
                            <span className='Latest_reports_row_left_type'>X-ray reports</span>
                        </div>
                        <div className='Latest_reports_row_right'>
                            <DownloadIcon />
                            <ViewIcon />
                        </div>
                    </div>
                    <div className='Latest_reports_row'>
                        <div className='Latest_reports_row_left'>
                            <ReportIcon />
                            <span className='Latest_reports_row_left_type'>X-ray reports</span>
                        </div>
                        <div className='Latest_reports_row_right'>
                            <DownloadIcon />
                            <ViewIcon />
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Latest_reports
