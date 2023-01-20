import { useState } from 'react'
import { useSelector, useDispatch } from 'react-redux'
import {
	registerUserFailure,
	registerUserStart,
	registerUserSuccess,
} from '../../redux/slice/AuthSlice'
import Header from '../../components/Header'
import { authService } from '../../service/auth'
import { useNavigate } from 'react-router-dom'

export const Registration = () => {
	const { user, error } = useSelector(state => state.auth)
	const [username, setUsername] = useState('')
	const [password, setPassword] = useState('')
	const [repeatPassword, setRepeatPassword] = useState('')
	const [email, setEmail] = useState('')
	const dispatch = useDispatch()
	const data = { username, password, new_password: repeatPassword, email }
	const navigate = useNavigate()

	const registerUser = async () => {
		try {
			const response = await authService.registration(data)
			dispatch(registerUserSuccess(response))
			localStorage.setItem('token', response.token)
			navigate('/')
		} catch (error) {
			dispatch(registerUserFailure(error.response.data))
			console.log(error)
		}
	}

	const handleSubmit = e => {
		e.preventDefault()
		registerUser()
	}

	return (
		<>
			<Header />
			<h2>Registration</h2>

			{error &&
				Object.entries(error).map((key, value) => {
					return (
						<div key={key}>
							{password != repeatPassword ? (
								<p>Password must have be similarly</p>
							) : (
								<p>
									<span className='text-danger'>{key[0]}</span>: {key[1][0]}
								</p>
							)}
						</div>
					)
				})}

			{user != null && error == null && (
				<h2>You have successfully registered!!!</h2>
			)}

			<form onSubmit={handleSubmit}>
				<input
					type='text'
					name='username'
					placeholder='username'
					value={username}
					onChange={e => setUsername(e.target.value)}
				/>
				<br />
				<input
					type='password'
					name='password'
					placeholder='password'
					value={password}
					onChange={e => setPassword(e.target.value)}
				/>
				<br />
				<input
					type='password'
					name='new_password'
					placeholder='Repeat password'
					value={repeatPassword}
					onChange={e => setRepeatPassword(e.target.value)}
				/>
				<br />
				<input
					type='email'
					name='email'
					id='email'
					placeholder='email'
					value={email}
					onChange={e => setEmail(e.target.value)}
				/>
				<br />
				<button>Register</button>
			</form>
		</>
	)
}
