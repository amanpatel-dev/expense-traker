import { useEffect, useState } from "react";
import API from "../services/api";
import { Summary, AddTransactions } from "../components";

const Dashboard = () => {
  const [transactions, setTransactions] = useState([]);
  const [loading, setLoading] = useState(true);
  const delay = (ms) => new Promise((resolve) => setTimeout(resolve, ms));
  const fetchTransactions = async () => {
    try {
      setLoading(true);

    // fake delay (1 second)
    await delay(Math.random() * 1000 + 500);
      const res = await API.get("/transactions");
      setTransactions(res.data);
    } catch (error) {
      console.log(error);
    }
    finally {
    setLoading(false);
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
        <Summary transactions={transactions} />
        <AddTransactions onAdd={handleAdd} />
      </div>

      {/* Transactions List */}

      <div className="bg-white p-4 rounded-xl shadow">
        <h2 className="text-xl font-semibold mb-4">Transactions</h2>

        {loading ? (
           <div className="text-center py-4 text-gray-500">
  Loading transactions...
</div>
            ) :transactions.length === 0 ? (
          <p>No transactions yet</p>
            ) : (
          transactions.map((t) => (
            <div
              key={t._id}
              className="flex justify-between items-center bg-gray-50 p-3 rounded-lg mb-2"
            >
              <div>
                <p className="font-semibold">{t.category}</p>
                <p className="text-sm text-gray-500">{t.description}</p>
              </div>

              <div className="flex items-center gap-4">
                <span
                  className={`font-bold ${
                    t.type === "income" ? "text-green-600" : "text-red-600"
                  }`}
                >
                  ₹{t.amount}
                </span>

                <button
                  onClick={() => handleDelete(t._id)}
                  className="text-red-500 hover:text-red-700"
                >
                  ✕
                </button>
              </div>
            </div>
          ))
        )}
      </div>
    </div>
  );
};

export default Dashboard;
