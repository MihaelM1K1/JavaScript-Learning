function newElement(){
    let ul = document.querySelector('#list')
    let li = document.createElement('li')
    let textInput = document.querySelector('#textInput')
    let linum = (document.querySelectorAll("li").length)+1;
    let closebutton=document.createElement('span')
    li.innerText= textInput.value
    li.classList='todo-li'
    li.setAttribute("id",`li${linum++}`)
    li.setAttribute("onclick",`check(id)`)
    ul.appendChild(li)
    closebutton.innerText= `X`
    closebutton.classList= 'close'
    closebutton.setAttribute("id", `lispan${linum}`)
    closebutton.setAttribute("onclick", "liDelete(id)")
    li.appendChild(closebutton)

    textInput.value=''
}
function check(id){
    liItemCheck=document.querySelector(`#${id}`)
    liItemCheck.classList.toggle("checked")
}
function liDelete(id){
    let childButton=document.querySelector(`#${id}`)
    childButton.parentElement.remove()
}