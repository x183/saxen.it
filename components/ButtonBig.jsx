import Link from 'next/link';

const styles={
	buttonBig: {
		backgroundColor:'darkblue',
		color:'beige',
		height:'100%',
		width:'100%',
	}
}

export default function ButtonBig({text,id}){
	return (
		<Link href={`/${text}`}>
		<button  style={styles.buttonBig}id={id}>{text}</button>
		</Link>
	)
}



//onClick={() => buttonFun(text)}