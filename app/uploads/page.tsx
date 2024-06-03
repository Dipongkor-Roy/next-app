"use client";

import React, { useState } from 'react';
import { CldUploadWidget ,CldImage} from 'next-cloudinary';
 
interface CloudinaryResult {
    public_id:string;

}
const UploadPage = () => {
    const [publicId,setPublicId]=useState("");
    return (
    <div className='text-center'>
    {publicId && (
        <CldImage
          src={publicId}
          width={270}
          height={180}
          alt="img"
        />)}

    <div className='text-center'>Welcome To Upload Page</div>
       <div className='mt-3 text-center'>
       <CldUploadWidget uploadPreset="shcsvpr2" onUpload={(result, widget) => {
       if(result.event!=="success") return;
       const info=result.info as CloudinaryResult;
       setPublicId(info.public_id)
        }}>
        
  {({ open }) => {
    return (
      <button className='btn btn-primary ' onClick={() => open()}>
        Upload an Image
      </button>
    );
  }}
</CldUploadWidget>
       </div>

</div>
    );
};

export default UploadPage;