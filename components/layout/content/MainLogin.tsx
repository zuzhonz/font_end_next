import LoginForm from '@/components/FormLogin/loginForm';
import SigninForm from '@/components/FormLogin/signinForm';
import GoogleBtn from '@/components/GoogleBtn';
import React, { useState } from 'react';

const MainLogin = () => {
  const [tabs, setTabs] = useState(true);

    return (
        <section className="mt-[3%] ">
        <div className="mb-[100px]">
          <div className="title-form w-auto  m-auto text-center">
            <span className="text-4xl font-Pacifico font-bold ">
              {tabs ? "Account Login" : "Account sign in"}
            </span>
          </div>
           { tabs ? <LoginForm /> : <SigninForm /> }
          <div className="relative flex py-5 items-center w-[500px] mt-[20px] m-auto"  onClick={() => {
            if (tabs) {
              setTabs(false);
            } else {
              setTabs(true);
            }
          }} >
            <div className="flex-grow border-[1px]  border-[#5e35b1]"></div>
            <span className="flex-shrink mx-4 text-gray-400">
              { tabs ? "sign up account click here  " : "Login in with " }
            </span>
            <div className="flex-grow border-[1px] border-[#5e35b1]"></div>
          </div>

          <GoogleBtn />
        </div>
       
      </section>
    );
};

export default MainLogin;