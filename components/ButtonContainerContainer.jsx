import ButtonContainerSmol from "./ButtonContainerSmol"
import PdfPanel from "./PdfPanel"
import { useState } from "react";

const styles={
	containerFlex:{
		display:'flex',
		flex:9,
		flexDirection:'row',
		alignContent:'stretch',
		backgroundColor:'beige'
	}
}

export default function ButtonContainerContainer({json,type,pdf,setpdf}){


	const panel=PdfPanel({path:pdf});
	return (
		<div style={styles.containerFlex}>
			<ButtonContainerSmol fun={setpdf} json={json} type={type}/>
			<PdfPanel path={pdf}/>
		</div>
	)
}

function buttonFun(id){
console.log(id);
setpdf(id+".pdf");

}