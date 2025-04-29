import React, { useState, useEffect }from "react";
import { Link } from "react-router-dom";
import Rating from "../ui/Rating";
import Price from '../Price';
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faStar } from "@fortawesome/free-solid-svg-icons";



export default function Book({ book }) {
  const [imgLoaded, setImgLoaded] = useState(false);

  // Force skeleton to show for at least 1 second
  useEffect(() => {
    const timer = setTimeout(() => {
      setImgLoaded(true);
    }, 1000); // force 1-second delay
    return () => clearTimeout(timer);
  }, []);

  return (
    <div className="book">
      {imgLoaded ? (
        <>
          <Link to={`/books/${book.id}`}>
            <figure className="book__img--wrapper">
              <img src={book.url} alt={book.title} className="book__img" />
            </figure>
          </Link>
          <div className="book__title">
            <Link to={`/books/${book.id}`} className="book__title--link">
              {book.title}
            </Link>
          </div>
          <Rating rating={book.rating} />
          <Price salePrice={book.salePrice} originalPrice={book.originalPrice} />
        </>
      ) : (
        <>
          <div className="book__img--skeleton skeleton" />
          <div className="skeleton book__title--skeleton" />
          <div className="skeleton book__rating--skeleton" />
          <div className="skeleton book__price--skeleton" />
        </>
      )}
    </div>
  );
}