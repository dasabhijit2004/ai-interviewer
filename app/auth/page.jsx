'use client'

import { Button } from '@/components/ui/button'
import { supabase } from '@/services/supabaseClient'
import Image from 'next/image'
import React from 'react'

const LoginPage = () => {

  const signInWithGoogle = async () => {
    const { error } = await supabase.auth.signInWithOAuth({
      provider: 'google',
      options: {
        redirectTo: `${window.location.origin}/` // Redirect back to homepage after login
      }
    })
    if (error) {
      console.error("Error: ", error.message)
    }
  }

  return (
    <div className='min-h-screen flex justify-center items-center'>
      <div className='flex flex-col justify-center items-center border border-gray-700 p-5 rounded-2xl'>
        <Image src={'/logo.webp'} width={160} height={80} alt='logo' className='mb-5' />
        <div className='flex flex-col items-center justify-center'>
          <Image src={'/login.webp'} width={400} height={300} alt='login' className='rounded-2xl' />
          <h2 className='text-xl font-bold text-center'>Welcome Back</h2>
          <p className='text-md text-gray-500 text-center mb-5'>Login with your Google Account</p>
          <Button className='w-full' onClick={signInWithGoogle}>Login with Google</Button>
        </div>
      </div>
    </div>
  )
}

export default LoginPage
