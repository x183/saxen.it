import ButtonBig from '../components/ButtonBig'
import React from 'react'
const styles={
	containerFlex:{
		flex:1,
		flexDirection:'row',
		alignContent:'stretch'
	}
}
var superCats=["MATTE","PROGRAMMERING","ANNAT"];

export default function ButtonContainer({jso,fun}){
	const elements=[];
	var i=0;
	let size=10/superCats.length;
	for(i=0;i<superCats.length;i++){
		var cat=superCats[i];
		elements[i]=ButtonBig({text:cat,id:superCats[i].toLowerCase(),size:size,fun:fun});
	}
	return (
		<div className='Default'style={styles.containerFlex}>
			{elements}
		</div>
	)
}