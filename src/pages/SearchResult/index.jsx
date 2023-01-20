import React, { useEffect } from 'react'
import { useNavigate, useParams } from 'react-router-dom'
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
	const navigate = useNavigate()
	const { slug } = useParams()
	const dispatch = useDispatch()

	const showResultSearch = () => {
		try {
			dispatch(searchRestaurantsStart())
			restaurantData.map(restaurant => (
				<>
					{console.log(restaurant)}{' '}
					{compareTwoStrings(
						restaurant.slug.toLowerCase(),
						slug != null && slug.toLowerCase()
					) > 0.2 && dispatch(searchRestaurantsSuccess(restaurant))}
				</>
			))
		} catch (error) {
			console.log(error)
		}
	}

	const getAllData = async () => {
		dispatch(restaurantsListFetching())
		try {
			const response = await restaurantsService.fetchRestaurantList()
			dispatch(restaurantsSuccessFetched(response.data))
		} catch (error) {
			dispatch(errorOccuredInFetching(error.message))
		}
	}

	useEffect(() => {
		if (slug == 'all') {
			getAllData()
		} else {
			showResultSearch()
		}
	}, [slug])

	return (
		<div>
			<Header />
			<ul></ul>
		</div>
	)
}
