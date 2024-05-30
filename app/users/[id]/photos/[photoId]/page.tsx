import React from 'react'
interface Props{
  params:{id:number,photoId:number}
}

const photoPage = ({params:{id,photoId}}:Props) => {
  return (
    <div>
      <h2>User id:{id} & and PhotoId:{photoId} </h2>
    </div>
  )
}

export default photoPage
