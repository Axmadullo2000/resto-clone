import { useSelector } from 'react-redux'

export const Card = () => {
	const { restaurantData } = useSelector(state => state.restaurant)
	return (
		<>
			<h2>Card</h2>
			{restaurantData.map(item => {
				const { name } = item
				return <h2 key={item.id}>{name}</h2>
			})}
		</>
	)
}
