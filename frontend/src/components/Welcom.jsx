import React from 'react'
import { useSelector } from 'react-redux'

const Welcom = () => {
  const {user} = useSelector((state) => state.auth);
  return (
    <div>
        <h1 className='title'> Dashboard </h1>
        <h1 className='subtitle'> Welcome back <strong>{user && user.name}</strong> </h1>
    </div>
  )
}

export default Welcom