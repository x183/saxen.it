import ButtonContainerSmol from "./ButtonContainerSmol";
import PdfPanel from "./PdfPanel";


const styles={
	containerFlex:{
		flex:9,
		flexDirection:'row',
		alignContent:'stretch',
	}
}

export default function ButtonContainerContainer({json,type,pdf,setpdf}){


	const panel=PdfPanel({path:pdf});
	return (
		<div className="Default" style={styles.containerFlex}>
			<ButtonContainerSmol fun={setpdf} json={json} type={type}/>
			<PdfPanel path={pdf}/>
		</div>
	)
}