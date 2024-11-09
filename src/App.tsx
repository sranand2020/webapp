import Navbar from "./components/Navbar";
import Dashboard from "./pages/dashboard/Dashboard";
import "./index.css";

Navbar;
Dashboard;

const App = () => {
  return (
    <>
      <Navbar />
      <Dashboard />;
    </>
  );
};
export default App;
