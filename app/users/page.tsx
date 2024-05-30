import React from 'react'
import UserTable from '../components/userTable/UserTable';


interface Props{
  searchParams:{sortOrder:string}
}
const Users =async ({searchParams:{sortOrder}}:Props) => {
  
  return (
    <div>
      <h2 className='my-3 text-center border-5 bg-orange-200'>Users</h2>
     <UserTable sortOrder={sortOrder}/>
    </div>
  )
}

export default Users;
