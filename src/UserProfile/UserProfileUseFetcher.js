import React from 'react'
import api from './api'


import Fetcher from './Fetcher'

const UserProfile = ({id}) => {
    <Fetcher action={api.fetchProfile(id)}>
        {data => renderProfile(data)}
    </Fetcher>
}
// Fetcher abstract away all the data fetching logic, makes use focus on what to render 
export default UserProfile

// However, the action has to take an argument 
// so redux - Redux Thunx, 