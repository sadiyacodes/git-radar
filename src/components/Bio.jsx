import React from 'react'

const Bio = (props) => {
  return (
    <div className='bio-box'>
      <p className='bio-text'>
        {props?.bio || `This profile has no bio`}
      </p>
    </div>
  )
}

export default Bio