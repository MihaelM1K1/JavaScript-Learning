function validate(){
    let input = document.querySelector('#email')
    let value = input.value
    let text = document.querySelector('#validation')
    let atpos = value.indexOf('@')
    let dotpos = value.indexOf('.')

    if(value.includes('@') && value.includes('.')){
        let beforeAt = value.substring(0, atpos)
        let betweenAtDot = value.substring(atpos + 1, dotpos)
        let afterDot = value.substring(dotpos + 1, value.length)
        
        if (beforeAt.length>2){
            if(betweenAtDot.length>1){
                if(afterDot.length>1){
                    text.innerText = 'Email is valid.'
                }
                else{
                    text.innerText = 'Email is not valid.'
                }
            }
            else{
                text.innerText = 'Email is not valid.'
            }
        }
        else{
            text.innerText = 'Email is not valid.'
        }
    }
    else{
        text.innerText = 'Email is not valid.'
    }
}