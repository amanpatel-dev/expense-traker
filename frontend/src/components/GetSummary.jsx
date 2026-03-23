import { useState } from "react";
import API from "../services/api";

const Summary = () => {
  const [summary, setSummary] = useState(null);
  const [showSummary, setShowSummary] = useState(false);
  const fetchSummary = async () => {

    if(showSummary){
        setShowSummary(false);
        return;
    }

    try {
      const res = await API.get("/transactions/summary");
      setSummary(res.data);
      setShowSummary(true);
    } catch (error) {
      console.log(error);
    }
  };

  return (
    <div className="mb-6">

      {/* Button */}
      <button
        onClick={fetchSummary}
        className="bg-blue-500 text-white px-4 py-2 rounded mb-4"
      >
       {showSummary ?"Hide " :"Show"} 
      </button>

      {/* Cards */}
      { showSummary && summary && (
        <div className="grid grid-cols-3 gap-4">
          <div className="bg-white p-4 rounded-xl shadow">
            <p className="text-gray-500">Income</p>
            <h2 className="text-xl font-bold text-green-500">
              ₹{summary.totalIncome}
            </h2>
          </div>

          <div className="bg-white p-4 rounded-xl shadow">
            <p className="text-gray-500">Expense</p>
            <h2 className="text-xl font-bold text-red-500">
              ₹{summary.totalExpense}
            </h2>
          </div>

          <div className="bg-white p-4 rounded-xl shadow">
            <p className="text-gray-500">Balance</p>
            <h2 className="text-xl font-bold">
              ₹{summary.balance}
            </h2>
          </div>
        </div>
      )}
    </div>
  );
};

export default Summary;