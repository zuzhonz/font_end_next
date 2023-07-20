import React from 'react';
import HeaderLayout from './HeaderLayout';
import FooterLayout from './FooterLayout';

const MainLayout = ({children}:{children:React.ReactNode}) => {
    return (
        <div className='w-full h-screen bg-[#fbf1d3] overflow-auto '>
            <HeaderLayout/>
            <main className='min-h-[100vh]'>
            {children}
            </main>
            <FooterLayout/>
        </div>
    );
};

export default MainLayout;