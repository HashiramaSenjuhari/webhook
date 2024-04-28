import { UserButton, useSignUp } from '@clerk/nextjs'
import React from 'react'

const page = () => {

  return (
    <div>
      <UserButton showName afterSignOutUrl='/auth/signin' />
    </div>
  )
}

export default page