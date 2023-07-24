const now = new Date();
const hours = now.getHours();

textHTML = document.querySelector('#Greeting')

if (3>=hours){
    textHTML.innerText = `Good night`
}
else if (12>=hours){
    textHTML.innerText = `Good morning`
} 
else if (17>=hours){
    textHTML.innerText = `Good afternoon`
}
else if (20>=hours){
    textHTML.innerText = `Good evening`
}
if(21<=hours){
    textHTML.innerText = `Good night`
}
;
