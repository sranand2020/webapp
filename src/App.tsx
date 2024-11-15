import Navbar from "./components/Navbar";
import Dashboard from "./pages/dashboard/Dashboard";
import "./index.css";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import Login from "./pages/login/Login";
import ExpenseDetails from "./pages/expense/ExpenseDetails";
import NewExpense from "./pages/expense/NewExpense";
import Register from "./pages/register/Register";
import ExpenseReports from "./pages/expense/ExpenseReports";

const App = () => {
  return (
    <BrowserRouter>
      <Navbar />
      <Routes>
        <Route path="/" element={<Dashboard />} />
        <Route path="/login" element={<Login />} />
        <Route path="/register" element={<Register />} />
        <Route path="/new" element={<NewExpense />} />
        <Route path="/view/:expenseId" element={<ExpenseDetails />} />
        <Route path="/reports" element={<ExpenseReports />} />
      </Routes>
    </BrowserRouter>
  );
};
export default App;
