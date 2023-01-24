import React from 'react'
import ReactDOM from 'react-dom/client'
import { BrowserRouter as Router } from 'react-router-dom'
import { Provider } from 'react-redux'

import 'react-responsive-carousel/lib/styles/carousel.min.css'

import store from './redux/store'

import App from './App'

import './index.css'

const app = document.getElementById('root')

if (app != null) {
	const root = ReactDOM.createRoot(app)

	root.render(
		<Provider store={store}>
			<Router>
				<App />
			</Router>
		</Provider>
	)
}
