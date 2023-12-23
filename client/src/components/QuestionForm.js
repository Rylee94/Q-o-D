import { useState } from "react";

const QuestionForm = () => {
  const [title, setTitle] = useState("");
  const [body, setBody] = useState("");
  const [error, setError] = useState("null");

  const handleSubmit = async (e) => {
    e.preventDefault();

    const question = { title, body };

    const response = await fetch("/api/questions", {
      method: "POST",
      body: JSON.stringify(question),
      headers: {
        "Content-Type": "application/json",
      },
    });
    const json = await response.json();

    if (!response.ok) {
      setError(json.error);
    }
    if (response.ok) {
      setTitle("");
      setBody("");
      console.log("new question added", json);
    }
  };
  return (
    <div>
      <form className="create" onSubmit={handleSubmit}>
        <h3> Add a New Question</h3>

        <label>Question:</label>
        <input
          type="text"
          onChange={(e) => setTitle(e.target.value)}
          value={title}
        ></input>

        <label>Extra Details?:</label>
        <input
          type="text"
          onChange={(e) => setBody(e.target.value)}
          value={body}
        ></input>
        <button>Submit</button>
      </form>
      {/* {error && <div className="error">{error}</div>} */}
    </div>
  );
};

export default QuestionForm;
