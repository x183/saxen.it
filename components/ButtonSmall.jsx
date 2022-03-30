const styles = {
	buttonBig: {
		backgroundColor: 'lightgray',
		color: 'black',
		height: '100%',
		width: '100%',
	}
}

export default function ButtonSmall({ text, id, fun }) {
	return (
		<button onClick={() => fun(text)} style={styles.buttonBig} id={id}>
			<p style={{fontSize:"1.5vw",fontWeight:"800"}}>
				{text}
			</p>
		</button>
	)
}
