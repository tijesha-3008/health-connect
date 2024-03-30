import React, { useState, useEffect } from 'react';
import { useDropzone } from 'react-dropzone';
import './MedicalDocuments.css';
import mp from '../Assets/Medical-pres.svg';

function MedicalDocuments() {
  const [files, setFiles] = useState([]);

  useEffect(() => {
    const storedFiles = JSON.parse(localStorage.getItem('uploadedFiles')) || [];
    setFiles(storedFiles);
  }, []);

  const onDrop = (acceptedFiles) => {
    acceptedFiles.forEach((file) => {
      const reader = new FileReader();
      reader.onload = () => {
        const base64String = reader.result.split(',')[1];
        const newFile = { name: file.name, data: base64String };
        localStorage.setItem('uploadedFiles', JSON.stringify([...files, newFile]));
        setFiles([...files, newFile]);
      };
      reader.readAsDataURL(file);
    });
  };

  const removeFile = (index) => {
    const updatedFiles = [...files];
    updatedFiles.splice(index, 1);
    localStorage.setItem('uploadedFiles', JSON.stringify(updatedFiles));
    setFiles(updatedFiles);
  };

  const { getRootProps, getInputProps } = useDropzone({ onDrop });

  const renderFiles = () => {
    return files.map((file, index) => (
      <div key={index} className="viewing">
        <p className="filename">{file.name}</p>
        <button className='login view1' onClick={() => viewFile(file)}>View</button>
        <button className='login remove' onClick={() => removeFile(index)}>Remove</button>
      </div>
    ));
  };

  const viewFile = (file) => {
    window.open(`data:application/pdf;base64,${file.data}`, '_blank');
  };

  return (
    <div>
      <div className="whole">
        <div className="viewupload">
          <div {...getRootProps({ className: 'dropzone' })}>
            <div className='topheading'><p className=''>Upload and View Documents</p></div>
        
            <h2 className='instructions'>I. Upload Scanned Prescriptions here</h2>
            <button className='login temp'><input {...getInputProps()}/>Click here to select files</button>
            <h2 className='instructions'>II. Upload Scanned X-Rays here</h2>
            <button className='login temp'><input {...getInputProps()} />Click here to select files</button>
            <h2 className='instructions'>III. Upload Other Scanned Reports here</h2>
            <button className='login temp'><input {...getInputProps()} />Click here to select files</button>
          </div>
          <div>
            {renderFiles()}
          </div>
        </div>
        <div>
          <img src={mp} alt="" className="pres"></img>
        </div>
      </div>
      <div className="extra"></div>
    </div>
  );
}

export default MedicalDocuments;
