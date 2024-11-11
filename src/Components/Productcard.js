import React, { useState } from 'react';
import './Styles/Main.css';
import 'react-medium-image-zoom/dist/styles.css'; 

const ProductCard = () => {
    const images = [
        require('./image1.jpg'),
        require('./image2.jpg'),
        require('./image3.jpg'),
        require('./image4.jpg'),
        require('./image5.jpg'),
        require('./image6.jpg')
    ];

    const [selectedImage, setSelectedImage] = useState(images[0]);
    const [currentIndex, setCurrentIndex] = useState(0);

    const handleImageClick = (index) => {
        setCurrentIndex(index);
        setSelectedImage(images[index]);
    };

    return (
        <div className="product-card">
            <div className="product-gallery">
                {images.map((image, index) => (
                    <img
                        key={index}
                        src={image}
                        alt={`Товар ${index + 1}`}
                        className={`thumbnail ${currentIndex === index ? 'active' : ''}`}
                        onClick={() => handleImageClick(index)}
                    />
                ))}
            </div>
            <img src={selectedImage} alt="Выбранное изображение" className="full" />
        </div>
    );
};

export default ProductCard;
