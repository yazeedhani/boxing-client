import IndexBoxers from './boxers/IndexBoxers'

const Home = (props) => {
	// const { msgAlert, user } = props
	console.log('props in home', props)

	return (
		<>
			<h2>Home Page</h2>
			<IndexBoxers />
		</>
	)
}

export default Home
