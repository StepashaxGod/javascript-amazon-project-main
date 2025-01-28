import { cart, deleteProduct } from '../data/cart.js';
import { products } from '../data/products.js';
import { formatCurrency } from './utils/money.js';

let cartHtml = '';

cart.forEach((cartProduct) => {
   const cartProductId = cartProduct.productId;

   let mathingProduct;

   products.forEach((product) => {
      if (product.id === cartProductId) {
         mathingProduct = product;
      }
   })


   cartHtml += `
   <div class="cart-item-container">
      <div class="delivery-date">
         Delivery date: Tuesday, June 21
      </div>

      <div class="cart-item-details-grid">
         <img class="product-image"
            src="${mathingProduct.image}">

         <div class="cart-item-details">
            <div class="product-name">
            ${mathingProduct.name}
            </div>
            <div class="product-price">
           $${formatCurrency(mathingProduct.priceCents)}
            </div>
            <div class="product-quantity">
            <span>
               Quantity: <span class="quantity-label">${cart.quantity}</span>
            </span>
            <span class="update-quantity-link link-primary">
               Update
            </span>
            <span class="delete-quantity-link link-primary js-delete-link" data-product-id="${mathingProduct.id}">
               Delete
            </span>
            </div>
         </div>

         <div class="delivery-options">
            <div class="delivery-options-title">
            Choose a delivery option:
            </div>
            <div class="delivery-option">
            <input type="radio" checked
               class="delivery-option-input"
               name="delivery-option-${mathingProduct.id}">
            <div>
               <div class="delivery-option-date">
                  Tuesday, June 21
               </div>
               <div class="delivery-option-price">
                  FREE Shipping
               </div>
            </div>
            </div>
            <div class="delivery-option">
            <input type="radio"
               class="delivery-option-input"
               name="delivery-option-${mathingProduct.id}">
            <div>
               <div class="delivery-option-date">
                  Wednesday, June 15
               </div>
               <div class="delivery-option-price">
                  $4.99 - Shipping
               </div>
            </div>
            </div>
            <div class="delivery-option">
            <input type="radio"
               class="delivery-option-input"
               name="delivery-option-${mathingProduct.id}">
            <div>
               <div class="delivery-option-date">
                  Monday, June 13
               </div>
               <div class="delivery-option-price">
                  $9.99 - Shipping
               </div>
            </div>
            </div>
         </div>
      </div>
   </div>
`
});


document.querySelector(".js-order-summary").innerHTML = cartHtml;

document.querySelectorAll(".js-delete-link").forEach((link) => {
   link.addEventListener("click", () => {
      const productId = link.dataset.productId;
      deleteProduct(productId);
   });
});

