import React, { useEffect } from "react";
import { useSelector, useDispatch } from "react-redux";
import Categories from "../../components/Categories/Categories";
import Product from "../../components/Product/Product";
import "./Home.css";
import { getProductsFromCategories } from "../../redux/slices/productsSlice";
import { loadBasketFromLS } from "../../redux/slices/basketSlice";
import { AppDispatch, RootState } from "../../redux/store";

const Home = () => {
  const dispatch: AppDispatch = useDispatch();

  const category = useSelector(
    (state: RootState) => state.categories.selectedCategory
  );

  const products = useSelector((state: RootState) => state.items.items);

  useEffect(() => {
    const asyncFn = async () => {
      dispatch(loadBasketFromLS());
    };
    asyncFn();
  }, [dispatch]);

  useEffect(() => {
    dispatch(getProductsFromCategories(category));
  }, [dispatch, category]);

  const productsData = products.map(({ title, price, id, image }) => (
    <Product title={title} price={price} key={id} image={image} id={id} />
  ));

  return (
    <>
      <Categories />
      <div className="Product-container">
        {products.length ? productsData : <h1>Нет товаров...</h1>}
      </div>
    </>
  );
};

export default Home;
