import React , {useState} from "react";
import './DocumentUploader.css'

const DocumentUploader = () => {
    const [selectedFile, setSelectedFile] = useState(null);

    const handleFileChange = (e) => {
        setSelectedFile(e.target.files[0]);
    };

    return (
        <div>
            <input type="file" onChange={handleFileChange} />
            {selectedFile && <p>Selected File: {selectedFile.name}</p>}
      </div>  
    );

}

export default DocumentUploader;