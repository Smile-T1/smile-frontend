import React from 'react';
import "./MedicalRecords.css";
import PDFIcon from './icons/PDFIcon';
import WordIcon from './icons/WordIcon';
import AttachmentIcon from './icons/AttachmentIcon';
import DownloadIcon from '../Dashboard/Latest_reports/icons/download';
import ViewIcon from '../Dashboard/Latest_reports/icons/view';

function MedicalRecords() {
  return (
    <div className='MedicalRecordbox'>
      <div style={{ display: 'flex' }}>
        <div className='MedicalRecordTimeDate'>
          <h1 className='MedicalRecordDate'>25 March, 2023</h1>
          <span className='MedicalRecordTime'>11:45AM</span>
        </div>
        <div className='MedicalRecordContent'>
          <div className='MedicalRecordInnerContent'>
            <h3 className='MedicalRecordContainer'>Consultation or Surgery or Reports or Medications</h3>
            <p>Consultation with Dr. ABC</p>
            <span style={{
              color: '#555555',
              fontSize: '14px',
              lineHeight: '19px'
            }}>Retinal detachment surgery operated by </span>
            <h2 style={{
              fontSize: '14px',
              lineHeight: '19px'
            }}>Dr. XYZ</h2>
            <span style={{
              fontSize: '14px',
              lineHeight: '19px'
            }}
            >X ray reports</span>
            <div className='documents-container'>
              <PDFIcon />
              <WordIcon />
            </div>
            <div className='attachment-container'>
              <div className='attachmentoverview'>
                <AttachmentIcon />
                <span style={{ color: '#555555' }}>2 attachments :</span>
              </div>
              <div className='downloadallfiles'>
                Download all files
                <DownloadIcon />
              </div>
              <div className='downloadallfiles'>
                View all files
                <ViewIcon />
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}

export default MedicalRecords
