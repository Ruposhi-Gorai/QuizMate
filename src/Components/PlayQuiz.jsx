import React, { useContext, useEffect, useState } from "react";
import { Context } from "./ContextAPI";
import { useNavigate } from "react-router";
export default function PlayQuiz() {
  const { isLogin, quizData } = useContext(Context);

  //  const navigate = useNavigate();
  // useEffect(()=>{
  //   if(isLogin == 0){
  //       navigate('/')

  //   }
  // }, [])

  const [currentQuestion, setCurrentQuestion] = useState(0);
  const [score, setScore] = useState(0);
  const [selectedOption, setSelectedOption] = useState("");
  const [isFinished, setIsFinished] = useState(false);

  const handleOptionChange = (e) => {
    setSelectedOption(e.target.value);
  };

  const handleNext = () => {
    if (selectedOption === quizData[currentQuestion].correct_option) {
      setScore(score + 1);
    }

    if (currentQuestion + 1 < quizData.length) {
      setCurrentQuestion(currentQuestion + 1);
      setSelectedOption("");
    } else {
      setIsFinished(true);
    }
  };

  return (
    <>
  
    <div className="container my-5 py-5">
      <div className="row justify-content-center">
        <div className="col-lg-8">
          <div className="card shadow-sm">
            <div className="card-body">
              <h3 className="card-title mb-4 text-center">Play Quiz</h3>

              {!isFinished ? (
                <>
                  <div className="mt-3">
                    {quizData.map((val, index) => (
                      <div key={index} className="mb-4">
                        <h5>
                          Q.{index + 1} {val.ques} ?
                        </h5>

                        <div className="form-check">
                          <input
                            className="form-check-input"
                            type="radio"
                            name={`q${index}`}
                            value={val.option1}
                            checked={selectedOption === val.option1}
                            onChange={handleOptionChange}
                          />
                          <label className="form-check-label">
                            {val.option1}
                          </label>
                        </div>

                        <div className="form-check">
                          <input
                            className="form-check-input"
                            type="radio"
                            name={`q${index}`}
                            value={val.option2}
                            checked={selectedOption === val.option2}
                            onChange={handleOptionChange}
                          />
                          <label className="form-check-label">
                            {val.option2}
                          </label>
                        </div>

                        <div className="form-check">
                          <input
                            className="form-check-input"
                            type="radio"
                            name={`q${index}`}
                            value={val.option3}
                            checked={selectedOption === val.option3}
                            onChange={handleOptionChange}
                          />
                          <label className="form-check-label">
                            {val.option3}
                          </label>
                        </div>

                        <div className="form-check">
                          <input
                            className="form-check-input"
                            type="radio"
                            name={`q${index}`}
                            value={val.option4}
                            checked={selectedOption === val.option4}
                            onChange={handleOptionChange}
                          />
                          <label className="form-check-label">
                            {val.option4}
                          </label>
                        </div>
                      </div>
                    ))}
                  </div>

                  <div className="d-flex justify-content-end mt-4">
                    <button
                      className="btn btn-primary"
                      onClick={handleNext}
                      disabled={!selectedOption}
                    >
                      {currentQuestion + 1 === quizData.length
                        ? "Submit"
                        : "Next"}
                    </button>
                  </div>
                </>
              ) : (
                <div className="text-center">
                  <h4 className="text-success">Quiz Finished!</h4>
                  <p className="lead">
                    You scored <strong>{score}</strong> out of {quizData.length}
                  </p>
                  <button
                    className="btn btn-secondary mt-3"
                    onClick={() => {
                      setCurrentQuestion(0);
                      setScore(0);
                      setSelectedOption("");
                      setIsFinished(false);
                    }}
                  >
                    Restart Quiz
                  </button>
                </div>
              )}
            </div>
          </div>
        </div>
      </div>
    </div>
      </>
  );
}
