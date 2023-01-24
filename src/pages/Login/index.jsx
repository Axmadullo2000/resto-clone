import { useState } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { Link, useNavigate } from 'react-router-dom'
import Footer from '../../components/Footer'

import Header from '../../components/Header'
import { loginUserFailure, loginUserSuccess } from '../../redux/slice/AuthSlice'
import { authService } from '../../service/auth'

export const Login = () => {
	const [username, setUsername] = useState('')
	const [password, setPassword] = useState('')
	const navigate = useNavigate()
	const { error } = useSelector(state => state.auth)

	const data = { username: username, password: password }

	const dispatch = useDispatch()

	const loginUser = async () => {
		try {
			const response = await authService.login(data)
			dispatch(loginUserSuccess(response))
			localStorage.setItem('token', response.token)
			navigate('/')
		} catch (error) {
			dispatch(loginUserFailure(error.response.data))
		}
	}

	const handlerSubmit = async e => {
		e.preventDefault()
		console.log(error)
		loginUser()
	}

	return (
		<>
			<Header />
			<h2>Login</h2>
			{!!error &&
				Object.entries(error).map(item => {
					return <div key={item}>
						<h2>{item[0]} {item[1]}</h2>
					</div>
				})}

			<form onSubmit={handlerSubmit}>
				<input
					type='text'
					placeholder='UserName'
					value={username}
					onChange={e => setUsername(e.target.value)}
				/>
				<br />
				<input
					type='password'
					placeholder='Password'
					value={password}
					onChange={e => setPassword(e.target.value)}
				/>
				<br />
				<button>Login</button>
			</form>
			<Link to='/auth/sign-up'>Registration</Link>
			<Footer />
		</>
	)
}
