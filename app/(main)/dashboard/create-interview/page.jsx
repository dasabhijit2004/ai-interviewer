'use client'

import { ArrowLeftIcon } from 'lucide-react'
import { useRouter } from 'next/navigation'
import React, { useState, useEffect } from 'react'
import Form from './_components/Form'
import { Progress } from '@/components/ui/progress'
import QuestionsList from './_components/QuestionsList'
import toast from 'react-hot-toast'

const Page = () => {
  const router = useRouter();
  const [step, setStep] = useState(1);

  // 1. Initialize formData with a default structure to prevent errors
  const [formData, setFormData] = useState({
    jobPosition: '',
    jobDescription: '',
    duration: '',
    type: [],
  });

  // 2. Use useEffect to correctly log the state after it updates
  useEffect(() => {
    console.log("Updated FormData: ", formData);
  }, [formData]);

  const onHandleInputChange = (field, value) => {
    setFormData(prev => ({
      ...prev,
      [field]: value
    }));
  };

  // 3. Create a handler for the form's submit action
  const handleGenerateQuestions = () => {
    console.log("Proceeding to next step with data:", formData);
    // You can add validation here before proceeding
    if (formData.jobPosition && formData.jobDescription && formData.duration && formData.type.length > 0) {
      setStep(2);
    } else {
      toast.error("All fields required")
    }
  };

  return (
    <div className='mt-10 px-10 md:px-24 lg:px-44 xl:px-56'>
      <div className='flex items-center gap-5'>
        {/* Allow going back a step if not on the first step */}
        <ArrowLeftIcon
          onClick={() => step === 1 ? router.back() : setStep(step - 1)}
          className='cursor-pointer'
        />
        <h2 className='text-2xl font-bold py-5'>Create New Interview</h2>
      </div>
      <Progress value={step * 33.33} className='my-3' />

      {/* 4. Conditionally render the form for Step 1 */}
      {step === 1 && (
        <Form
          formData={formData}
          onHandleInputChange={onHandleInputChange}
          onSubmit={handleGenerateQuestions}
        />
      )}

      {/* Placeholder for Step 2 */}
      {step === 2 && (
        <QuestionsList formData={formData} />
      )}
    </div>
  );
}

export default Page;