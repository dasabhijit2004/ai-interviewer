import { Phone, Video } from 'lucide-react'
import Link from 'next/link'
import React from 'react'

const CreateOptions = () => {
    return (
        <>
            <div className='grid grid-cols-2 gap-5'>
                <Link href={'/dashboard/create-interview'} className='p-5 bg-white border border-gray-200 rounded-xl'>
                    <Video className='text-primary p-3 bg-blue-50 rounded-sm h-12 w-12' />
                    <h3 className='text-lg font-bold'>Create New Interview</h3>
                    <p className='text-base text-gray-600'>Create AI interviews and schedule them with candidates</p>
                </Link>
                <div className='p-5 bg-white border border-gray-200 rounded-xl'>
                    <Phone className='text-primary p-3 bg-blue-50 rounded-sm h-12 w-12' />
                    <h3 className='text-lg font-bold'>Create Phone Screening Call</h3>
                    <p className='text-base text-gray-600'>Schedule phone screening calls with potential candidates</p>
                </div>
            </div>
        </>
    )
}

export default CreateOptions