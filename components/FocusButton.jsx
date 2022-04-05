const styles = {
	focusButton: {
		height: '5vh',
		width: '5vw',
		zIndex: '1',
		float:'right',
		fontSize:'0.75vw',
	}
}

export default function FocusButton({fun,val,funfun}) {
	return (
		<button className="Button" style={styles.focusButton} id="no" onClick={()=>fun(val,funfun)}>
				Full screen
		</button>
	)
}
