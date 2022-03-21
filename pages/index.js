import Head from 'next/head'
import Image from 'next/image'
import Welcome from '../components/Welcome'
import ButtonContainer from '../components/ButtonContainer'
import ButtonContainerSmol from '../components/ButtonContainerSmol'
import PdfPanel from '../components/PdfPanel'
import ButtonContainerContainer from '../components/ButtonContainerContainer'
import query from '../components/globals'
import React from 'react'


//query=fetch("http://127.0.0.1:5000").then(async r=>console.log(await r.text()));
//Object.freeze(query);




const styles={
  Home: {
    backgroundColor:' darkcyan',
    display:'flex',
    alignContent:'stretch',
    flexDirection:'column',
    height:'95vh'
  }
}


  //bod.innerHTML=render(){return({container} {containercontainer})};


  async function getJSON(){
    var querty;
    await fetch("http://127.0.0.1:5000")
      .then(res=>res.json())
      .then(data=>querty=data)
      .then(()=>console.log(querty[0]));
    return querty;
}


const temp=[{
	course_id:1,
	course_name:"temp",
	course_type:1
}];

var container;
var containercontainer;
export default async function Home() {

  var json=  await getJSON();
  console.log(json);


//  json.then(
    console.log(json.result);
    container=ButtonContainer(json);
    containercontainer=ButtonContainerContainer(json);
  //  )
    return (
      <body style={styles.Home} id='bod'>
        <Welcome/>
        {container}
        {containercontainer}

      </body>
    )
}
