import ButtonBig from '../components/ButtonBig'


const styles={
	containerSmolFlex:{
		display:'flex',
		flexDirection:'column',
		flex:1.3,
		alignContent:'stretch',
		backgroundColor:'white'
	}

}


export default function ButtonContainerSmol(json,type){
	const elementList=[];
	for(var i=0;i<1;i++){
		elementList[i]=ButtonBig(json[0]["course_name"],i);
	}
	return (
		<div style={styles.containerSmolFlex}>
			{elementList}
		</div>
	)
}