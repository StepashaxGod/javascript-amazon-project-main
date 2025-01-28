export const cart = [];

export function addToCart(productId) {
  
   let matchingItem; 
   cart.forEach((cartItem) => {
     if (productId === cartItem.productId) {
       matchingItem = cartItem;
     }
   });
 
   let value = Number(document.querySelector(`.js-quntity-selector-${productId}`).value);
   if (matchingItem) {
     matchingItem.quantity += value;
   } else {
   
     cart.push({
       productId: productId,
       quantity: value
     })
   }
}

 
