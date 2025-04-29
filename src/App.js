import Nav from './components/Nav';
import React, {useState, useEffect} from 'react';
import Home from './pages/Home';
import Footer from './components/Footer';
import Books from './pages/Books';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import { books } from './data'; // Your books data
import BookInfo from './pages/BookInfo';
import Cart from './pages/Cart';


function App() {
  const [cart, setCart] = useState ([])

  
  function addToCart(book) {
    setCart([...cart, {...book, quantity: 1}])
  }

  function changeQuantity(book, quantity) {
    setCart(cart.map(item => 
      item.id === book.id 
        ?  {
          ...item, 
          quantity: +quantity,
        }
        : item
      )
    );
  }

  function removeItem(id) {
    setCart(cart.filter(book => book.id !== id));
  }

  function numberOfItems () {
    let counter = 0;
    cart.forEach(item => {
      counter += item.quantity
    })
    return counter;
  }

  useEffect(() => {
    console.log(cart)
  }, [cart])

  return (
    <Router>
      <div className="App">
        <Nav numberOfItems={numberOfItems()} />
        <Routes>
          {/* Home Route */}
          <Route path="/" element={<Home />} />

          {/* Books Route */}
          <Route path="/books" element={<Books books={books} />} />

          {/* Book Info Route */}
          <Route path="/books/:id" element={<BookInfo books={books} addToCart={addToCart} cart={cart} />} />
          {/* Cart Route */}
          <Route path="/cart" element={<Cart books={books} cart={cart} changeQuantity={changeQuantity} removeItem={removeItem} />} />
        
        </Routes>
        <Footer />
      </div>
    </Router>
  );
}

export default App;
