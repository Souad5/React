import React from "react";
import Book from "./Book";
import { FaStarHalfStroke } from "react-icons/fa6";
import { Link } from "react-router";



const BooksLibrary = ({ card }) => {
  const {bookId,  bookName, author, image, category,rating, publisher, tags,yearOfPublishing } = card;
  return (
    <div>
      <Link to={`/booksCard/${bookId}`}>
      <div className="card bg-base-100  shadow-md">
        <figure className="bg-gray-200 m-2 rounded shadow">
          <div>
            <img className="h-42 p-2 rounded-2xl " src={image} alt="Shoes" />
          </div>
        </figure>
          <div className="flex justify-baseline items-center gap-4 pl-6">
            {
                tags.map((tag,i)=><button key={i} className="btn text-green-400 rounded-l-2xl rounded-r-2xl">{tag}</button>)
            }
          </div>
        <div className="card-body">
          <h2 className="card-title whitespace-nowrap">
            {bookName}
            <div className="badge badge-secondary">{yearOfPublishing}</div>
          </h2>
          <p>
            By: {publisher}
          </p>
          <p>
          author: {author}
          </p>
          <div className="card-actions justify-between">
            <div ><p className="font-bold">{category}</p></div>
            <div >
                <div className="flex justify-center items-center gap-3 "> 
                <p className="font-bold">{rating}</p> <p><FaStarHalfStroke/></p>
                </div>
            </div>
          </div>
        </div>
      </div>
      </Link>
    </div>
  );
};

export default BooksLibrary;
