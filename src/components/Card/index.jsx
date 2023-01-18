import { useSelector } from 'react-redux'
import { useNavigate, useParams } from 'react-router-dom'

export const Card = () => {
	const { restaurantData } = useSelector(state => state.restaurant)
	const navigate = useNavigate()
	const { slug } = useParams()
	return (
		<>
			<h2>Card</h2>
			{restaurantData.map(item => {
				const { name } = item
				return (
					<h2
						key={item.id}
						onClick={() => navigate(`/restaurant/detail/${name}`)}
					>
						{name}
					</h2>
				)
			})}
		</>
	)
}
