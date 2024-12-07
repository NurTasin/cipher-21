"use client";
import React, { useState, ChangeEvent } from 'react';
import imageCompression from 'browser-image-compression';

// Type for the response from ImgBB
interface ImgBBResponse {
  success: boolean;
  data: {
    url: string;
  };
  error?: {
    message: string;
  };
}

const ImageUploadToImgBB: React.FC = () => {
  const [selectedFile, setSelectedFile] = useState<File | null>(null);

  const handleFileChange = (e: ChangeEvent<HTMLInputElement>): void => {
    if (e.target.files) {
      setSelectedFile(e.target.files[0]);
    }
  };

  const handleUpload = async (): Promise<void> => {
    if (!selectedFile) {
      console.error('No file selected');
      return;
    }

    try {
      // Compression options
      const options = {
        maxSizeMB: 1, // Max file size in MB
        maxWidthOrHeight: 1920, // Max width or height in pixels
        useWebWorker: true,
        initialQuality: 0.75, // Compression quality
      };

      // Compress the image
      const compressedFile = await imageCompression(selectedFile, options);
      console.log('Compressed file size:', compressedFile.size / 1024, 'KB');

      // Prepare the form data for ImgBB
      const formData = new FormData();
      formData.append('image', compressedFile);

      // Replace with your ImgBB API key
      const url = `https://api.imgbb.com/1/upload?key=42992afb54cbf0c84ec7ad7f882a1f51`;

      // Upload the image
      const response = await fetch(url, {
        method: 'POST',
        body: formData,
      });

      // Parse the response
      const result: ImgBBResponse = await response.json();

      if (result.success) {
        console.log('ImgBB URL:', result.data.url);
      } else {
        console.error('Error uploading to ImgBB:', result.error?.message);
      }
    } catch (error) {
      console.error('Error during upload:', error);
    }
  };

  return (
    <div>
      <h1>Upload Image to ImgBB</h1>
      <input type="file" accept="image/*" onChange={handleFileChange} />
      <button onClick={handleUpload}>Upload</button>
    </div>
  );
};

export default ImageUploadToImgBB;
