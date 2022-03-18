
const styles = {
	welcome: {
		color: 'beige',
		marginTop:'-2vh'
	},
	titleContainer:{
		height:'3vh',

	}

}

export default function Welcome() {
	return (
		<div style={styles.titleContainer}>
			<h1 style={styles.welcome}>Welcome </h1>
		</div>
	)
}
