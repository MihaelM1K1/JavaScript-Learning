//creates total variable and selects div meant for total value
let total = 0
let totalElement = document.querySelector('.total')

function addToCart(element){
    //creates variables for every part of the element of a cart item
    let mainEl = element.closest('.single-item');
    let price = mainEl.querySelector('.price').innerText;
    let name = mainEl.querySelector('h3').innerText;
    let quantity = mainEl.querySelector('input').value;
    let cartItems = document.querySelector('.cart-items') //selects a div where cart items go
    let multipliedPrice = price.substring(1, price.length) * quantity
    total += multipliedPrice

    if (quantity>0){
        let cartItem = document.createElement('p') //creates an element
        cartItem.innerText = `${name} × ${quantity} = ${multipliedPrice}$` //creates the text with name of an item, quantity and its total price
        cartItem.classList = 'cart-single-item' //gives it a single item class
        cartItem.setAttribute('value', `${multipliedPrice}`) //sets its price as an attribute
        cartItem.setAttribute('item', `${name}`) //sets the name of an item as an attribute
        cartItems.appendChild(cartItem) //puts the element into a div
        element.innerText = 'Added' // changes the text of the item on the left that it's already added to cart
        element.setAttribute('disabled', 'true') //disables the button for adding it to a cart to prevent adding twice
        totalElement.innerText = `Total: ${total}$` //creates text with total price
        let deleteButton = document.createElement('button') //creates a delete button
        deleteButton.innerText = 'Remove' //changes text on delete button
        deleteButton.setAttribute('onclick', 'deleteCartItem(this)') //sets a function to the button
        cartItem.appendChild(deleteButton) //puts it as a child to the element
    }
}
function deleteCartItem(element){
    //creating a functon to delete the idem
    let cartItemToDelete = element.parentElement; //selects the item
    let itemValue = cartItemToDelete.getAttribute('value'); //gets the value to subtract from the total
    let itemName = cartItemToDelete.getAttribute('item'); //gets the name of the item
    let listedItems = document.querySelectorAll('.single-item') //selects all elements

    total -= itemValue //subtracts item's value from the total

    cartItemToDelete.remove() //removes the cart item

    totalElement.innerText = `Total: ${total}$` //changes the total text

    if(total<1){
        totalElement.innerText= ''
    } //makes total text empty if the total is 0

    listedItems.forEach(function(listedItem){
        let listedName = listedItem.querySelector('.si-content h3').innerText; //selects the name of item

        //if the name of the selected item is the same as the item we just deleted
        if (listedName === itemName){
            listedItem.querySelector('.actions input').value = 0; //sets the value in the input to 0
            listedItem.querySelector('.actions button').removeAttribute('disabled'); //makes button clickable
            listedItem.querySelector('.actions button').innerText = 'Add'; //gets the add text back
        }
    })
}

