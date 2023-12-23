import React, { useState, useEffect } from "react";

const CurrentQuestion = () => {
  const [currentQuestion, setCurrentQuestion] = useState(null);

  useEffect(() => {
    const fetchCurrentQuestion = async () => {
      const response = await fetch("/api/questions/recent");
      const json = await response.json();

      if (response.ok) {
        setCurrentQuestion(json);
      }
    };

    fetchCurrentQuestion();
  }, []);

  return (
    <div>
      <h1>Current Question</h1>
      {currentQuestion && (
        <div>
          <h2>{currentQuestion.title}</h2>
          <p>{currentQuestion.body}</p>
        </div>
      )}
    </div>
  );
};

export default CurrentQuestion;
