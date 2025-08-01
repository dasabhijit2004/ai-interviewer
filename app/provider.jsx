"use client"

import { supabase } from '@/services/supabaseClient'
import { User } from 'lucide-react';
import React, { useContext, useEffect, useState } from 'react'
import { UserDetailContext } from '@/context/UserDetailContext';

const provider = ({ children }) => {

    const [user, setUser] = useState(null);

    useEffect(() => {
        createNewUser();
    }, [])

    const createNewUser = () => {
        supabase.auth.getUser().then(async ({ data: { user } }) => {
            let { data: users, error } = await supabase
                .from('users')
                .select("*")
                .eq('email', user?.email)

            console.log(users)

            if (users?.length == 0) {
                const { data, error } = await supabase.from("users").insert([
                    {
                        name: user?.user_metadata?.name,
                        email: user?.email,
                        picture: user?.user_metadata?.picture
                    }
                ])
                console.log(data)
                setUser(data)
                return;
            }
            setUser(users[0]);
        }
        )
    }


    return (
        <UserDetailContext.Provider value={{ user, setUser }}>
            {children}
        </UserDetailContext.Provider>
    )
}

export default provider

export const useUser = () => {
    const context = useContext(UserDetailContext)
    return context
}