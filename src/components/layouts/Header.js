import React, { useEffect, useState } from 'react'
import { Link } from 'react-router-dom'
import Navmenu from './Navmenu'
import classNames from 'classnames'

import logo from '../../assets/img/logo.png'

export default () => {
    const [togglemethod, setTogglemethod] = useState(false)
    const [isMobile, setIsMobile] = useState(false)
    const [isMobilesmall, setIsMobilesmall] = useState(false)
    const [isTop, setIsTop] = useState(false)

    useEffect(() => {
        window.addEventListener('resize', () => {
            setIsMobile(window.innerWidth < 991)
            setIsMobilesmall(window.innerWidth < 767)
        }, false)
        window.addEventListener('load', () => {
            setIsMobile(window.innerWidth < 991)
            setIsMobilesmall(window.innerWidth < 767)
        }, false)
        // Sticky header
        window.addEventListener('scroll', () => {
            setIsTop(window.scrollY > 110)
        }, false)
    }, [])

    const toggleClass = () => {
        setTogglemethod(!togglemethod)
    }


    const mobileactive = isMobile ? 'breakpoint-on' : ''
    const smallmobileactive = isMobilesmall ? 'd-none' : ''
    const stickyheader = isTop ? 'sticky-on' : ''


    return (
        <header className={`sticky-header ${stickyheader}`}>
            {/* Header Menu  */}
            <div className="header-nav">
                <div className="container-fluid container-1600">
                    <div className={`nav-container ${mobileactive}`}>
                        {/* Site Logo */}
                        <div className="site-logo">
                            <Link to="/"><img src={logo} alt="Logo" /></Link>
                        </div>
                        {/* Main Menu */}
                        <div className={classNames("nav-menu d-lg-flex align-items-center", { "menu-on": togglemethod })}>
                            {/* Navbar Close Icon */}
                            <div className="navbar-close" onClick={toggleClass}>
                                <div className="cross-wrap"><span /><span /></div>
                            </div>
                            {/* Mneu Items */}
                            <div className="menu-items">
                                <Navmenu />
                            </div>
                            {/* Pushed Item */}
                            <div className="nav-pushed-item" />
                        </div>
                        {/* Navbar Extra  */}
                        <div className="navbar-extra d-lg-block d-flex align-items-center">
                            {/* Navbtn */}
                            <div className={`navbar-btn nav-push-item ${smallmobileactive}`}>
                                <Link className="main-btn main-btn-3" to="#">Consulting Now</Link>
                            </div>
                            {/* Navbar Toggler */}
                            <div className={classNames("navbar-toggler", { "active": togglemethod })} onClick={toggleClass}>
                                <span /><span /><span />
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </header>
    )
}