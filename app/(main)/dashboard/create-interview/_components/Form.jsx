'use client'

import { Input } from '@/components/ui/input'
import { Textarea } from '@/components/ui/textarea'
import {
    Select,
    SelectContent,
    SelectItem,
    SelectTrigger,
    SelectValue,
} from "@/components/ui/select"
import React from 'react' // No more useState or useEffect needed here
import { InterviewOptions } from '@/services/Constants'
import { Button } from '@/components/ui/button'
import { ArrowRight } from 'lucide-react'

// Receive the full formData object and the handler from the parent
const Form = ({ formData, onHandleInputChange, onSubmit }) => {

    const addInterviewtype = (optionType) => {
        const currentTypes = formData.type || [];
        const isAlreadyAdded = currentTypes.includes(optionType);
        
        let newTypes;

        if (!isAlreadyAdded) {
            // Add the new type
            newTypes = [...currentTypes, optionType];
        } else {
            // Remove the type
            newTypes = currentTypes.filter(item => item !== optionType);
        }

        // Directly call the parent's handler to update the state
        onHandleInputChange('type', newTypes);
    }

    return (
        <div className='bg-white p-4 rounded-xl'>
            <div className='py-3'>
                <h4 className='font-semibold'>Job Position</h4>
                <Input 
                    placeholder="e.g. Full Stack Developer"
                    value={formData.jobPosition} // Controlled input
                    onChange={(event) => onHandleInputChange('jobPosition', event.target.value)}
                />
            </div>
            <div className='py-3'>
                <h4 className='font-semibold'>Job Description</h4>
                <Textarea 
                    placeholder="Enter detailed job description" 
                    className='h-28 resize-none no-scroll'
                    value={formData.jobDescription} // Controlled input
                    onChange={(event) => onHandleInputChange('jobDescription', event.target.value)}
                />
            </div>
            <div className='py-3'>
                <h4 className='font-semibold'>Interview Duration</h4>
                <Select 
                    onValueChange={(value) => onHandleInputChange('duration', value)}
                    value={formData.duration} // Controlled input
                >
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
                        <div 
                            key={index} 
                            // Check against the prop directly
                            className={`flex items-center gap-2 border border-gray-200 rounded-xl p-2 px-4 hover:bg-secondary cursor-pointer ${formData.type.includes(option.type) && 'bg-blue-100 text-blue-500'}`} 
                            onClick={() => addInterviewtype(option.type)}
                        >
                            <option.icon className='h-4 w-4' />
                            <p>{option.type}</p>
                        </div>
                    ))}
                </div>
            </div>
            <div className="mt-7 flex justify-end">
                {/* Call the onSubmit prop */}
                <Button onClick={onSubmit}>Generate Questions<ArrowRight /></Button>
            </div>
        </div>
    )
}

export default Form;