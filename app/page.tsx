import Link from 'next/link'
import React from 'react'
interface Props{
    params:{id:number}
}
const userPage = ({params:{id}}:Props) => {
  return (
    <div className='m-3'>
      <h2 className='text-center'>Welcome To Next App</h2>
<div className='text-center mt-3'>

</div>
    </div>
  )
}

export default userPage
