import React, { useState } from 'react';
import Book from '../components/ui/Book';

const Books = ({ books: initialBooks }) => {
  const [books, setBooks] = useState(initialBooks);

  function filterBooks(filter) {
    console.log(filter);

    if (filter === 'LOW-TO-HIGH') {
      setBooks(
        books
          .slice()
          .sort((a, b) => (a.salePrice || a.originalPrice) - (b.salePrice || b.originalPrice))
      );
    } else if (filter === 'HIGH-TO-LOW') {
      setBooks(
        books
          .slice()
          .sort((a, b) => (b.salePrice || b.originalPrice) - (a.salePrice || a.originalPrice))
      );
    } else if (filter === 'RATING') {
      setBooks(
        books.slice().sort((a, b) => b.rating - a.rating)
      );
    }
  }

  return (
    <div id="books__body">
      <main className="books__main">
        <section>
          <div className="books__container">
            <div className="row">
              <div className="books__header">
                <h2 className="section__title books__header--title">
                  All Books
                </h2>
                {/* Sort Dropdown! */}
                <select 
                  id="filter" 
                  defaultValue="DEFAULT" 
                  onChange={(event) => filterBooks(event.target.value)}
                >
                  <option value="DEFAULT" disabled>Sort</option>
                  <option value="LOW-TO-HIGH">Price, Low to High</option>
                  <option value="HIGH-TO-LOW">Price, High to Low</option>
                  <option value="RATING">Rating</option>
                </select>
              </div>
              <div className="books">
                {/* Rendering Books */}
                {books.map((book) => (
                  <Book book={book} key={book.id} />
                ))}
              </div>
            </div>
          </div>
        </section>
      </main>
    </div>
  );
};

export default Books;
