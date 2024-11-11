import './Styles/Main.css';
import Reviews from './Reviews';
import Questions from './Questions'
import productData from './productData.json'; 
import React, { useState } from 'react';

const Endpart = () => {
    const [activeTab, setActiveTab] = useState('reviews'); 
    return (

        <div className="ml-[5%] mt-[60px]"> 
            <div className="tab-buttons">
                <button className={activeTab === 'questions' ? 'endpart-button' : 'endpart-button2'} onClick={() => setActiveTab('reviews')}>
                    <h2 className='endpart-h2'>Отзывы <span className='endpart-span'>{productData.reviews.length}</span></h2>
                </button>
                <button className={activeTab === 'reviews' ? 'endpart-button1' : 'endpart-button12'} onClick={() => setActiveTab('questions')}>
                    <h2>Вопросы <span className='endpart-span'>{productData.questions.length}</span></h2>
                </button>
            </div>

            <div className="content">
                {activeTab === 'questions' && <Questions questions={productData.questions || []}/>}
                {activeTab === 'reviews' && <Reviews reviews={productData.reviews || []} />}
            </div>
            
            
        </div>
    );
};

export default Endpart;
