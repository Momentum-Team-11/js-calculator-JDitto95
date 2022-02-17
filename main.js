

// what does this do? Declares a variable.

const cButton = document.getElementById('cButton')
cButton.addEventListener('click', function(){
    console.log('it works')
    result.innerHTML=''
})
const result = document.getElementById('result')

const button1 = document.getElementById('button1')
button1.addEventListener('click', function(){
    console.log('saucy')
    result.innerHTML+=1
})
const buttonPlus = document.getElementById('buttonPlus')
buttonPlus.addEventListener('click', function(){
    result.innerHTML+='+'
})
const eqButton = document.getElementById('eqButton')
eqButton.addEventListener('click', function(){
    console.log('click')
    let display = result.innerHTML
    console.log(display)
    result.innerHTML=eval(display)
})



// numberButtons.addEventListener(numberButtons)
// operationButtons.addEventListener(operationButtons)
// answerButtons.addEventListener(answerButtons)
