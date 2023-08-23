const now = new Date();
const hours = now.getHours();

GreetingEl = document.querySelector('#Greeting')

if(21<=hours || 3>=hours){
    GreetingEl.innerText = `Good night`
}
else if (12>=hours){
    GreetingEl.innerText = `Good morning`
} 
else if (17>=hours){
    GreetingEl.innerText = `Good afternoon`
}
else if (20>=hours){
    GreetingEl.innerText = `Good evening`
}