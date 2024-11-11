import React, { useEffect, useState } from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faStar } from '@fortawesome/free-solid-svg-icons';
import './Styles/Main.css';
import ProductCard from './Productcard.js';
import productData from './productData.json';   


const ProductInfo = () => {
    const [product, setProduct] = useState({});
    const totalRating = productData.reviews.reduce((sum, review) => sum + review.rating, 0);
    const averageRating = totalRating / productData.reviews.length;
    useEffect(() => {
        setProduct(productData); 
    }, []);

    if (!product.productName) return null; 

    return (
        <div className='tag-info'>
            <h2 className="product-title">{product.productName}</h2>
            <div className="rating-info">
                <span className="rating-stars">
                    {[...Array(5)].map((_, index) => (
                        <FontAwesomeIcon
                            key={index}
                            icon={faStar}
                            className={index < Math.floor(averageRating) ? 'star-filled' : 'star-empty'}
                        />
                    ))}
                </span>
                <span className="rating-text">{ averageRating.toFixed(1)} ({productData.reviews.length} оценки)</span>
            </div>
            <p className="price-block__price-wrap">
                <span className="price-block__wallet-price red-price">{product.currentPrice}</span>&nbsp;&nbsp;
                <del className="price-block__old-price"><span>{product.oldPrice}</span></del>
            </p>
            <button className="add-to-cart">Добавить в корзину</button>
            <table>
                <tr>
                    <th>Артикул</th>
                    <td>{product.article}</td>
                </tr>
                <tr>
                    <th>Модель</th>
                    <td>{product.model}</td>
                </tr>
                <tr>
                    <th>Максимальный выходной ток</th>
                    <td>{product.maxOutputCurrent}</td>
                </tr>
                <tr>
                    <th>Длина кабеля (м)</th>
                    <td>{product.cableLength}</td>
                </tr>
                <tr>
                    <th>Напряжение</th>
                    <td>{product.voltage}</td>
                </tr>
            </table>
        </div>
    );
};



// Основной компонент Main, где будет использоваться ProductInfo
function Main() {
    const [product, setProduct] = useState({});

    useEffect(() => {
        setProduct(productData); 
    }, []);

    if (!product.productName) return null; 
    
    return (
        <div className='real-main'>
            <div className="main">
                <ProductCard />
                <ProductInfo />
            </div>
        </div>
    );
}

export default Main;
