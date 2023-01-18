import { Link } from 'react-router-dom'
import Header from '../../components/Header'

export const Login = () => {
	return (
		<>
			<Header />
			<h2>Login</h2>
			<Link to='/auth/sign-up'>Registration</Link>
		</>
	)
}
