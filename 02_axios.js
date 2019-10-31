const axios = require('axios')

// const request = axios.get('http://jsonplaceholder.typicode.com/posts')
// console.log(request)

const request = axios.get('http://jsonplaceholder.typicode.com/posts')
.then((response)=>{
    console.log(response)
}) // 정상적으로 return이 되었을 때
.catch((error)=>{
    console.log(error)
}) // 정상적으로 return이 되지 않았을 때
