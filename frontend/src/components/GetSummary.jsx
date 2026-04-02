import { useState } from "react";
import API from "../services/api";

const Summary = ({ transactions }) => {
  const [showSummary, setShowSummary] = useState(false);
  let income = 0;
  let expense = 0;

  transactions.forEach((t) => {
    if (t.type === "income") {
      income += t.amount;
    } else {
      expense += t.amount;
    }
  });

  const balance = income - expense;
  // const [summary, setSummary] = useState(null);
  // const [showSummary, setShowSummary] = useState(false);
  // const fetchSummary = async () => {

  //   if(showSummary){
  //       setShowSummary(false);
  //       return;
  //   }

  //   try {
  //     const res = await API.get("/transactions/summary");
  //     setSummary(res.data);

  //     setShowSummary(true);
  //   } catch (error) {
  //     console.log(error);
  //   }
  // };

  return (
    <div className="mb-6">
      {/* Button */}
      <button
        onClick={() => setShowSummary(!showSummary)}
        className="bg-blue-500 text-white px-4 py-2 rounded mb-4"
      >
        {showSummary ? "Hide " : "Show"}
      </button>

      {/* Cards */}
      {showSummary && (
        <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
          <div className="bg-green-100 p-5 rounded-xl shadow">
            <p className="text-gray-600">Income</p>
            <h2 className="text-2xl font-bold text-green-600">₹{income}</h2>
          </div>

          <div className="bg-red-100 p-5 rounded-xl shadow">
            <p className="text-gray-600">Expense</p>
            <h2 className="text-2xl font-bold text-red-600">₹{expense}</h2>
          </div>

          <div className="bg-blue-100 p-5 rounded-xl shadow">
            <p className="text-gray-600">Balance</p>
            <h2 className="text-2xl font-bold text-blue-600">₹{balance}</h2>
          </div>
        </div>
      )}
    </div>
  );
};

export default Summary;
