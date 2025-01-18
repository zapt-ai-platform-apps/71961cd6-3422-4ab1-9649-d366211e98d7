import React, { useState } from 'react';
import * as Sentry from '@sentry/browser';

export default function EvidenceSubmission() {
  const [files, setFiles] = useState([]);
  const [uploading, setUploading] = useState(false);

  const handleFileChange = (e) => {
    setFiles(e.target.files);
  };

  const handleUpload = async () => {
    console.log("Uploading evidence files");
    setUploading(true);
    try {
      // Simulate upload delay
      await new Promise(resolve => setTimeout(resolve, 1000));
      alert('Files uploaded!');
    } catch (error) {
      console.error(error);
      Sentry.captureException(error);
    } finally {
      setUploading(false);
    }
  };

  return (
    <div className="h-full">
      <h1 className="text-xl font-bold mb-4">Evidence Submission</h1>
      <input
        type="file"
        multiple
        onChange={handleFileChange}
        className="box-border p-2 mb-4"
      />
      <br />
      <button
        onClick={handleUpload}
        disabled={uploading || !files.length}
        className="cursor-pointer px-4 py-2 text-white bg-blue-600 rounded hover:bg-blue-700 disabled:bg-gray-400"
      >
        {uploading ? 'Uploading...' : 'Upload'}
      </button>
    </div>
  );
}