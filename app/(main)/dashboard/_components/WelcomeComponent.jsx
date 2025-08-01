'use client'

import { useUser } from '@/app/provider'
import Image from 'next/image'
import React from 'react'

const WelcomeComponent = () => {

    const { user } = useUser()

    return (
        <>
            <div className='bg-white p-5 rounded-xl flex items-center justify-between border border-gray-200'>
                <div>
                    <h1 className='text-2xl font-bold'>Welcome Back, {user?.name}!</h1>
                    <h3 className='text-gray-500 font-medium'>AI-driven Interviews, Hassle-Free Hiring</h3>
                </div>
                {user && <Image src={user?.picture} alt="user avatar" height={50} width={50} className='rounded-full' />}
            </div>
        </>
    )
}

export default WelcomeComponent