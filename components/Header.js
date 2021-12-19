import Image from 'next/image';
import React from 'react';
import { useMoralis, useMorilis } from 'react-moralis';
import Avatar from './avatar';
import ChangeUsername from './ChangeUsername';

function Header() {
    const { user } = useMoralis();
    return (
        <div className='sticky top-0 p-5 z-50 bg-black shadow-sm
        border-b-2 border-pink-700 text-pink-500'>
            <div className='grid grid-cols-5 lg:grid-cols-6
            items-end lg:items-center'>   
            <div className='relative h-24 w-24
             mx-auto hidden lg:inline-grid'>
                <Image 
                    src="/shib.jpg"
                    layout='fill'
                    className='rounded-full object-cover bg-yellow-300 '
                />
            </div>

            <div className='col-span-4 text-left lg:text-center'>
                <div className='relative h-48 w-48 
                lg:mx-auto border-pink-500 border-8
                rounded-full'>
                    <Avatar logoutOnPress />
                </div>
                <h1 className="text-3xl">Welcome to the Metaverse</h1>
                <h1 className='text-4xl font-bold truncate'>{user.getUsername()}</h1>
                <ChangeUsername />
            </div>
            </div>
        </div>
    )
}

export default Header
