import React from 'react'

const page = ({params}:any) => {
  return (
    <div>dynamic params : {params.id} </div>
  )
}

export default page