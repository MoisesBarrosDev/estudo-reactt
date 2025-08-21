import React from 'react'

const Input = ({ onChange, label, id, value, ...props }) => {
  return (
    <>
      <label htmlFor={id}>{label}</label>
      <input
        id={id}
        value={value}
        onChange={onChange}
        {...props}
      />
    </>
  )
}

export default Input
