'use client'

import { ArrowLeftIcon } from 'lucide-react'
import { useRouter } from 'next/navigation'
import React, { useState } from 'react'
import Form from './_components/Form'
import { Progress } from '@/components/ui/progress'

const page = () => {

  const router = useRouter()
  const [step, setStep] = useState(1)

  return (
    <div className='mt-10 px-10 md:px-24 lg:px-44 xl:px-56'>
      <div className='flex items-center gap-5'>
        <ArrowLeftIcon onClick={() => router.back()} className='cursor-pointer'/>
        <h2 className='text-2xl font-bold py-5'>Create New Interview</h2>
      </div>
      <Progress value={step * 33.33} className='my-3'/>
      <Form />
    </div>
  )
}

export default page