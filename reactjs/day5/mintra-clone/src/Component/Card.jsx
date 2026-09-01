import React from "react";

function Card({ imgSrc, title, description, price }) {
  return (
    <div className="card">
      <img src={imgSrc} alt={title} height="210px" width="200px" />
      <h2>{title}</h2>
      <h1>{description}</h1>
      <h2>Shop now</h2>
      <h3>Price: {price}</h3>
    </div>
  );
}

export function CardList({ arrData }) {
  return (
    <>
      {arrData.map((item, index) => (
        <Card
          key={item.title + index}
          imgSrc={item.imgSrc}
          title={item.title}
          description={item.description}
          price={item.price}
        />
      ))}
    </>
  );
}

export default Card;