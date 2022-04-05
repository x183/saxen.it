const styles={
	pdfStyle: {

		flex:10,

	}
}


export default function PdfPanel({path}){
	return (
		<embed className='Default' style={styles.pdfStyle} src={`/notes/${path.toLowerCase()}.pdf`} type='application/pdf'/>

	)
}


//https://github.com/x183/notes/raw/main/notes/${path.toLowerCase()}.pdf