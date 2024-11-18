import { Link, useNavigate, useParams } from "react-router-dom";
import CurrencyUtils from "../../utils/CurrencyUtils";
import DateUtils from "../../utils/DateUtils";
import useExpenseByExpenseId from "../../hooks/useExpenseByExpenseId";
import ConfirmDialog from "../../components/ConfirmDialog";
import { useState } from "react";
import { deleteExpenseByExpenseId } from "../../services/expense-service";

const ExpenseDetails = () => {
  const { expenseId } = useParams<{ expenseId: string }>();

  if (!expenseId) {
    <p className="text-danger">Invalid Expense Id</p>;
  }

  const { expense, errors, isLoading, setLoader, setErrors } =
    useExpenseByExpenseId(expenseId!);
  const [showDialog, setShowDialog] = useState<boolean>(false);

  const navigate = useNavigate();

  const handleCancel = () => {
    console.log("Cancel is Clicked");
    setShowDialog(false);
  };
  const handleConfirm = () => {
    console.log("Deleting expense with ID:", expenseId);
    setLoader(true);
    deleteExpenseByExpenseId(expenseId)
      .then((response) => {
        if (response && response.status === 204) {
          navigate("/");
          console.log(response);
        }
      })
      .catch((error) => {
        setErrors(error.message);
        console.log("Error:", error.response);
      })
      .finally(() => {
        setLoader(false);
        setShowDialog(false);
      });
    console.log("Confirm is Clicked");
  };

  return (
    <div className="container mt-2">
      {isLoading && <p>Loading...</p>}
      {errors && <p className="text-danger">{errors} </p>}
      <div className="d-flex flex-row-reverse mb-2">
        <button
          className="btn btn-sm btn-danger"
          onClick={() => setShowDialog(true)}
        >
          DELETE
        </button>
        <button className="btn btn-sm btn-warning mx-2">EDIT</button>
        <Link className="btn btn-sm btn-secondary" to="/">
          BACK
        </Link>
      </div>
      <div className="card">
        <div className="card-body p-3">
          <table className="table table-borderless table-responsive">
            <tbody>
              <tr>
                <th>Name</th>
                <td>{expense ? expense.name : "N/A"}</td>
              </tr>
              <tr>
                <th>Category</th>
                <td>{expense ? expense.category : "N/A"}</td>
              </tr>
              <tr>
                <th>Amount</th>
                <td>
                  {expense ? CurrencyUtils.formatToINR(expense.amount) : "N/A"}
                </td>
              </tr>
              <tr>
                <th>Date</th>
                <td>
                  {expense ? DateUtils.formatDateString(expense.date) : "N/A"}
                </td>
              </tr>
              <tr>
                <th>Note</th>
                <td>{expense ? expense.note : "N/A"}</td>
              </tr>
            </tbody>
          </table>
        </div>
      </div>
      <ConfirmDialog
        title="Confirm Delete"
        message="Are you sure you want to delete this item?"
        show={showDialog}
        onCancel={handleCancel}
        onConfirm={handleConfirm}
      />
    </div>
  );
};
export default ExpenseDetails;
