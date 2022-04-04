import React from 'react'
import videoBg from '../assets/videoBg1.mp4'

const Main = () => {
  return (
    <div className='main'>
        <div className="overlay"></div>
        <video src={videoBg} autoPlay loop muted />
        <div className="content">
            <h1>@KOTOMONO7</h1>
            <p>Follow me on instagram and let's be friends :)</p>
        </div>
    </div>
  )
}

export default Main