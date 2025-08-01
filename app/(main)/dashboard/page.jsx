import React from 'react'
// import WelcomeComponent from './_components/WelcomeComponent'
import CreateOptions from './_components/CreateOptions'
import LatestInterviewList from './_components/LatestInterviewList'

const Dashboard = () => {
  return (
    <div>
      {/* <WelcomeComponent /> */}
      <h2 className='text-2xl font-bold py-5'>Dashboard</h2>
      <CreateOptions />
      <LatestInterviewList />
    </div>
  )
}

export default Dashboard