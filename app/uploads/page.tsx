"use client";

import React from 'react';
import { CldUploadWidget } from 'next-cloudinary';
 
const uploadPage = () => {
    return (
    <>
    <div className='text-center'>Welcome To Upload Page</div>
       <div className='mt-3 text-center'>
       <CldUploadWidget uploadPreset="shcsvpr2">
  {({ open }) => {
    return (
      <button className='btn btn-primary ' onClick={() => open()}>
        Upload an Image
      </button>
    );
  }}
</CldUploadWidget>
       </div>

</>
    );
};

export default uploadPage;