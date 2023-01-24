import { Route, Routes } from 'react-router-dom'
import { useDispatch } from 'react-redux'
import { useEffect } from 'react'

import { HomePage } from './pages/HomePage'
import { Login } from './pages/Login'
import { Registration } from './pages/Registration'
import { registerUser, registerUserFailure } from './redux/slice/AuthSlice'
import { authService } from './service/auth'
import { RestaurantDetail } from './pages/RestaurantDetail'

import './App.css'

const App = () => {
	const dispatch = useDispatch()

	const authenticationUser = async () => {
		try {
			const response = await authService.getUser()
			dispatch(registerUser(response.user_info))
		} catch (error) {
			console.log(error.response.data)
			dispatch(registerUserFailure(error.response.data))
		}
	}

	const token = localStorage.getItem('token')

	useEffect(() => {
		authenticationUser()
	}, [token])

	return (
		<Routes>
			<Route path='/' element={<HomePage />} />
			<Route path='/auth/login/' element={<Login />} />
			<Route path='/auth/sign-up/' element={<Registration />} />
			<Route path='/catalog-restaurant/:slug' element={<RestaurantDetail />} />
		</Routes>
	)
}

export default App
