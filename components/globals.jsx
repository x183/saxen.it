var query;
fetch("http://127.0.0.1:5000")
.then(res=>res.json())
.then(data=>query=data)
.then(()=>console.log(query[0]));
Object.freeze(query);
//export default query;