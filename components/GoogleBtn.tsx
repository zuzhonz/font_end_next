import { GoogleLogin } from "@react-oauth/google";
import React, { useState } from "react";
import { getGoogleAccount } from '../api/list/google';

const GoogleBtn = () => {
  const responseMessage = async (response:any) => {
     const token = response.credential 
     const formData = new FormData();
     formData.append("token",token)
     const data =  await getGoogleAccount(formData);  
     console.log(data.data);
     
  };

 
  return (
    <div className="w-[240px] m-auto"  >
      <GoogleLogin onSuccess={responseMessage}   />
    </div>
  );
};

export default GoogleBtn;
