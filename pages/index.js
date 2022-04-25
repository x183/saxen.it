import Head from 'next/head'
import Image from 'next/image'
import Welcome from '../components/Welcome'
import ButtonContainer from '../components/ButtonContainer'
import ButtonContainerSmol from '../components/ButtonContainerSmol'
import PdfPanel from '../components/PdfPanel'
import ButtonContainerContainer from '../components/ButtonContainerContainer'
import FocusButton from '../components/FocusButton'
import React, { useState } from 'react'




//query=fetch("http://127.0.0.1:5000").then(async r=>console.log(await r.text()));
//Object.freeze(query);




const styles={
  Home: {
    backgroundColor:' darkcyan',
    display:'flex',
    alignContent:'stretch',
    flexDirection:'column',
    height:'100vh',
    marginLeft:'0vw',
    marginRight:'0vw',
    marginTop:'0vh',
    marginBottom:'0vh'



  },
  Bodbod:{
    backgroundColor:' darkcyan',
    height:'100vh',
    width:'100vw',
    marginLeft:'0vw',
    marginRight:'0vw',
    marginTop:'0vh',
    marginBottom:'0vh',
    overflow:'hidden'
  },
  ButBut:{
    position:'absolute',
    bottom:'0vh',
    right:'0vw',
    zIndex:'2',
  },
  BigThingy:{

  }
};


  //bod.innerHTML=render(){return({container} {containercontainer})};


  export async function getServerSideProps(){
    const response = await fetch(process.env.SERVER);
    const data = await response.json();
    //console.log(data);Home
    return { props: { data } };
}


const temp=[{
	course_id:1,
	course_name:"temp",
	course_type:1
}];

let container;
let containercontainer;
export default function Home({data}) {

  //react states och hooks
  //const [courses, setCourses] = useState(data);

  //setCourses(newData) // courses => newData

  const [type, setType] = useState("");
  const [pdf,setpdf]=useState("");
  const [z,setz]=useState(-1);
  function typeChange(newType){
    setpdf('');
    setType(newType);
  }
//  json.then(
    //console.log(json.result);
    container=ButtonContainer({jso:data,fun:typeChange});
    containercontainer=ButtonContainerContainer({json:data,type,pdf,setpdf});
  //  )
    return (
      <body style={styles.Bodbod}>
      <div style={styles.Home} id='bod'>
        {container}
        {containercontainer}

      </div>
      <div style={styles.ButBut}>
      <FocusButton fun={changePanelZ}val={''}funfun={setpdf}text={"no pdf"}/>
      <FocusButton fun={changePanelZ}val={z}funfun={setz}text={"Fullscreen"}/>
      </div>
      <div style={{zIndex:z,width:"100vw",height:"100vh",position:"absolute",top:"0vh",left:"0vw"}}>
        <PdfPanel path={pdf}/>
        </div>
      </body>
    )
}

function changePanelZ(z,setz){
  if(z==-1){
    setz(1);
  }
  else{
    setz(-1);
  }
}
