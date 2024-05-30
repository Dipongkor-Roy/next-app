import React from 'react'
interface Props{
    params:{id:number}
}
const userPage = ({params:{id}}:Props) => {
  return (
    <div>
      <h2>User number {id}</h2>
    </div>
  )
}

export default userPage
