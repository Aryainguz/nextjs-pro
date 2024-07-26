import React from 'react'

const page = ({params}:any) => {
    const paramData = params.optional
  return (
    <div>{paramData}</div>
  )
}

export default page