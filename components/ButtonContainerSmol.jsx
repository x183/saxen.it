import ButtonSmall from '../components/ButtonSmall'


const styles={
	containerSmolFlex:{
		flexDirection:'column',
		flex:1.3,
		alignContent:'stretch',


	}

}


export default function ButtonContainerSmol({json,type,fun}){
	const elementList=[];
	let count=0;
	for(var i=0;i<json.length;i++){
		if(json[i]["course_type"]==type){
			count++;
			var name=json[i]["course_name"];
		elementList[i]=ButtonSmall({text:name,id:i,fun});
		}
	}
	if(count==0){
	return (<div></div>)
	}
	return (
		<div className='Default'style={styles.containerSmolFlex}>
			{elementList}
		</div>
	)

}
