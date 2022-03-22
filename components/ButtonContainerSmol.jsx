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
	for(var i=0;i<json.length;i++){
		if(json[i]["course_type"]==type){
		elementList[i]=ButtonBig(json[i]["course_name"],i);
		}
	}
	return (
		<div style={styles.containerSmolFlex}>
			{elementList}
		</div>
	)
}