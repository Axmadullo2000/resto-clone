import { Route, Routes } from 'react-router-dom'

import HomePage from './pages/HomePage'
import { SearchResult } from './pages/SearchResult'

import './App.css'

function App() {
	return (
		<Routes>
			<Route path='/' element={<HomePage />} />
			<Route path="/search/:slug" element={<SearchResult />}/>
		</Routes>
	)
}

export default App
