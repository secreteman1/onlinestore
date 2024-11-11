import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faStar } from '@fortawesome/free-solid-svg-icons';
import './Styles/Main.css';
import productData from './productData.json'; 

const Reviews = ({ reviews }) => {
    const totalRating = productData.reviews.reduce((sum, review) => sum + review.rating, 0);
    const averageRating = totalRating / productData.reviews.length;
    return (
        <div className="reviews-section">
            {reviews.length === 0 ? (
                <p>Нет отзывов</p>
            ) : (
                <div>
                    <div className="rating-info1">
                     <span className='reviews-span2-stars'>{ averageRating.toFixed(1)}</span>
                     <span className="rating-stars1">
                    {[...Array(5)].map((_, index) => (
                        <FontAwesomeIcon
                            key={index}
                            icon={faStar}
                            className={index < Math.floor(averageRating) ? 'star-filled1' : 'star-empty'}
                        />
                    ))}
                </span>
                <span className='reviews-span-stars'>{productData.reviews.length} оценки</span>
                </div>
                    {reviews.map((review, index) => (  
                        <div key={index} className="review">
                            <h4>{review.username}</h4>
                            <p>{review.date}</p>
                            <div className="rating-info">
                                {[...Array(5)].map((_, starIndex) => (
                                    <FontAwesomeIcon
                                        key={starIndex}
                                        icon={faStar}
                                        className={starIndex < review.rating ? 'star-filled' : 'star-empty'}
                                    />
                                ))}
                            </div>
                            <p>{review.comment}</p>
                        </div>
                    ))}
                </div>
            )}
        </div>
    );
};

export default Reviews;
