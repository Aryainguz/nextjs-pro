import React from 'react'

const page = ({params}:any) => {
    const paramData = params.nonOptional
  return (
    <div>{paramData}</div>
  )
}

export default page