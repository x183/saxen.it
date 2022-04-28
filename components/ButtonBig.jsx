
export default function ButtonBig({text,id,size,fun}){
	return (
		<button onClick={()=>fun(id)}id={id}className='Button' style={{height:'10vh'}}>
			<p style={{fontSize: size+"vw",marginTop:"0vh"}}>{text}</p>
		</button>
	)
}
