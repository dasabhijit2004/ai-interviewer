'use client'

import { Button } from '@/components/ui/button'
import { Plus, Video } from 'lucide-react'
import { useRouter } from 'next/navigation'
import React, { useState } from 'react'

const LatestInterviewList = () => {

    const [interviewList, SetInterviewList] = useState([])
    const router = useRouter()

    return (
        <>
            <div>
                <h2 className='text-2xl font-bold py-5'>Previously Created Interviews</h2>
                {interviewList.length == 0 &&
                    <div className='p-5 flex flex-col items-center gap-3 bg-white rounded-xl border border-gray-200'>
                        <Video className='text-primary p-2 w-12 h-12 bg-blue-50 rounded-sm'/>
                        <h2>You don't have any interview created.</h2>
                        <Button onClick={() => router.push('/dashboard/create-interview')} className='cursor-pointer'><Plus />Create New Interview</Button>
                    </div>}
            </div>
        </>
    )
}

export default LatestInterviewList