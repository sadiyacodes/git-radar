import React from 'react'

const StatBox = (props) => {
  return (
    <div className="profile-stats-box">
      <div className="profile-stat">
         <p> Repos</p>
         <p>{props?.public_repos}</p>
        </div>
        <div className='divider'>

        </div>
        <div className="profile-stat">
        <p>Followers</p>
        <p>{props?.followers}</p>
        </div>
        <div className='divider'>
        <p>Following</p>
        <p>{props?.following}</p>
        </div>
       
     </div>  
)
}

export default StatBox