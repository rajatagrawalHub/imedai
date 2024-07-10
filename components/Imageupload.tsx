'use client'
import React, { useState } from 'react';
import { useDropzone } from 'react-dropzone';
import axios from 'axios';
import { Button } from './ui/button';
import { Progress } from './ui/progress'
import { PhotoIcon } from '@heroicons/react/24/solid'

const ImageUpload = () => {
    const [files, setFiles] = useState([]);

    const onDrop = (acceptedFiles) => {
        setFiles([...files, ...acceptedFiles]);
    };

    const handleClear = () => {
        setFiles([]);
    };

    const handleSubmit = async () => {
        const formData = new FormData();
        files.forEach((file) => formData.append('files', file));

        try {
            await axios.post('http://localhost:3000/api/upload', formData, {
                headers: {
                    'Content-Type': 'multipart/form-data',
                },
            });
            setFiles([]);
        } catch (error) {
            console.error('Error uploading files:', error);
        }
    };

    const { getRootProps, getInputProps } = useDropzone({ onDrop });

    return (
        <div className='border border-2 border-black rounded-lg p-4 w-[800px]'>
            <div className='py-4'>
                <h1 className='text-2xl font-bold text-[#204ea5]'>Upload Medical Images</h1>
                <p className='text-gray-500'>Upload Medical Images for Analysis</p>
            </div>
            <div className="flex h-[500px]  ">
                <div
                    {...getRootProps({ onClick: (e) => e.stopPropagation() })}
                    className="flex-1 border-2 border-dashed border-black flex flex-col items-center justify-center p-5 space-y-4 rounded-lg cursor-pointer w-1/2"
                >
                    <img src="/upload.jpg" alt="Upload Icon" className="w-50 h-50" draggable="false" />
                    <input {...getInputProps()} className="" />
                    <div className="text-center">Drag & drop files here</div>
                    <div>OR</div>
                    <Button className="bg-[#204ea5] text-white"  onClick={() => document.querySelector('input[type="file"]').click()}>Browse Files</Button>
                </div>
                <div className="flex-1 p-5 flex flex-col w-1/2">
                    <h3 className="mb-4 text-lg font-bold">Files</h3>
                    {files.length > 0 ? (
                        <ul className="flex-1 space-y-4 overflow-auto px-2 no-scrollbar">
                            {files.map((file, index) => (
                                <li key={index} className="border border-2 p-2 rounded-lg">
                                    <div className="flex items-center space-x-2">
                                        <PhotoIcon className="h-6 w-6" />
                                        <span className="flex-1 truncate">{file.name}</span>
                                    </div>
                                    <progress value={100} className="w-full mt-1" />
                                </li>
                            ))}
                        </ul>
                    ) : (
                        <div className="flex-1 flex items-center justify-center">
                            <img src="empty.svg" alt="No Files" className="w-full" draggable={false} />
                        </div>
                    )}
                    <div className="mt-4 flex justify-center space-x-4">
                        <Button className="bg-[#204ea5] text-white" onClick={handleSubmit}>Submit</Button>
                        <Button className="bg-[#204ea5] text-white" onClick={handleClear}>Clear</Button>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default ImageUpload;
