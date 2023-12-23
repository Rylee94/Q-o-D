import UserInputForm from "../components/UserInputForm";
import CurrentQuestion from "../components/CurrentQuestion";
const Dashboard = () => {
  return (
    <div>
      <h1>Dashboard</h1>
      <CurrentQuestion />
      <UserInputForm />
    </div>
  );
};

export default Dashboard;
