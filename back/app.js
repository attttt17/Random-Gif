const request= require('request')
const path = require('path')
const express = require('express')

const app = express()

const open = path.join(__dirname,'../')

app.use(express.static(open))

const url = 'https://api.giphy.com/v1/gifs/random?api_key=TsEoiQqtKGmgEDq1LVhKdmDiCUKkHS3J'
   var data 
  request({url : url , json : true} ,  (Error , Response)=>{
  if(Error){
      console.log('Unable to connect')
  }
  else{
    console.log(Response.body)
    data = Response.body
  }

})

app.get('', (req,res)=>{
    res.render('index.html' ,{
      url:"https://api.giphy.com/v1/gifs/random?api_key=TsEoiQqtKGmgEDq1LVhKdmDiCUKkHS3J"
    });
})

app.listen(3000 , ()=>{
    console.log('server is up')
})