import ButtonSmall from '../components/ButtonSmall'


const styles={
	containerSmolFlex:{
		display:'flex',
		flexDirection:'column',
		flex:1.3,
		alignContent:'stretch',
		backgroundColor:'beige',

	}

}


export default function ButtonContainerSmol({json,type,fun}){
	const elementList=[];
	for(var i=0;i<json.length;i++){
		if(json[i]["course_type"]==type){
			var name=json[i]["course_name"];
		elementList[i]=ButtonSmall({text:name,id:i,fun});
		}
	}
	return (
		<div style={styles.containerSmolFlex}>
			{elementList}
		</div>
	)
}