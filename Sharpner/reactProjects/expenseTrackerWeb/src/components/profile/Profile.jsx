import React from 'react'
import { NavLink } from 'react-router-dom'

const Profile = () => {
  return (
    <div className='container'>
      <h3 className='text-center mt-5'>Welcome to Expense Tracker Page.</h3>
      <div className='text-center'>
          Your profile is incomplete.{' '}
          <NavLink to='/updateProfile'>Complete now</NavLink>
      </div>
    </div>
  )
}

export default Profile