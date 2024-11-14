import { useEffect, useState } from "react";
import { getExpenses } from "../services/expense-service";
import { Expense } from "../model/Expense";

const useExpenses = () => {
  const [expenses, setExpenses] = useState<Expense[]>([]);
  const [error, setError] = useState<string | null>("");
  const [isLoading, setLoader] = useState<boolean>(false);

  useEffect(() => {
    setLoader(true);
    getExpenses()
      .then((response) => {
        setExpenses(response.data);
        setError(null); // Clear any previous errors
      })
      .catch((error) => {
        console.error("API Error:", error);
        setError(error.message);
      })
      .finally(() => setLoader(false));
  }, []);
  return { expenses, error, isLoading };
};

export default useExpenses;
