const styles={
	pdfStyle: {
		backgroundColor:'orange',
		color:'beige',
		display:'flex',
		flex:7,
		width:'100%',

	}
}


export default function PdfPanel(){
	return (
		//<div style={styles.pdfStyle}></div>
		<embed style={styles.pdfStyle} src='https://saxen.it/notes/linjalg.pdf' type='application/pdf'/>

	)
}