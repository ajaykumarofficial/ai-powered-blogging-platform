"use client"
import { useParams } from 'next/navigation'
import React from 'react'
import AuthLayout from '../Layout'
import SignIn from '../SignIn'
import SignUp from '../SignUp'

const page = () => {
    const {type} = useParams()
    return (
        <AuthLayout>
            {type === "sign-in" ? <SignIn /> : <SignUp />}
        </AuthLayout>
    )
}

export default page
