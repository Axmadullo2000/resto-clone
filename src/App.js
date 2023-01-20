import { Route, Routes } from 'react-router-dom'

import HomePage from './pages/HomePage'
import { SearchResult } from './pages/SearchResult'
import { Login } from './pages/Login'
import { Registration } from './pages/Registration'
import RestaurantDetails from './pages/RestaurantDetail'

import { useDispatch } from 'react-redux'
import { registerUserStart, registerUserSuccess } from './redux/slice/AuthSlice'
import { authService } from './service/auth'
import { useEffect } from 'react'

import './App.css'

function App() {
	const dispatch = useDispatch()

	const authenticationUser = async () => {
		try {
			const response = await authService.getUser()
			dispatch(registerUserSuccess(response.user_info))
		} catch (error) {
			console.log(error)
		}
	}

	const token = localStorage.getItem('token')

	useEffect(() => {
		authenticationUser()
	}, [token])

	return (
		<Routes>
			<Route path='/' element={<HomePage />} />
			<Route path='/search/:slug' element={<SearchResult />} />
			<Route path='/auth/login/' element={<Login />} />
			<Route path='/auth/sign-up/' element={<Registration />} />
			<Route path='/restaurant/detail/:slug' element={<RestaurantDetails />} />
		</Routes>
	)
}

export default App
