import { useEffect } from 'react'
import { useSelector, useDispatch } from 'react-redux'
import { useParams } from 'react-router-dom'

import Header from '../../components/Header'
import { detailedRestaurant } from '../../redux/slice/RestaurantSlice'
import { restaurantsService } from '../../service'

const RestaurantDetails = () => {
	const { id } = useParams()
	const dispatch = useDispatch()
	const { detailedData } = useSelector(state => state.restaurant)

	useEffect(() => {
		const getUniqueData = async () => {
			try {
				const response = await restaurantsService.fetchUniqueRestaurant(id)
				dispatch(detailedRestaurant(response))
				// console.log(response)
			} catch (error) {
				console.log(error)
			}
		}
		getUniqueData()
	})

	return (
		<div>
			<Header />
			<h2>{id}</h2>
			{Object.entries(detailedData).map(item => (
				<h2 key={item}>
					{item[0]}: {item[1]}
				</h2>
			))}
		</div>
	)
}

export default RestaurantDetails
