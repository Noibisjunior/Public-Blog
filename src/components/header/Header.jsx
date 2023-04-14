import React from 'react'
import './header.css'
import logo from './logo.png'
import User from './User'

const header = () => {

    window.addEventListener('scroll',function (){
        const header = this.document.querySelector('.header')
    })

  return (

    <>
        <header>
            <div className='container-flex'>
                <div className='logo'>
                    <img src={logo} alt='logo' width='100px' />
                </div>
                <nav>
                    <ul>{nav}</ul>
                </nav>
                <div className='account flexCenter'>
                    <User />
                </div>
            </div>
        </header>
    </>
    
  )
}

export default header