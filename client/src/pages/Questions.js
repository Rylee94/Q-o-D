import { useEffect, useState } from "react";
import QuestionForm from "../components/QuestionForm";
const Questions = () => {
  const [questions, setQuestions] = useState(null);
  useEffect(() => {
    const fetchQuestions = async () => {
      const response = await fetch("/api/questions");
      const json = await response.json();

      if (response.ok) {
        setQuestions(json);
      }
    };
    fetchQuestions();
  }, []);

  return (
    <div className="home">
      <div className="questions">
        <h1>Questions</h1>
        {questions &&
          questions.map((question) => (
            <p ket={question._id}>{question.title}</p>
          ))}
      </div>
    </div>
  );
};

export default Questions;
