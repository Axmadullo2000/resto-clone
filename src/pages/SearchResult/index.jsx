import React, { useEffect } from 'react'
import { useParams } from 'react-router-dom'
import { useDispatch, useSelector } from 'react-redux'
import { compareTwoStrings } from 'string-similarity'

import Header from '../../components/Header'
import {
	searchRestaurantsStart,
	searchRestaurantsSuccess,
} from '../../redux/slice/RestaurantSlice'

export const SearchResult = () => {
	const { restaurantData, searchedData } = useSelector(
		state => state.restaurant
	)
	const { slug } = useParams()
	const dispatch = useDispatch()

	const showResultSearch = () => {
		try {
			dispatch(searchRestaurantsStart())
			restaurantData.map(
				restaurant =>
					compareTwoStrings(restaurant.name.toLowerCase(), slug.toLowerCase()) >
						0.2 && dispatch(searchRestaurantsSuccess([restaurant]))
			)
		} catch (error) {
			console.log(error)
		}
	}

	useEffect(() => {
		showResultSearch()
		console.log(searchedData)
	}, [slug])

	return (
		<div>
			<Header />
			<ul>
				{searchedData.map(restaurant => (
					<li>{restaurant.name}</li>
				))}
			</ul>
		</div>
	)
}
