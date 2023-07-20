import { getGoogleAccount, googleMe } from "@/api";
import { GoogleLogin } from "@react-oauth/google";
import React, { useEffect, useState } from "react";
const Cookies = require("js-cookie");
import { v4 } from "uuid";
import { useRouter } from 'next/navigation'


const GoogleBtn = () => {

  const [check, setCheck] = useState(false);
  const router = useRouter()

  const responseMessage = async (response: any) => {
    const token = response.credential;
    const formData = new FormData();
    formData.append("token", token);
    const data2 = await getGoogleAccount(formData);
    if (data2) {
      Cookies.set("google_auth", v4());
      setCheck(true);
      router.push("/")
    }
  };

  const getMe = async () => {
    try {
      const data = await googleMe();
    } catch (err) {
      console.log("err");
    }
  };

  useEffect(() => {
    getMe();
  }, [check]);

  return (
    <div className="w-[240px] m-auto">
      <GoogleLogin onSuccess={responseMessage} />
    </div>
  );
};

export default GoogleBtn;
