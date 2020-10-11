import React from 'react'

function Alert({status, message, type}) {
  return (
    <p className={`mt-3 text-${type} ${status}`}>{message}</p>
  )
}

export default Alert
