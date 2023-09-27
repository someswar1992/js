//added to cart
const cart = ["laptop", "mobile", "smartwatch"];

//place order
const promise = placeOrder(cart);

promise
  .then((orderId) => {
    console.log(orderId);
    //for proceed to payment, pass the order id
    return orderId;
  })
  .then((orderId) => {
    return proceedToPayment(orderId);
  })
  .then((paymentStatus) => {
    console.log(paymentStatus);
  })
  .catch((err) => {
    console.log(err);
  });
// There is a big promise chain and there is an error in any of the chain (any part of the chain) so the catch() at the end will handle any error that is down in the chain. or we can say catch() will handle all those error which are top of the catch.
// If below the catch() more then(), than it will run.

// first step
function placeOrder(cart) {
  const pro = new Promise((resolve, reject) => {
    // validate cart logic
    let validcart = true;
    if (!validcart) {
      const err = new Error("cart is not valid");
      reject(err);
    }
    // genearating order id logic
    const orderId = "12345";
    if (orderId) {
      setTimeout(() => {
        resolve(orderId);
      }, 5000);
    }
  });
  return pro;
}

// second step
function proceedToPayment(orderId) {
  return new Promise((resolve, reject) => {
    setTimeout(() => {
      resolve("Payment Done");
    }, 5000);
  });
}
