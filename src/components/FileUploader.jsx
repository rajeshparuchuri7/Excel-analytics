import React, { useCallback, useState } from 'react';
import { useDropzone } from 'react-dropzone';
import { Upload, File, Check, AlertCircle } from 'lucide-react';
import { motion } from 'framer-motion';
import * as XLSX from 'xlsx';

const FileUploader = ({ onDataParsed }) => {
  const [uploadStatus, setUploadStatus] = useState('idle'); // 'idle' | 'uploading' | 'success' | 'error'
  const [errorMessage, setErrorMessage] = useState('');

  const onDrop = useCallback((acceptedFiles) => {
    const file = acceptedFiles[0];
    if (file) {
      setUploadStatus('uploading');

      if (!file.name.endsWith('.xlsx') && !file.name.endsWith('.xls')) {
        setUploadStatus('error');
        setErrorMessage('Please upload an Excel file (.xlsx or .xls)');
        return;
      }

      const reader = new FileReader();

      reader.onload = (e) => {
        try {
          const data = e.target.result;
          const workbook = XLSX.read(data, { type: 'array' });
          const sheetName = workbook.SheetNames[0];
          const worksheet = workbook.Sheets[sheetName];
          const parsedData = XLSX.utils.sheet_to_json(worksheet, { header: 1 });

          if (!Array.isArray(parsedData) || parsedData.length === 0) {
            throw new Error('The Excel file is empty or improperly formatted.');
          }

          onDataParsed(parsedData, file.name);
          setUploadStatus('success');
        } catch (error) {
          console.error('Error parsing Excel file:', error);
          setUploadStatus('error');
          setErrorMessage('Error parsing Excel file. Please check the format.');
        }
      };

      reader.onerror = () => {
        setUploadStatus('error');
        setErrorMessage('Error reading file');
      };

      reader.readAsArrayBuffer(file);
    }
  }, [onDataParsed]);

  const { getRootProps, getInputProps, isDragActive } = useDropzone({
    onDrop,
    accept: {
      'application/vnd.ms-excel': ['.xls'],
      'application/vnd.openxmlformats-officedocument.spreadsheetml.sheet': ['.xlsx']
    },
    maxFiles: 1
  });

  const resetUploader = () => {
    setUploadStatus('idle');
    setErrorMessage('');
  };

  return (
    <div className="w-full max-w-2xl mx-auto">
      {uploadStatus === 'success' ? (
        <motion.div
          initial={{ opacity: 0, y: 10 }}
          animate={{ opacity: 1, y: 0 }}
          className="bg-green-50 dark:bg-green-900/20 border border-green-200 dark:border-green-900 rounded-lg p-6 text-center"
        >
          <div className="flex justify-center mb-4">
            <div className="rounded-full bg-green-100 dark:bg-green-900/30 p-3">
              <Check size={24} className="text-green-600 dark:text-green-400" />
            </div>
          </div>
          <h3 className="text-lg font-medium text-green-800 dark:text-green-300 mb-2">File Uploaded Successfully!</h3>
          <p className="text-green-700 dark:text-green-400 mb-4">Your Excel file has been processed and is ready for analysis.</p>
          <button
            onClick={resetUploader}
            className="px-4 py-2 bg-green-600 hover:bg-green-700 text-white rounded-md transition-colors"
          >
            Upload Another File
          </button>
        </motion.div>
      ) : uploadStatus === 'error' ? (
        <motion.div
          initial={{ opacity: 0, y: 10 }}
          animate={{ opacity: 1, y: 0 }}
          className="bg-red-50 dark:bg-red-900/20 border border-red-200 dark:border-red-900 rounded-lg p-6 text-center"
        >
          <div className="flex justify-center mb-4">
            <div className="rounded-full bg-red-100 dark:bg-red-900/30 p-3">
              <AlertCircle size={24} className="text-red-600 dark:text-red-400" />
            </div>
          </div>
          <h3 className="text-lg font-medium text-red-800 dark:text-red-300 mb-2">Upload Failed</h3>
          <p className="text-red-700 dark:text-red-400 mb-4">{errorMessage}</p>
          <button
            onClick={resetUploader}
            className="px-4 py-2 bg-red-600 hover:bg-red-700 text-white rounded-md transition-colors"
          >
            Try Again
          </button>
        </motion.div>
      ) : (
        <div
          {...getRootProps()}
          className={`border-2 border-dashed rounded-lg p-8 text-center cursor-pointer transition-colors ${
            isDragActive 
              ? 'border-primary-500 bg-primary-50 dark:bg-primary-900/20' 
              : 'border-gray-300 dark:border-gray-700 hover:border-primary-400 dark:hover:border-primary-600'
          }`}
        >
          <input {...getInputProps()} />
          <div className="flex flex-col items-center">
            {uploadStatus === 'uploading' ? (
              <div className="text-center">
                <div className="inline-block animate-spin rounded-full h-12 w-12 border-4 border-primary-500 border-t-transparent mb-4"></div>
                <p className="text-gray-600 dark:text-gray-300">Processing your file...</p>
              </div>
            ) : (
              <>
                <div className="mb-4 rounded-full bg-primary-100 dark:bg-primary-900/30 p-4">
                  {isDragActive ? (
                    <File size={36} className="text-primary-600 dark:text-primary-400" />
                  ) : (
                    <Upload size={36} className="text-primary-600 dark:text-primary-400" />
                  )}
                </div>
                <p className="mb-2 text-lg font-medium text-gray-700 dark:text-gray-200">
                  {isDragActive ? 'Drop your Excel file here' : 'Upload your Excel file'}
                </p>
                <p className="mb-4 text-sm text-gray-500 dark:text-gray-400">
                  Drag and drop, or click to select
                </p>
                <p className="text-xs text-gray-500 dark:text-gray-400">
                  Supported formats: .xlsx, .xls
                </p>
              </>
            )}
          </div>
        </div>
      )}
    </div>
  );
};

export default FileUploader;
