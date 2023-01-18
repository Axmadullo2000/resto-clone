import { Route, Routes } from 'react-router-dom'

import HomePage from './pages/HomePage'
import { SearchResult } from './pages/SearchResult'
import { Login } from './pages/Login'
import { Registration } from './pages/Registration'
import RestaurantDetails from './pages/RestaurantDetail'

import './App.css'

function App() {
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
