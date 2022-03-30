const styles = {
	focusButton: {
		backgroundColor: 'lightgray',
		color: 'black',
		height: '100%',
		width: '100%',
		zIndex: '1'
	}
}

export default function FocusButton({ fun }) {
	return (
		<button onClick={fun} style={styles.focusButton} id="no">
			<p style={{fontSize:"1.5vw",fontWeight:"800"}}>
				Full screen
			</p>
		</button>
	)
}
