import React from 'react'
import {Link} from "react-router-dom"

import './Header.scss'

const Header = () => {
	return (
		<header className='header'>
			<div className='container header__container'>
				<p className='header__logo'>Restaraunts</p>
				<ul className='header__navbar'>
					<li className='header__item'>
						<Link to="/" className='header__link'>Home</Link>
					</li>
					<li className='header__item'>
						<Link to="/" className='header__link'>About</Link>
					</li>
					<li className='header__item'>
						<Link to="/" className='header__link'>Contact</Link>
					</li>
					<li className='header__item'>
						<Link to="/" className='header__link'>Settings</Link>
					</li>
				</ul>
			</div>
		</header>
	)
}

export default Header
