"use client"

import { supabase } from '@/services/supabaseClient'
import React, { useContext, useEffect, useState } from 'react'
import { UserDetailContext } from '@/context/UserDetailContext'

const Provider = ({ children }) => {
  const [user, setUser] = useState(null)

  useEffect(() => {
    // Load user if already logged in
    supabase.auth.getUser().then(({ data: { user: supabaseUser } }) => {
      if (supabaseUser) loadUser(supabaseUser)
    })

    // Listen to auth state changes
    const { data: subscription } = supabase.auth.onAuthStateChange(
      async (event, session) => {
        if (session?.user) {
          loadUser(session.user)
        } else {
          setUser(null)
        }
      }
    )

    return () => {
      subscription.subscription.unsubscribe()
    }
  }, [])

  const loadUser = async (supabaseUser) => {
    if (!supabaseUser?.email) return

    let { data: users } = await supabase
      .from('users')
      .select("*")
      .eq('email', supabaseUser.email)

    // If user not found, insert new record
    if (!users || users.length === 0) {
      const { data: insertedUsers } = await supabase
        .from("users")
        .insert([{
          name: supabaseUser.user_metadata?.name,
          email: supabaseUser.email,
          picture: supabaseUser.user_metadata?.picture
        }])
        .select()

      if (insertedUsers?.length > 0) {
        setUser(insertedUsers[0])
      }
      return
    }

    // If user exists, set from DB
    setUser(users[0])
  }

  return (
    <UserDetailContext.Provider value={{ user, setUser }}>
      {children}
    </UserDetailContext.Provider>
  )
}

export default Provider

export const useUser = () => {
  return useContext(UserDetailContext)
}
