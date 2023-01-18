import { useState } from 'react'
import { useSelector, useDispatch } from 'react-redux'

import {
	registerUserFailure,
	registerUserStart,
	registerUserSuccess,
} from '../../redux/slice/AuthSlice'

import Header from '../../components/Header'
import { authService } from '../../service/auth'

export const Registration = () => {
	const [username, setUsername] = useState('')
	const [password, setPassword] = useState('')
	const [repeatPassword, setRepeatPassword] = useState('')
	const [email, setEmail] = useState('')
	const dispatch = useDispatch()
	const { user, loading, error } = useSelector(state => state.auth)

	const registerUser = async () => {
		const data = { username, password, new_password: repeatPassword, email }

		try {
			dispatch(registerUserStart())
			const response = await authService.registration(data)
			dispatch(registerUserSuccess(response))
			console.log(response)
		} catch (error) {
			dispatch(registerUserFailure(error.response.data))
			console.log(error.response.data)
		}
	}

	console.log(error)

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
						<>
							{password != repeatPassword ? (
								<p>Password must have be similarly</p>
							) : (
								<p key={key}>{key}</p>
							)}
						</>
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
