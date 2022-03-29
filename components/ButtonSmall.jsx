const styles={
	buttonBig: {
		backgroundColor:'lightgray',
		color:'black',
		height:'100%',
		width:'100%',
	}
}

export default function ButtonBig({text,id,fun}){
	return (
		<button onClick={() => fun(text)}  style={styles.buttonBig}id={id}>{text}</button>
	)
}
