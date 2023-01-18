import React from 'react'
import { Link, useNavigate } from 'react-router-dom'

import logo from '../../assets/logo.png'

import './Header.scss'

const Header = () => {
	const navigate = useNavigate()
	return (
		<header className='header'>
			<div className='container header__container'>
				<div onClick={() => navigate('/')} style={{cursor: 'pointer'}}>
					<img alt='logo' src={logo} className='header__logo' />
				</div>
				<ul className='header__navbar'>
					<li className='header__item'>
						<Link to='/' className='header__link'>
							Кулинария
						</Link>
					</li>
					<li className='header__item'>
						<Link to='/' className='header__link'>
							Рецепты
						</Link>
					</li>
					<li className='header__item'>
						<Link to='/' className='header__link'>
							Тосты
						</Link>
					</li>
					<li className='header__item'>
						<Link to='/' className='header__link'>
							Помощь по сайту
						</Link>
					</li>
					<li className='header__item'>
						<Link to='/' className='header__link'>
							Реклама на сайте
						</Link>
					</li>
				</ul>
			</div>
		</header>
	)
}

export default Header
