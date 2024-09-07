


document.getElementById('btn').addEventListener('click', () => {






    let AdvicAPI = 'https://api.adviceslip.com/advice'

    fetch(AdvicAPI)

    .then(Response => Response.json())
    .then(data => {


        
try {
    let Advice = data.slip
    

    let goodAdvice = document.getElementById('contain')

    goodAdvice.innerHTML = ""
    
    let show = document.createElement('h3')

    show.textContent = Advice.advice

    goodAdvice.append(show)
}catch(Err){

    alert("Something Went Wrong !!")
}
})


})
