import ButtonBig from '../components/ButtonBig'
import React from 'react'
const styles={
	containerFlex:{
		display:'flex',
		flex:1,
		flexDirection:'row',
		alignContent:'stretch',
		backgroundColor:'white'
	}
}
var superCats=["Matte","Programmering","Annat"];

export default function ButtonContainer(jso){
	const elements=[];
	var i=0;
	for(i=0;i<superCats.length;i++){
		elements[i]=ButtonBig(superCats[i],i);
	}
	return (
		<div className='d-flex flex-row'style={styles.containerFlex}>
			{elements}
		</div>
	)
}