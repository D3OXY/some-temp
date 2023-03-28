import React, { useState, SetStateAction, Dispatch } from 'react';
import { CgMore } from 'react-icons/cg';

interface Props {
    setText: Dispatch<SetStateAction<string>>;
}

interface CardProps {
    name: string;
}

export default function FileUpload({ setText }: Props) {
    const [files, setFiles] = useState<File[]>([]);
    if (files.length > 0) setText('1.1  Upload your Table with product-data or Select a Previous CSV with all Settings')

    const handleDrop = (e: React.DragEvent<HTMLDivElement>) => {
        e.preventDefault();
        const fileList = Array.from(e.dataTransfer.files);
        setFiles((prev) => [...prev, ...fileList]);
    };

    const handleDrag = (e: React.DragEvent<HTMLDivElement>) => {
        e.preventDefault();
    }

    const handleFileInput = (e: React.ChangeEvent<HTMLInputElement>) => {
        e.preventDefault();
        const fileList = Array.from(e.target.files as FileList);
        setFiles((prev) => [...prev, ...fileList]);
    };

    const handleUpload = () => {
        const fileInput = document.querySelector('input[type="file"]') as HTMLInputElement;
        fileInput?.click();
    };

    return (
        <>
            <div className="relative border-2 border-[#8550DA] border-dashed rounded-lg p-4 h-60 flex flex-col items-center justify-center" onDrop={handleDrop} onDragOver={handleDrag} onDragLeave={handleDrag}>
                <input type="file" multiple className="hidden" onChange={handleFileInput} />
                <div className="text-gray-500 font-Inter font-semibold">
                    Upload .xlsx, .xls or .csv file
                </div>
                <button className="upload-button my-4" onClick={handleUpload}>
                    Select File
                </button>
            </div>
            <div className='overflow-y-scroll h-64 ' >
                {files.map(({ name }, i) => (
                    <Card key={i} name={name} />
                ))}
            </div>
        </>
    );
};


function Card({ name }: CardProps) {
    return (
        <div className="bg-white rounded-lg shadow-lg border-[#DDE4ED] border-2 p-6 flex flex-row mt-4 items-center">
            <div className='flex flex-row justify-start'>
                <input type="checkbox" className='rounded-full w-6 h-6 mx-2' />
                <div className="text-lg font-medium font-Poppins text-black ">{name}</div>
            </div>
            <div className='flex flex-1'></div>
            <div className='flex flex-row justify-end'>
                <CgMore className='w-10 h-10' />
            </div>
        </div>
    );
}
