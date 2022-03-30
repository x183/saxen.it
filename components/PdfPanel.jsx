const styles={
	pdfStyle: {
		backgroundColor:'beige',
		color:'beige',
		display:'flex',
		flex:10,
		width:'100%',

	}
}


export default function PdfPanel({path}){
	return (
		<embed style={styles.pdfStyle} src={`/notes/${path.toLowerCase()}.pdf`} type='application/pdf'/>

	)
}


//https://github.com/x183/notes/raw/main/notes/${path.toLowerCase()}.pdf