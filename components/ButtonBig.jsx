import Link from 'next/link';

const styles={
	buttonBig: {
		backgroundColor:'lightgray',
		color:'black',
		height:'10vh',
		width:'100%',

	},
	svg: {
		width:'100%',
		height:'100%',
	},
	text:{
		width:'100%',
		height:'100%',
		textAlign:'center',

	}
}

export default function ButtonBig({text,id,amount,fun}){
	let size=10/amount;
	let txt=text.toLowerCase();
	return (
		//<Link href={`/${txt}`}>
		<button onClick={()=>fun(id)}style={styles.buttonBig}id={id}>
			<p style={{fontSize: size+"vw",marginTop:"0vh"}}>{text}</p>
		</button>
		//</Link>
	)
}


//<svg style={styles.svg} viewBox="0 0 100% 100%"><text style={styles.text} x="0"y="100%">{text}</text></svg>

//onClick={() => buttonFun(text)}