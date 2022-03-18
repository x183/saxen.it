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


console.log(query);
console.log("1");
console.log(query);


function pausecomp(millis)
{
    var date = new Date();
    var curDate = null;
    do { curDate = new Date(); }
    while(curDate-date < millis);
}

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

  var container;
  var containercontainer;
class PutTogetherErer extends React.Component{
  static async getJSON(){
    var querty;
    await fetch("http://127.0.0.1:5000")
      .then(res=>res.json())
      .then(data=>querty=data)
      .then(()=>console.log(querty[0]));
    console.log(querty);
    container=ButtonContainer(querty);
    containercontainer=ButtonContainerContainer(querty);
    document.body.replaceWith(PutTogetherErer.render());
    console.log(container);
    return querty;
}
render (){
  return (
    <body style={styles.Home} id='bod'>
    {container}
    {containercontainer}
    </body>
  )
}
}
const temp=[{
	course_id:1,
	course_name:"temp",
	course_type:1
}];


export default function Home() {

  var json=PutTogetherErer.getJSON("http://127.0.0.1:5000");
  console.log(json);


//  json.then(
    console.log(json.result);
    container=ButtonContainer(temp);
    containercontainer=ButtonContainerContainer(temp);
  //  )
    return (
      <body style={styles.Home} id='bod'>
      <Welcome/>
      {container}
      {containercontainer}

      </body>
    )
}
