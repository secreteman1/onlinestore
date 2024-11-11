import './Styles/Main.css';

const Questions = ({ questions }) => {
    return (
        <div className="reviews-section">
            {questions.length === 0 ? (
                <p>Нет вопросов</p>
            ) : (
                questions.map((question, index) => (
                    <div key={index} className="question">
                        <h4>{question.username}</h4>
                        <p>{question.date}</p>
                        <p>{question.question}</p>
                        {question.answer ? (
                            <div className="answer">
                                <p><strong>Ответ от представителя бренда:</strong></p>
                                <p className="brand-rep">{question.answer}</p>
                            </div>
                        ) : (
                            <p>Ответа пока нет</p>
                        )}
                    </div>
                ))
            )}
        </div>
    );
};

export default Questions;
