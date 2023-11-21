import React from 'react'

const User = ({params}) => {
  console.log(params.id)
  return (
    <>
    <div className="text-center m-16">
    <h1>No need to be cliet component to be able to show id in params</h1>  <br />
    <h3>Pass params in {"{"} {"}"} as props </h3> <br />
    <h6>You can pass searchParams in {"{"} as {"}"} to get search params </h6>
    <br />
    <h1>Params ID here is: {params.id}</h1>
    </div>

    </>
  )
}

export default User