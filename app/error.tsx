"use client"

import React from 'react'

const Error = () => {
  return (
    <div>
      <h1>404</h1>
      <p>Page Not Found</p>
      <p>
        Error pages needs to be client side rendered. This is because the server does not have access to the browser's window object.
      </p>
    </div>
  )
}