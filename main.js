

// what does this do? Declares a variable.

const cButton = document.getElementById('cButton')
cButton.addEventListener('click', function(){
    console.log('it works')
    result.innerHTML=''
})
const result = document.getElementById('result')

const button0 = document.getElementById('button0')
button0.addEventListener('click',function(){
    result.innerHTML+='0'
})

const button1 = document.getElementById('button1')
button1.addEventListener('click', function(){
    console.log('saucy')
    result.innerHTML+=1
})

const button2 = document.getElementById('button2')
button2.addEventListener('click', function(){
    result.innerHTML+=2
})

const button3 = document.getElementById('button3')
button3.addEventListener('click', function(){
    result.innerHTML+=3
})

const button4 = document.getElementById('button4')
button4.addEventListener('click', function(){
    result.innerHTML+=4
})

const button5 = document.getElementById('button5')
button5.addEventListener('click', function(){
    result.innerHTML+=5
})

const button6 = document.getElementById('button6')
button6.addEventListener('click', function(){
    result.innerHTML+=6
})

const button7 = document.getElementById('button7')
button7.addEventListener('click', function(){
    result.innerHTML+=7
})

const button8 = document.getElementById('button8')
button8.addEventListener('click', function(){
    result.innerHTML+=8
})

const button9 = document.getElementById('button9')
button9.addEventListener('click', function(){
    result.innerHTML+=9
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

const buttonDecimal = document.getElementById('buttonDecimal')
buttonDecimal.addEventListener('click', function(){
    result.innerHTML+='.'
    console.log('Yippee')
})
const buttonMinus = document.getElementById('buttonMinus')
buttonMinus.addEventListener('click', function(){
    result.innerHTML+='-'
})
const buttonDivision = document.getElementById('buttonDivision')
buttonDivision.addEventListener('click', function(){
    result.innerHTML+='/'
})
const buttonMult = document.getElementById('buttonMult')
buttonMult.addEventListener('click', function(){
    result.innerHTML+='*'
    console.log('say Hi')
})

// const buttonDecimal = document.getElementById('buttonDecimal')
// buttonDecimal.addEventListener('click', function(){

// })



