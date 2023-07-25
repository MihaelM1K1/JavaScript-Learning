function newElement(){
    let ul = document.querySelector('#list')
    let li = document.createElement('li')
    let textInput = document.querySelector('#textInput')
    let linum = document.querySelectorAll("li").length;
    let liID = `li${linum++}`
    li.innerText= textInput.value
    li.classList='todo-li'
    li.setAttribute("id",`li${linum++}`)
    ul.appendChild(li)

    textInput.value=''
}
function completed(id){

}