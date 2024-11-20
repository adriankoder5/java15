const nameElement = document.querySelector('#name');
const ageElement = document.querySelector('#age');
const heightElement = document.querySelector('#height');
const submitButton = document.querySelector('#submit-button');

function submit () {
    const name  = nameElement.value;
    const age = ageElement.value;
    const height = heightElement.value;
    if (name === ''){
        console.log('no name in feald');
    }  else if (age === ''){
        console.log('du er alderløs');
    } else if (height === '') {
        console.log('no height')
    } else{
        console.log('du er '+age+' år gammel og heter '+name+' og er '+height+'cm høy')
    }
}
function operators () {
    const name  = nameElement.value;
    const age = ageElement.value;
    const height = heightElement.value;

    if (name === 'stian'&&age >= 18 || height > 190){
        console.log('ye')
    }

    // if (name === 'stian') {
    // } else if (age == 25 ){
    // } else if (age > 18) {
    // } else if (name === 'stian'&&age > 18){
    // } else if ( name === 'stian'||age > 18){
    // }
}

function conditonOPP (){
    const arandomnumber = Math.floor(Math.random() * 3)+1
    console.log(arandomnumber)
    let damage = arandomnumber *2
    if (arandomnumber > 2) {
        console.log(damage)
    } else if (arandomnumber === 2){
        console.log(damage)
    } else{
        console.log(damage)
    }
}
conditonOPP()

submitButton.addEventListener('click', operators);