import { Link } from "react-router-dom";

const Navbar = () => {
  return (
    <header>
      <div className="container">
        <Link to="/">
          <h1>Question of the Day</h1>
        </Link>
        <Link to="/dashboard">Dashboard</Link>
        <Link to="/questions">Questions</Link>
        <Link to="/admin">Admin</Link>
      </div>
    </header>
  );
};

export default Navbar;
