import React, { useEffect } from 'react'
import './Head.css'
import image1 from '../assets/images/client-audiophile.svg'
import image2 from '../assets/images/client-databiz.svg'
import image3 from '../assets/images/client-maker.svg'
import image4 from '../assets/images/client-meet.svg'
import image14 from '../assets/images/image-hero-desktop.png'
import image15 from '../assets/images/image-hero-mobile.png'

function Head() {
  const [layout, setLayout] = React.useState(image14)

  useEffect(() => {
    window.addEventListener('resize', handleResize)
    window.addEventListener('load', handleResize)
  }, [])

  const handleResize = () => {
    if (window.innerWidth <= 992) {
      setLayout(image15)
    } else {
      setLayout(image14)
    }
  }

  return (
    <>
      <div className='head-container'>
        <img className='head-image' src={layout}></img>
        <div className='left-container'>
          <div className='topic bolder black'>Make remote work</div>
          <div className='details gray fs'>Get your team in sync, no matter your location. Streamline processes, create team rituals, and watch productivity soar.</div>
          <div className='button white bold'>Learn more</div>
          <div className='sponsor'>
            <img src={image2}></img>
            <img src={image1}></img>
            <img src={image4}></img>
            <img src={image3}></img>
          </div>
        </div>
      </div>
    </>
  )
}

export default Head