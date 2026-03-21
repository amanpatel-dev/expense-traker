import { useEffect, useState } from "react";
import API from "../services/api";

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

  return (
    <div> 
      <h2>Dashboard</h2>

      {transactions.map((t) => (
        <div key={t._id}>
          <p>{t.category} - ₹{t.amount}</p>
        </div>
      ))}
    </div>
  );
};

export default Dashboard;