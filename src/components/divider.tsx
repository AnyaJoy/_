import React from 'react'

interface Props {
  header: string;
}

function Divider({header}:Props) {
  return (
    <div className="divider">
        <span></span>
        <span>{header}</span>
        <span></span>
      </div>
  )
}

export default Divider