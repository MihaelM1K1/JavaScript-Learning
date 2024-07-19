function newElement(){
    let ul = document.querySelector('#list') //selects the list
    let li = document.createElement('li') //creates a list item element
    let textInput = document.querySelector('#textInput') //pulls the text from the input
    let linum = (document.querySelectorAll("li").length)+1; //determines what index the item should be
    let closebutton=document.createElement('span') //makes a span
    li.innerText= textInput.value //makes the text of a task same as text from input
    li.classList='todo-li' //adds a class to the list item
    li.setAttribute("id",`li${linum++}`) //sets an id to the item
    li.setAttribute("onclick",`check(id)`) //make it execute check function on click
    ul.appendChild(li) //shows the element
    closebutton.innerText= `X` //makes the close item text be X
    closebutton.classList= 'close' //gives it a class called "close"
    closebutton.setAttribute("id", `lispan${linum-1}`) //sets it an id
    closebutton.setAttribute("onclick", "liDelete(id)") //adds a delete function to the button
    li.appendChild(closebutton) //shows the button

    textInput.value='' //clears the text input
}
function check(id){
    liItemCheck=document.querySelector(`#${id}`) //selects the element
    liItemCheck.classList.toggle("checked") //toggles the checked class
}
function liDelete(id){
    let childButton=document.querySelector(`#${id}`) //selects the element
    childButton.parentElement.remove() //deletes the element
}