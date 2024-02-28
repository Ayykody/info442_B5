import React, {useState} from 'react';
import './Quiz.css';
const Quiz = () => {
  const questions = [
    {
      question: "Which of the following is a potential threat to marine ecosystems due to tourism?",
      options: ["A. Plastic Pollution", "B. Oil Spills", "C. Overfishing", "D. All of the Above"],
      correctAnswer: "D. All of the Above"
    },
    {
        question: "How many gallons of graywater can a large cruise ship generate from a 1-week voyage?",
        options: ["A. 500,000 gallons", "B. 800,000 gallons", "C. 1 million gallons", "D. 2 million gallons"],
        correctAnswer: "C. 1 million gallons"
    },
    {
        question: "How many tons of plastic end up in the ocean each year?",
        options: ["A. 4 million tons", "B. 7 million tons", "C. 10 million tons", "D. 13 million tons"],
        correctAnswer: "D. 13 million tons"
    },
    {
      question: "How does overfishing impact coral reefs and other marine life?",
      options: ["A. It causes an imbalance in food chains", "B. It fosters biodiversity within ecosystems", "C. It promotes growth of coral reefs", "D. It helps make marine waters more habitable for marine life"],
      correctAnswer: "A. It causes an imbalance in food chains"
    },
    {
      question: "The Great Pacific Garbage Patch is estimated to be TWO times the size of which U.S. state?",
      options: ["A. Alaska", "B. Texas", "C. California", "D. Montana"],
      correctAnswer: "B. Texas"
    },
    {
      question: "In which ways does marine pollution impact local communities?",
      options: ["A. It improves their local economy", "B. It supports their natural and cultural resources", "C. It can cause acute and chronic health problems or physical injuries", "D. It improves their education systems"],
      correctAnswer: "C. It can cause acute and chronic health problems or physical injuries"
    },
    {
      question: "What percentage of marine pollution comes from land-based sources?",
      options: ["A. 50%", "B. 65%", "C. 75%", "D. 80%"],
      correctAnswer: "D. 80%"
    },
    {
      question: "How does noise pollution impact marine life?",
      options: ["A. It prevents marine animals from hearing their predators", "B. It can disrupt communication between marine animals.", "C. It can disrupt the natural behavior of marine animals", "D. All of the Above"],
      correctAnswer: "D. All of the Above"
    },
    {
      question: "How can tourists reduce their environmental impact when traveling?",
      options: ["A. Dispose of trash and recyclables properly", "B. Feed marine animals with human food", "C. Purchase and use single-use plastic items", "D. Consume extra seafood"],
      correctAnswer: "A. Dispose of trash and recyclables properly"
    },
    {
      question: "Which of the following is NOT a target of the UN's Global Goals for Life Below Water?",
      options: ["A. Conserve coastal and marine areas", "B. Fund educational programming for aquariums", "C. End subsidies contributing to overfishing", "D. Protect and restore ecosystems"],
      correctAnswer: "B. Fund educational programming for aquariums"
    },
  ];

  // useState handlers for question progression
  const [currentQuestion, setCurrentQuestion] = useState(0);
  const [selectedOption, setSelectedOption] = useState('');
  const [isAnswered, setIsAnswered] = useState(false);
  const [isCorrect, setIsCorrect] = useState(false);
  const [score, setScore] = useState(0);
  const [quizFinished, setQuizFinished] = useState(false);

  // handles abilities to select option
  const handleOptionSelect = (option) => {
    setSelectedOption(option);
  }

  // checks if answer is correct; if so, adds to the user's score
  const handleCheckAnswer = () => {
    setIsAnswered(true);
    if (selectedOption === questions[currentQuestion].correctAnswer) {
        setIsCorrect(true);
        setScore(score + 1)
    } else {
        setIsCorrect(false)
    }
  }

  // progresses to next question or end of quiz
  const handleNextQuestion = () => {
    if (currentQuestion + 1 < questions.length) {
      setCurrentQuestion(currentQuestion + 1);
      setSelectedOption('');
      setIsAnswered(false);
      setIsCorrect(false);
    } else {
      setQuizFinished(true);
    }
  };

  // handles finished quiz
  const handleFinishQuiz = () => {
    setQuizFinished(true);
  };

  return (
    <div className='quiz'>
      {!quizFinished ? (
        <div>
          <h2 className='questionNumber'>{questions[currentQuestion].question}</h2>
          <div className='questionOptions'>
            {questions[currentQuestion].options.map((option, index) => (
              <p key={index}>
                <label>
                  <input
                    className='radioBtns'
                    type="radio"
                    name="option"
                    value={option}
                    checked={selectedOption === option}
                    onChange={() => handleOptionSelect(option)}
                    disabled={isAnswered}
                  />
                  {option}
                </label>
              </p>
            ))}
          </div>
          <div className='check'>
          <button className='checkBtn' onClick={handleCheckAnswer} disabled={isAnswered}>
            Check
          </button>
          </div>
          {isAnswered && (
            <div className='answers'>
              {isCorrect ? <p>Correct!</p> : <p>Incorrect. Correct answer is: {questions[currentQuestion].correctAnswer}</p>}
              <button className='handleQuestion' onClick={handleNextQuestion}>
                {currentQuestion === questions.length - 1 ? "Finish Quiz" : "Next"}
              </button>
            </div>
          )}
        </div>
      ) : (
        <div className='finishedQuiz'>
         <h2>Quiz Finished!</h2>
          <p>Your score is: {(score / questions.length) * 10}/10</p>
          <p>Learn more about SDG 14: Life Below Water by exploring our resources, engaging in events, and calculating your impact.</p>
        </div>
      )}
    </div>
  );
};

export default Quiz;
