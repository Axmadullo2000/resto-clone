import React from 'react'
import { useParams } from 'react-router-dom'
import Header from '../../components/Header'

const RestaurantDetails = () => {
	const { slug } = useParams()
	return (
		<div>
			<Header />
			<h2>{slug}</h2>
		</div>
	)
}

export default RestaurantDetails
