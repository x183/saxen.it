import ButtonContainerSmol from "./ButtonContainerSmol"
import PdfPanel from "./PdfPanel"

const styles={
	containerFlex:{
		display:'flex',
		flex:8,
		flexDirection:'row',
		alignContent:'stretch',
		backgroundColor:'white'
	}
}
export default function ButtonContainerContainer(json,type){
	const smolcontainer=ButtonContainerSmol(json,type);
	return (
		<div style={styles.containerFlex}>
			{smolcontainer}
			<PdfPanel/>
		</div>
	)
}