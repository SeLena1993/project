import React, { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import "./Card.css";

type TRating = {
  count: number;
  rate: number;
};

type TProduct = {
  id: number;
  title: string;
  category: string;
  image: string;
  price: number;
  description: string;
  rating: TRating;
};

const Card = () => {
  const { id } = useParams();

  const [product, setProduct] = useState<TProduct | null>(null);

  useEffect(() => {
    fetch("https://fakestoreapi.com/products/" + id)
      .then((res) => res.json())
      .then((json) => setProduct(json))
      .catch((err) => console.log(err));
  }, []);

  return (
    <div className="Card-container">
      <h2>{product?.title}</h2>
      <div>{product?.description}</div>
      <div className="Product-price">Цена: {product?.price} $</div>
      <img width="200px" src={product?.image} alt={product.image} />
      <div className="Product-rating">
        <div>Рейтинг товара: {product?.rating?.rate}</div>
        <div>Количество на складе: {product?.rating?.count}</div>
      </div>
    </div>
  );
};

export default Card;
