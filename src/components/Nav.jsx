import React from 'react'
import './Nav.css'
import image6 from '../assets/images/icon-arrow-down.svg'
import image7 from '../assets/images/icon-arrow-up.svg'
import image8 from '../assets/images/icon-calendar.svg'
import image9 from '../assets/images/icon-close-menu.svg'
import image10 from '../assets/images/icon-menu.svg'
import image11 from '../assets/images/icon-planning.svg'
import image12 from '../assets/images/icon-reminders.svg'
import image13 from '../assets/images/icon-todo.svg'
import image16 from '../assets/images/logo.svg'

function Nav() {
    const [toggle, setToggle] = React.useState(false)
    const [toggle2, setToggle2] = React.useState(false)
    const [togglebar, setTogglebar] = React.useState(false)

    const handleClick = () => {
        setToggle(!toggle)
    }

    const handleClick2 = () => {
        setToggle2(!toggle2)
    }

    const handleBar = () => {
        setTogglebar(!togglebar)
    }

    // React.useEffect(() => {
    //     window.addEventListener('load', handleBar)
    //     window.addEventListener('resize', handleBar)
    // }, [])

    

  return (
    <>
        <div className='container fs gray'>
            <img className='logo' src={image16}></img>
            <icon onClick={handleBar} className={togglebar ? 'toggle-bar xmark fa-xmark fa-solid fa-2x' : 'toggle-bar bars fa-bars fa-solid fa-2x'}></icon>
            <div className={togglebar ? 'fade faded' : 'fade'}></div>
            <div className={togglebar ? 'fold-container fold-containered' : 'fold-container'}>
                <div className='nav'>
                    <ul>
                        <li>
                            <div onClick={handleClick}>Feature <img className={toggle ? 'arrow-up arrow-down' : 'arrow-down'} src={image6}></img></div>
                            <ul className={toggle ? 'left dropdown dropdowned' : 'left dropdown'}>
                                <li className='icon-container'>
                                    <img className='icon' src={image13}></img>
                                    <div className='menu'>Todo List</div>
                                </li>
                                <li className='icon-container'>
                                    <img className='icon' src={image8}></img>
                                    <div className='menu'>Calendar</div>
                                </li>
                                <li className='icon-container'>
                                    <img className='icon' src={image12}></img>
                                    <div className='menu'>Reminders</div>
                                </li>
                                <li className='icon-container'>
                                    <img className='icon' src={image11}></img>
                                    <div className='menu padbot'>Planning</div>
                                </li>
                            </ul>
                        </li>
                        <li>
                            <div onClick={handleClick2}>Company <img className={toggle2 ? 'arrow-up arrow-down' : 'arrow-down'} src={image6}></img></div>
                            <ul className={toggle2 ? 'dropdown dropdowned' : 'dropdown'}>
                                <li className='menu'>History</li>
                                <li className='menu'>Our team</li>
                                <li className='menu padbot'>Blog</li>
                            </ul>
                        </li>
                        <li><div>Career</div></li>
                        <li><div>About</div></li>
                    </ul>
                </div>
                <div className='login'>
                    <ul>
                        <li>Login</li>
                        <li className='register'>Register</li>
                    </ul>
                </div>
            </div>
        </div>
    </>  
  )
}

export default Nav