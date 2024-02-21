import React, {useState} from 'react';
import './Quiz.css';
const Quiz = () => {
  const questions = [
    {
      question: "Which of the following is a potential threat to marine ecosystems due to tourism?",
      options: ["Plastic Pollution", "Oil Spills", "Overfishing", "All of the Above"],
      correctAnswer: "All of the Above"
    },
    {
        question: "How many gallons of graywater can a large cruise ship generate from a 1-week voyage?",
        options: ["500,000 gallons", "800,000 gallons", "1 million gallons", "2 million gallons"],
        correctAnswer: "1 million gallons"
    },
    {
        question: "How many tons of plastic end up in the ocean each year?",
        options: ["4 million tons", "7 million tons", "10 million tons", "13 million tons"],
        correctAnswer: "13 million tons"
    }
  ];

  const [currentQuestion, setCurrentQuestion] = useState(0);
  const [selectedOption, setSelectedOption] = useState('');
  const [isAnswered, setIsAnswered] = useState(false);
  const [isCorrect, setIsCorrect] = useState(false);
  const [score, setScore] = useState(0);
  const [quizFinished, setQuizFinished] = useState(false);

  const handleOptionSelect = (option) => {
    setSelectedOption(option);
  }

  const handleCheckAnswer = () => {
    setIsAnswered(true);
    if (selectedOption === questions[currentQuestion].correctAnswer) {
        setIsCorrect(true);
        setScore(score + 1)
    } else {
        setIsCorrect(false)
    }
  }

  const handleNextQuestion = () => {
    if (currentQuestion + 1 < questions.length) {
      setCurrentQuestion(currentQuestion + 1);
      setSelectedOption('');
      setIsAnswered(false);
      setIsCorrect(false);
    }
  };

  const handleFinishQuiz = () => {
    setQuizFinished(true);
  };

  return (
    <div>
      {currentQuestion < questions.length ? (
        <div>
          <h2 className='questionNumber'>{questions[currentQuestion].question}</h2>
          <ul className='questionOptions'>
            {questions[currentQuestion].options.map((option, index) => (
              <li key={index}>
                <label>
                  <input
                    type="radio"
                    name="option"
                    value={option}
                    checked={selectedOption === option}
                    onChange={() => handleOptionSelect(option)}
                    disabled={isAnswered}
                  />
                  {option}
                </label>
              </li>
            ))}
          </ul>
          <div className='check'>
          <button className='checkBtn' onClick={handleCheckAnswer} disabled={isAnswered}>
            Check
          </button>
          </div>
          {isAnswered && (
            <div className='answerExplained'>
              {isCorrect ? <p>Correct!</p> : <p>Incorrect. Correct answer is {questions[currentQuestion].correctAnswer}</p>}
              <button onClick={handleNextQuestion}>
                {currentQuestion === questions.length - 1 ? "Finish Quiz" : "Next"}
              </button>
            </div>
          )}
        </div>
      ) : (
        <div>
          <h2>Quiz Finished!</h2>
          <p>Your score is: {score} out of {questions.length}</p>
        </div>
      )}
    </div>
  );
};

export default Quiz;
