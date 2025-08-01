import { Input } from '@/components/ui/input'
import { Textarea } from '@/components/ui/textarea'
import {
    Select,
    SelectContent,
    SelectItem,
    SelectTrigger,
    SelectValue,
} from "@/components/ui/select"
import React from 'react'
import { InterviewOptions } from '@/services/Constants'
import { Button } from '@/components/ui/button'
import { ArrowRight } from 'lucide-react'

const Form = () => {
    return (
        <div className='bg-white p-4 rounded-xl'>
            <div className='py-3'>
                <h4 className='font-semibold'>Job Position</h4>
                <Input placeholder="e.g. Full Stack Developer" />
            </div>
            <div className='py-3'>
                <h4 className='font-semibold'>Job Description</h4>
                <Textarea placeholder="Enter detailed job description" className='h-28 resize-none no-scroll' />
            </div>
            <div className='py-3'>
                <h4 className='font-semibold'>Interview Duration</h4>
                <Select>
                    <SelectTrigger className="w-full">
                        <SelectValue placeholder="Select interview duration" />
                    </SelectTrigger>
                    <SelectContent>
                        <SelectItem value="5 Min">5 Minutes</SelectItem>
                        <SelectItem value="15 Min">15 Minutes</SelectItem>
                        <SelectItem value="30 Min">30 Minutes</SelectItem>
                        <SelectItem value="45 Min">45 Minutes</SelectItem>
                        <SelectItem value="60 Min">60 Minutes</SelectItem>
                    </SelectContent>
                </Select>
            </div>
            <div className='py-3'>
                <h4 className='font-semibold'>Interview Type</h4>
                <div className='flex flex-wrap gap-5'>
                    {InterviewOptions.map((option, index) => (
                        <div className='flex items-center gap-2 border border-gray-200 rounded-xl p-2 px-4 hover:bg-secondary'>
                            <option.icon className='h-4 w-4' />
                            <p>{option.type}</p>
                        </div>
                    ))}
                </div>
            </div>
            <div className="mt-7 flex justify-end">
            <Button>Generate Questions<ArrowRight /></Button>
            </div>
        </div>
    )
}

export default Form