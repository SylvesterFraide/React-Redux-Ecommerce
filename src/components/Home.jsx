import React from "react";
import { PRODUCT } from "./data";
import { useDispatch } from "react-redux";
import { addToCart } from "../features/cartSlice";
import {useNavigate} from "react-router-dom";

const Home = () => {
    const dispatch = useDispatch();
    const navigate = useNavigate();

    const handleAddToCart = (product) => {
      dispatch(addToCart(product)) 
      navigate('/cart');
    };
    return (
        <>
            <div className="head">  <h1>New Arrivals</h1></div>
            <div className="products">
                {PRODUCT.map(product => (
                    <div className="product" key={product.id}>
                        <p className="name">{product.name}</p>
                        <img src={product.image} alt={product.name} />
                        <p className="ksh">ksh.{product.price}</p>
                        <button onClick={() => handleAddToCart(product)}>Add to Cart</button>
                    </div>
                ))}
            </div>
        </>
    );
}

export default Home;