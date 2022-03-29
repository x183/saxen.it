import Head from 'next/head'
import Image from 'next/image'
import Welcome from '../components/Welcome'
import ButtonContainer from '../components/ButtonContainer'
import ButtonContainerSmol from '../components/ButtonContainerSmol'
import PdfPanel from '../components/PdfPanel'
import ButtonContainerContainer from '../components/ButtonContainerContainer'
import React, { useEffect, useState } from 'react'



//query=fetch("http://127.0.0.1:5000").then(async r=>console.log(await r.text()));
//Object.freeze(query);




const styles={
  Home: {
    backgroundColor:' darkcyan',
    display:'flex',
    alignContent:'stretch',
    flexDirection:'column',
    height:'100vh',
    width:'100vw',
    marginLeft:'0vw',
    marginRight:'0vw',
    marginTop:'0vh',
    marginBottom:'0vh'
  }
};


  //bod.innerHTML=render(){return({container} {containercontainer})};


  export async function getServerSideProps(){
    const response = await fetch(process.env.SERVER);
    const data = await response.json();
    console.log(data);
    return { props: { data } };
}


const temp=[{
	course_id:1,
	course_name:"temp",
	course_type:1
}];

var container;
var containercontainer;
export default function Home({data}) {

    container=ButtonContainer(data);
    containercontainer=ButtonContainerContainer(data,0);
  //  )
    return (
      <body style={styles.Home} >

        {container}
        {containercontainer}

      </body>
    )
}
