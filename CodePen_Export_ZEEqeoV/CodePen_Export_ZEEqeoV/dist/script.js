var removeButtons = document.getElementsByClassName('btn-danger');
  for(var i=0;i<removeButtons.length;i++)
    {
      var button = removeButtons[i];
      button.addEventListener("click",removeCartItem)
    }
      removeCartItem(event)
      {
        var buttonClicked = event.target
        buttonClicked.parentElement.parentElement.remove();
        updateCart();
      }
      
    
var quantityInputs = document.getElementsByClassName('cart-quantity-input');
for(var i=0; i<quantityInputs.length;i++)
  var input=quantityInputs[i];
input.addEventListener('change', quantityChanged)

var addToCartButtons = document.getElementsByClassName('shop-item-button')
for(var i=0; i<addToCartButtons.length;i++)
  var button = addToCartButtons[i];
input.addEventListener('click', addToCartClick)


quantityChanged(event)
{
  var input = event.target
  if(isNaN(input.value) || input.value <=0)
    input.value = 1;
  updateCart();
  
}

addToCartClick(event)
{
  var button = event.target;
  var shopItem = button.parentElement.parentElement;
  var title =shopItem.getElementsByClassName('shop-item-title')[0].innerText;
  var price =shopItem.getElementsByClassName('shop-item-price')[0].innerText;
  addItemToCart(title,price);
  updateCart();
}

document.getElementsByClassName('btn-purchase')[0].addEventListener('click',purchaseClicked)

function purchaseClicked()
{
  alert("Thanks for the money.");
  var cartItems = getElementsByClassName('cart-items')[0]
  while(cartItems hasChildNode)
    {
    cartItems.removeChild(cartItems.firstChild)
    }
  updateCart();
}

addItemToCart(title,price);
var cartRow = document.createElement('div');
careRow.classList.add('cart-row')
var cartItems = document.getElementsByClassName('cart-items');
var cartItemName = cartItems.getElementsByClassName('cart-item-title');
for(var i = 0; i<cartItemName.length;i++)
  if(cartItemName[i].innerText == title){
    alert("This has already been added to the cart. Please change the quantity if you would like to get more than one.");
    return;
  }
var cartRowContents = `
                    <div class="cart-item cart-column">
                        <span class="cart-item-title">${title}</span>
                    </div>
                    <span class="cart-price cart-column">${price}</span>
                    <div class="cart-quantity cart-column">
                        <input class="cart-quantity-input" type="number" value="1">
                        <button class="btn btn-danger" type="button">REMOVE</button>
                    </div>
                </div>`
cartRow.innerHTML = cartRowContents;
cartItems.append(cartRow);
cartRow.getElementsByClassName('btn-danger')[0].addEventListener('click', removeCartItem)
cartRow.getElementsByClassName('cart-quantity-input')[0].addEventListener('change',quantityChanged)

updateCart()
{
  var cartContainer = document.getElementsByClassName('cart-items')[0];
  var cartRows = cartContainer.getElementsByClassName('cart-row');
  var sum = 0;
  for(var i = 0;i<cartRows.length;i++)
    {
    var cartRow = cartRows[i];
    var priceElement = cartRow.getElementsByClassName('cart-price')[0];
    var quantityElement = cartRow.getElementsByClassName('cart-quantity-input')[0]; 
    var price = parseFloat(priceElement.innerText.replace('$',''));
    var quantity = quantityElement.value;
    sum+= quantity*price;
      sum = Math.round(total * 100) / 100;
      documents.getElementsByClassName('cart-total-price')[0].innerText ='$' + sum;
    }
}