import { GoogleLogin } from "@react-oauth/google";
import React, { useState } from "react";
import { getGoogleAccount } from '../api/list/google';

const GoogleBtn = () => {
  const responseMessage = async (response:any) => {
     const data =  await getGoogleAccount();  
     
  };

 
  return (
    <div className="w-[240px]  rounded-full m-auto">
      <GoogleLogin onSuccess={responseMessage} />
    </div>
  );
};

export default GoogleBtn;
