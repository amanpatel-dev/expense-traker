import { useEffect, useState } from "react";
import API from "../services/api";
import { Summary, AddTransactions } from "../components";

const Dashboard = () => {
  const [transactions, setTransactions] = useState([]);

  const fetchTransactions = async () => {
    try {
      const res = await API.get("/transactions");
      setTransactions(res.data);
    } catch (error) {
      console.log(error);
    }
  };

  useEffect(() => {
    fetchTransactions();
  }, []);
  const handleAdd = (newTransaction) => {
    setTransactions([newTransaction, ...transactions]);
  };

  const handleDelete = async (id) => {
    try {
      await API.delete(`/transactions/${id}`);
      // remove from UI instantly
      setTransactions(transactions.filter((t) => t._id !== id));
    } catch (error) {
      console.log(error);
    }
  };

  return (
    <div className="min-h-screen bg-gray-100 p-6">
      {/* Title */}
      <h1 className="text-3xl font-bold mb-6">Dashboard</h1>

      {/* Summary Section (empty for now) */}
      <div className="grid grid-cols-3 gap-4 mb-6">
        <div className="bg-white p-4 rounded-xl shadow">Income</div>
        <div className="bg-white p-4 rounded-xl shadow">Expense</div>
        <div className="bg-white p-4 rounded-xl shadow">Balance</div>
        <Summary transactions={transactions}/>
        <AddTransactions onAdd={handleAdd} />
      </div>

      {/* Transactions List */}

      <div className="bg-white p-4 rounded-xl shadow">
        <h2 className="text-xl font-semibold mb-4">Transactions</h2>

        {transactions.length === 0 ? (
          <p>No transactions yet</p>
        ) : (
          transactions.map((t) => (
            <div key={t._id} className="flex justify-between border-b py-2">
              <span>{t.category}</span>
              <span>₹{t.amount}</span>
              
              <button
                onClick={() => handleDelete(t._id)}
                className="bg-red-500 text-white px-2 py-1 rounded cursor-pointer"
              >
                Delete
              </button>
            </div>
          ))
        )}
      </div>
    </div>
  );
};

export default Dashboard;
