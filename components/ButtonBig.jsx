const styles={
	buttonBig: {
		backgroundColor:'darkblue',
		color:'beige',
		height:'100%',
		width:'100%',
	}
}

export default function ButtonBig(text,id){
	return (
		<button  style={styles.buttonBig}id={id}>{text}</button>	)
}