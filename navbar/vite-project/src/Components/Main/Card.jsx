import React from "react";

const Card = ({ cardLoad }) => {
  const { name, description, category, price, img } = cardLoad;
  return (
    <>
    <div className="mt-10">
      <div className="card bg-base-100 h-[320px] shadow-sm rounded-2xl">
        <figure>
          <img className="w-500" src={img} alt="Shoes" />
        </figure>
        <div className="card-body">
          <h2 className="card-title">{name}</h2>
          <p>{description}</p>
          <div className="card-actions justify-end">
            <button className="btn btn-primary">টাকা: ${price}</button>
          </div>
        </div>
      </div>
    </div>
    </>
  );
};

export default Card;
