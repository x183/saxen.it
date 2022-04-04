const styles = {
	focusButton: {
		backgroundColor: 'lightgray',
		color: 'black',
		height: '5vh',
		width: '5vw',
		zIndex: '1',
		float:'right',
		fontSize:'0.75vw',
	}
}

export default function FocusButton({fun,val,funfun}) {
	return (
		<button  style={styles.focusButton} id="no" onClick={()=>fun(val,funfun)}>
				Full screen
		</button>
	)
}
