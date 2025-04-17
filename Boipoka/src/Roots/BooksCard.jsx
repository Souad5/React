import React from "react";
import { useLoaderData, useParams } from "react-router";

const BooksCard = () => {
  const { id } = useParams();
  const numberId = parseInt(id);
  const data = useLoaderData();
  const fetchData = data.find((dat) => dat.bookId === numberId);
  const { bookId,bookName, author, image,review, totalPages,rating, category, tags, publisher, yearOfPublishing,
  } = fetchData;

  return (
    <div>
      <div
        key={bookId}
        className="md:flex-row lg:flex  lg:justify-between lg:items-center gap-10 "
      >
        <div className="lg:flex-row bg-base-200 lg:w-6/12 min-h-screen">
          <img src={image} className="rounded-lg w-[425px] h-[564px]  p-20 mx-auto"/>
        </div>
        <div className="lg:w-6/12 flex flex-col gap-2">
          <h1 className="text-5xl font-bold">{bookName}</h1>
          <p>By: {author}</p>
          <hr className="border-dotted" />
          <p>{category}</p>
          <hr className="border-dotted" />

          <p className="py-6"><span className="font-bold">Review: </span>
            {review}
          </p>
          <div><span className="font-bold">Tag:</span>
            {tags.map(tag=><button className="btn ml-3 rounded-3xl text-green-400">#{tag}</button>)}
          </div>
          <hr className="border-dotted" />
            <p>Number of Pages: {totalPages}</p>
            <p>Publisher:{publisher}</p>
            <p>Year of Publishing: {yearOfPublishing}</p>
            <p>Rating: {rating}</p>
          <div className="flex gap-4">
          <button className="btn btn-primary">Read</button>
          <button className="btn btn-primary">Wishlist</button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default BooksCard;
