



const submit = document.querySelector(".new-gif")

const message2 = document.querySelector("#message-2")
const url1 = 'https://api.giphy.com/v1/gifs/random?api_key=TsEoiQqtKGmgEDq1LVhKdmDiCUKkHS3J'
submit.addEventListener('click',(e)=>{
    e.preventDefault()
    fetch(url1).then((response) => {
        response.json().then((data) => {
            if(data.error){

            }
            else{

                

            
                 const regex = data.data.images.fixed_width_still.url
                document.getElementById('message-1').innerHTML = "<img src = '" + regex+ "'alt = 'infinix'>"
            }
        })
    })
   

  console.log('click ')
})




