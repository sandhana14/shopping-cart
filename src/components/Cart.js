import React from "react";

function Cart({ cartitems, onadd, onremove }) {
  const itemsPrice = cartitems.reduce(
    (accumulator, current) => accumulator + current.price * current.quantity,
    0
  );
  const taxPrice = itemsPrice * 0.14;
  const shippingPrice = itemsPrice > 2000 ? 0 : 50;
  const totalPrice = itemsPrice + taxPrice + shippingPrice;

  return (
    <div className="block column-one top">
      <h2>Cart items</h2>

      <div>
        {cartitems.length === 0 && (
          <div className="cart-empty-message">Cart is empty now!!!!</div>
        )}
      </div>

      {cartitems.map((item) => (
        <div key={item.id} className="row">
          <div className="column-two">{item.name}</div>
          <div className="column-two">
            <button onClick={() => onadd(item)} className="add">
              +
            </button>
            <button onClick={() => onremove(item)} className="remove">
              -
            </button>
          </div>
          <div className="column-two text-right">
            {item.quantity}x ${item.price.toFixed(2)}
          </div>
        </div>
      ))}

      {cartitems.length !== 0 && (
        <>
          <hr></hr>
          <div className="row">
            <div className="column-two">Item price</div>
            <div className="column-one text-right">
              ${itemsPrice.toFixed(2)}
            </div>
          </div>
          <div className="row">
            <div className="column-two">Tax price</div>
            <div className="column-one text-right">${taxPrice.toFixed(2)}</div>
          </div>
          <div className="row">
            <div className="column-two">Shipping price</div>
            <div className="column-one text-right">
              ${shippingPrice.toFixed(2)}
            </div>
          </div>{" "}
          <div className="row">
            <div className="column-two">
              <strong>Total price</strong>
            </div>
            <div className="column-one text-right">
              <strong>${totalPrice.toFixed(2)}</strong>
            </div>
          </div>
          <hr />
          <div className="checkout-button">
            <button onClick={() => alert("Thanks for shopping")}>
              Checkout
            </button>
          </div>
        </>
      )}
    </div>
  );
}

export default Cart;
