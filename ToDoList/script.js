function newElement(){
    let ul = document.querySelector('#list')
    let li = document.createElement('li')
    let textInput = document.querySelector('#textInput')
    let linum = document.querySelectorAll("li").length;
    li.innerText= textInput.value
    li.classList='todo-li'
    li.setAttribute("id",`li${linum++}`)
    li.setAttribute("onclick",`check(id)`)
    ul.appendChild(li)

    textInput.value=''
}
function check(id){
    liItemCheck=document.querySelector(`#${id}`)
    liItemCheck.classList.toggle("checked")
}