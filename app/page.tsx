import Link from 'next/link'
import React from 'react'
interface Props{
    params:{id:number}
}
const userPage = ({params:{id}}:Props) => {
  return (
    <div>
      <h2 className='text-center'>Welcome To Next App</h2>
<div className='text-center mt-3'>
<Link href='/users'><button className='btn btn-primary' >Users</button></Link>
</div>
    </div>
  )
}

export default userPage
