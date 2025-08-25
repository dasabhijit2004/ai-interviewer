'use client'

import { useUser } from '@/app/provider'
import { Button } from '@/components/ui/button'
import { supabase } from '@/services/supabaseClient'
import axios from 'axios'
import { ArrowRight, Loader2, LoaderIcon } from 'lucide-react'
import React from 'react'
import { useEffect } from 'react'
import { useState } from 'react'
import toast from 'react-hot-toast'
import { v4 as uuidv4 } from 'uuid'

const QuestionsList = ({ formData, onCreateLink }) => {

  const [loading, setLoading] = useState(true)

  const [questionList, setQuestionList] = useState();

  const { user } = useUser()

  const [saveLoading, setSaveLoading] = useState(false);

  useEffect(() => {
    if (formData) {
      generateQuestionList()
    }
  }, [formData])

  const generateQuestionList = async () => {
    setLoading(true)
    try {
      const result = await axios.post('/api/ai-model', {
        ...formData
      })
      console.log(result.data.content)
      const Content = result.data.content

      const FINAL_CONTENT = Content.replace('```json', '').replace('```', '')

      setQuestionList(JSON.parse(FINAL_CONTENT).interviewQuestions)
      setLoading(false)
    } catch (e) {
      toast.error("Server Error. Try again.")
      setLoading(false)
    }
  }

  const onFinish = async () => {
    setSaveLoading(true);
    const interview_id = uuidv4();
    const { data, error } = await supabase
      .from('Interviews')
      .insert([
        {
          ...formData,
          questionList: questionList,
          userEmail: user?.email,
          interview_id: interview_id
        },
      ])
      .select()

    setSaveLoading(false);
    
    onCreateLink(interview_id)
  }

  return (
    <div>
      {loading && <div className='flex flex-col justify-center items-center gap-5 bg-blue-100 rounded-xl border-primary py-4'>
        <LoaderIcon className='animate-spin' />
        <div className='flex flex-col gap-2 text-center'>
          <h2 className='text-xl font-bold'>Generating Interview Questions</h2>
          <p className='text-base font-medium text-primary'>Our AI is creafting the best questions according to your requirements</p>
        </div>
      </div>}
      {questionList?.length > 0 &&
        <div className='bg-white p-4 rounded-xl flex flex-col gap-1'>
          {questionList.map((item, index) => (
            <div key={index} className='p-3 border border-gray-200 rounded-sm'>
              <h2 className='font-semibold text-lg'>{item.question}</h2>
              <h2 className='text-blue-400'>Type: {item?.type}</h2>
            </div>
          ))}
          <div className="mt-7 flex justify-end">
            <Button onClick={() => onFinish()} disabled = {saveLoading}>
              {saveLoading && <Loader2 className='animate-spin' />}
              Create Interview <ArrowRight />
            </Button>
          </div>
        </div>}
    </div>
  )
}

export default QuestionsList