import React from 'react'
import DashboardProvider from './DashboardProvider'

const layout = ({ children }) => {
    return (
        <div className='bg-secondary'>
            <DashboardProvider>
                <div>
                    {children}
                </div>
            </DashboardProvider>
        </div>
    )
}

export default layout