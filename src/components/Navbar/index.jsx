import React from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { Link, useNavigate } from 'react-router-dom'
import { logoutUser } from '../../redux/slice/AuthSlice'

import './Navbar.scss'

const Navbar = () => {
	const navigate = useNavigate()
	const { user, isLoggedIn } = useSelector(auth => auth.auth)
	const dispatch = useDispatch()

	const logout = async () => {
		try {
			dispatch(logoutUser())
			localStorage.removeItem('token')
			navigate('/auth/login/')
		} catch (error) {
			console.log(error)
		}
	}

	return (
		<nav className='navbar'>
			<div className='navbar__container'>
				<ul className='navbar__nav'>
					<li className='navbar__item'>
						<Link to='/' className='navbar__link'>
							Рестораны и кафе
						</Link>
					</li>
					<li className='navbar__item'>
						<Link to='/' className='navbar__link'>
							Доставка еды
						</Link>
					</li>
					<li className='navbar__item'>
						<Link to='/' className='navbar__link'>
							Каталог заведений
						</Link>
					</li>
					<li className='navbar__item'>
						<Link to='/' className='navbar__link'>
							Новости
						</Link>
					</li>
				</ul>
				<div className='navbar__action'>
					<div className='dropdown'>
						<button className='dropbtn'>
							<small>Ваш город</small>
							<br />
							<span>Ташкент&#9660;</span>
						</button>
						<div className='dropdown-content'>
							<a href='#'>Ташкент</a>
							<a href='#'>Бухара</a>
							<a href='#'>Самарканд</a>
						</div>
					</div>
					<div className='dropdown'>
						{!isLoggedIn ? (
							<button
								className='dropbtn'
								onClick={() => navigate('/auth/login/')}
							>
								<small>Авторизация</small>
								<br />
								<span>Войти / рег</span>
							</button>
						) : (
							<button className='dropbtn' onClick={logout}>
								<span className='text-capitalize'>{user.username}</span>
								<br />
								<small>Выход</small>
							</button>
						)}
					</div>
					<div className='dropdown'>
						<button className='dropbtn'>
							<small>Добавить</small>
							<br />
							<span>Заведение&#8744;</span>
						</button>
						<div className='dropdown-content'>
							<a href='#'>Заведение</a>
							<a href='#'>Новость событие</a>
						</div>
					</div>
				</div>
			</div>
		</nav>
	)
}

export default Navbar
