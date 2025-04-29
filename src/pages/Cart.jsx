import { Link } from 'react-router-dom';
import React, { useState, useEffect } from 'react';
import EmptyCart from "../assets/empty_cart.svg";

export default function Cart({ cart, changeQuantity, removeItem }) {
  const [calculateTotal, setcalculateTotal] = useState(0);

  useEffect(() => {
    let price = 0;
    cart.forEach(item => {
      price += +(item.salePrice ? item.salePrice : item.originalPrice) * item.quantity;
    });
    setcalculateTotal(price);
  }, [cart]);

  const calculateTax = (subtotal) => {
    return subtotal * 0.1;
  };

  const calculateFinalTotal = (subtotal) => {
    return subtotal + calculateTax(subtotal);
  };

  const handleRemove = (id) => {
    removeItem(id);
  };

  return (
    <div id="books__body">
      <main id="books__main">
        <div className="books__container">
          <div className="row">
            <div className="book__selected--top">
              <h2 className="cart__title">Cart</h2>
            </div>
            <div className="cart">
              <div className="cart__header">
                <span className="cart__book">Book</span>
                <span className="cart__quantity">Quantity</span>
                <span className="cart__total">Price</span>
              </div>
              <div className="cart__body">
                {cart.length > 0 ? (
                  cart.map((book) => (
                    <div className="cart__item" key={book.id}>
                      <div className="cart__book">
                        <img src={book.url} className="cart__book--img" alt={book.title} />
                        <div className="cart__book--info">
                          <span className="cart__book--title">{book.title}</span>
                          <span className="cart__book--price">
                            ${(book.salePrice ? book.salePrice : book.originalPrice).toFixed(2)}
                          </span>
                          <button className="cart__book--remove" onClick={() => handleRemove(book.id)}>Remove</button>
                        </div>
                      </div>
                      <div className="cart__quantity">
                        <input
                          type="number"
                          min={0}
                          max={99}
                          className="cart__input"
                          onChange={(event) => changeQuantity(book, event.target.value)}
                          value={book.quantity}
                        />
                      </div>
                      <div className="cart__total">
                        ${((book.salePrice ? book.salePrice : book.originalPrice) * book.quantity).toFixed(2)}
                      </div>
                    </div>
                  ))
                ) : (
                  <div className="cart__empty">
                    <img src={EmptyCart} alt="Empty cart" className="cart__empty--img" />
                    <h2>You don't have any books in your cart!</h2>
                    <Link to="/books">
                      <button className="btn">Browse Books</button>
                    </Link>
                  </div>
                )}
              </div>

              {cart.length > 0 && (
                <div className="total">
                  <div className="total__item total__sub-total">
                    <span>Subtotal</span>
                    <span>${calculateTotal.toFixed(2)}</span>
                  </div>
                  <div className="total__item total__tax">
                    <span>Tax</span>
                    <span>${calculateTax(calculateTotal).toFixed(2)}</span>
                  </div>
                  <div className="total__item total__price">
                    <span>Total</span>
                    <span>${calculateFinalTotal(calculateTotal).toFixed(2)}</span>
                  </div>
                  <button
                    className="btn btn__checkout no-cursor"
                    onClick={() => alert('Have not gotten around to this :(')}
                  >
                    Proceed To Checkout
                  </button>
                </div>
              )}
            </div>
          </div>
        </div>
      </main>
    </div>
  );
}
