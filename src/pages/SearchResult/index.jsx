import React, { useEffect } from 'react'
import { useParams } from 'react-router-dom'
import { useDispatch, useSelector } from 'react-redux'
import { compareTwoStrings } from 'string-similarity'

import Header from '../../components/Header'
import {
	errorOccuredInFetching,
	restaurantsListFetching,
	restaurantsSuccessFetched,
	searchRestaurantsStart,
	searchRestaurantsSuccess,
} from '../../redux/slice/RestaurantSlice'
import { restaurantsService } from '../../service'

export const SearchResult = () => {
	const { restaurantData, searchedData } = useSelector(
		state => state.restaurant
	)
	const { slug } = useParams()
	const dispatch = useDispatch()

	const showResultSearch = () => {
		try {
			dispatch(searchRestaurantsStart())
			if (slug == 'all') {
				dispatch(searchRestaurantsSuccess(restaurantData))
			} else {
				restaurantData.map(
					restaurant =>
						compareTwoStrings(
							restaurant.name.toLowerCase(),
							slug.toLowerCase()
						) > 0.2 && dispatch(searchRestaurantsSuccess([restaurant]))
				)
			}
		} catch (error) {
			console.log(error)
		}
	}

	useEffect(() => {
		showResultSearch()
		const getAllData = async () => {
			dispatch(restaurantsListFetching())
			try {
				const response = await restaurantsService.fetchRestaurantList()
				dispatch(restaurantsSuccessFetched(response.data))
			} catch (error) {
				dispatch(errorOccuredInFetching(error.message))
			}
		}
		if (slug == 'all') {
			getAllData()
		}
	}, [slug])

	return (
		<div>
			<Header />
			<ul>
				{slug == 'all'
					? restaurantData.map(restaurant => (
							<li key={restaurant.id}>{restaurant.name}</li>
					  ))
					: searchedData.map(restaurant => (
							<li key={restaurant.id}>{restaurant.name}</li>
					  ))}
			</ul>
		</div>
	)
}
