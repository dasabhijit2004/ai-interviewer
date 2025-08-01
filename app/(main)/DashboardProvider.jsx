import { SidebarProvider, SidebarTrigger } from '@/components/ui/sidebar'
import React from 'react'
import { AppSidebar } from './_components/AppSidebar'
import WelcomeComponent from './dashboard/_components/WelcomeComponent'

const DashboardProvider = ({ children }) => {
    return (
        <SidebarProvider>
            <AppSidebar />
            <div className='w-full p-10'>
                {/* <SidebarTrigger /> */}
                <WelcomeComponent />
                {children}
            </div>
        </SidebarProvider >
    )
}

export default DashboardProvider