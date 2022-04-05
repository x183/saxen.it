

export default function ButtonSmall({ text, id, fun }) {
	return (
		<button onClick={() => fun(text)} className='Button' id={id}>
			<p style={{fontSize:"1.5vw",fontWeight:"800"}}>
				{text}
			</p>
		</button>
	)
}
