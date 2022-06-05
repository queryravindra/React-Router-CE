// import React from 'react'

// export const UserDetails = () => {
//   return (
//     <div>Details about user</div>
//   )
// }


// 11.URL Params
import { useParams } from "react-router-dom"

export const UserDetails = () => {
//   const params = useParams()
//   const userId = params.userId;
    const {userId} = useParams()

  return (
    <div>Details about user {userId}</div>
  )
}

// useParams hook will return object of key value pairs
// this 'params' object contains key value pairs of the Dynamic params from current URL