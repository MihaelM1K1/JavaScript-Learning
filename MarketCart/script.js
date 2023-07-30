let total = 0
let totalElement = document.querySelector('.total')

function addToCart(element){
    let mainEl = element.closest('.single-item');
    let price = mainEl.querySelector('.price').innerText;
    let name = mainEl.querySelector('h3').innerText;
    let quantity = mainEl.querySelector('input').value;
    let cartItems = document.querySelector('.cart-items')
    let multipliedPrice = price.substring(1, price.length) * quantity
    total += multipliedPrice

    if (quantity>0){
        let cartItem = document.createElement('p')
        cartItem.innerText = `${name} × ${quantity} = ${multipliedPrice}$`
        cartItem.classList = 'cart-single-item'
        cartItem.setAttribute('value', `${multipliedPrice}`)
        cartItem.setAttribute('item', `${name}`)
        cartItems.appendChild(cartItem)
        element.innerText = 'Added'
        element.setAttribute('disabled', 'true')
        totalElement.innerText = `Total: ${total}$`
        let deleteButton = document.createElement('button')
        deleteButton.innerText = 'Remove'
        deleteButton.setAttribute('onclick', 'deleteCartItem(this)')
        cartItem.appendChild(deleteButton)
    }
}
function deleteCartItem(element){
    let cartItemToDelete = element.parentElement;
    let itemValue = cartItemToDelete.getAttribute('value');
    let itemName = cartItemToDelete.getAttribute('item');
    let listedItems = document.querySelectorAll('.single-item')

    total -= itemValue

    cartItemToDelete.remove()

    totalElement.innerText = `Total: ${total}$`

    if(total<1){
        totalElement.innerText= ''
    }

    listedItems.forEach(function(listedItem){
        let listedName = listedItem.querySelector('.si-content h3').innerText;

        if (listedName === itemName){
            listedItem.querySelector('.actions input').value = 0;
            listedItem.querySelector('.actions button').removeAttribute('disabled');
            listedItem.querySelector('.actions button').innerText = 'Add';
        }
    })
}

