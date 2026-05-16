import { useUser } from '@clerk/react'
import React from 'react'
import { useNavigate } from 'react-router-dom'
import { toast } from 'react-toastify'

const UserCartAccess = () => {

const {user} = useUser()
const navigate = useNavigate()

  const goToHome = () => {
        if (user) {
            navigate('/cart')
        } else {
            navigate('/')
            toast.error("You have to login first!")
        }
    }

    return { goToHome }
}


export default UserCartAccess