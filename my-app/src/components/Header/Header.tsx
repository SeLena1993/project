import React, { ChangeEvent } from "react";
import "./Header.css";
import { Link, useNavigate } from "react-router-dom";
import { useDispatch, useSelector } from "react-redux";
import {
  setSearchWord,
  getProductsFromCategories,
} from "../../redux/slices/productsSlice";
import { AppDispatch, RootState } from "../../redux/store";

const Header = () => {
  const dispatch: AppDispatch = useDispatch();
  const navigate = useNavigate();

  const total = useSelector(
    (state: RootState) => state.basketShop.totalBasketCount
  );

  const handleChange = (e: ChangeEvent<HTMLInputElement>) => {
    if (e.target.value === "") {
      dispatch(getProductsFromCategories("all"));
    } else {
      dispatch(setSearchWord(e.target.value));
    }
  };

  return (
    <div className="Header">
      <button
        onClick={() => {
          navigate("/");
        }}
        className="Main-btn"
      >
        На главную
      </button>
      <div>
        <input
          placeholder="Search"
          className="Input-search"
          onChange={handleChange}
        />
      </div>
      <Link to="/" className="Title-shop">
        <h1>Online Shop</h1>
      </Link>
      <Link to="/basket" className="Basket">
        Корзина: {total}
      </Link>
    </div>
  );
};

export default Header;
