import React, { useState } from "react";
import { Document, Page } from 'react-pdf';

const DocumentViewer = ({documentUrl}) => {
    const [numPages, setNumPages] = useState(null);

    const onDocumentLoadSuccess = ({ numPages }) => {
        setNumPages(numPages);
    };
    return (
        <div>
            <h2>View Document</h2>
        <Document  
         file={documentUrl}
        onLoadSuccess={onDocumentLoadSuccess}>
                {Array.from(new Array(numPages), (el, index) => (
          <Page key={`page_${index + 1}`} pageNumber={index + 1} />
        ))}
        </Document>
        </div>
        
    );
}

export default DocumentViewer;