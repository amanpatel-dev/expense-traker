import { useState } from "react";
import API from "../services/api";

const AddTransaction = ({ onAdd }) => {
  const [form, setForm] = useState({
    amount: "",
    type: "expense",
    category: "",
    description: "",
  });

  const handleChange = (e) => {
    setForm({
      ...form,
      [e.target.name]: e.target.value,
    });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();

    try {
      const res = await API.post("/transactions", form);

      onAdd(res.data); // update parent UI

      // reset form
      setForm({
        amount: "",
        type: "expense",
        category: "",
        description: "",
      });

    } catch (error) {
      console.log(error);
    }
  };

  return (
    <form
      onSubmit={handleSubmit}
      className="bg-white p-4 rounded-xl shadow mb-6"
    >
      <h2 className="text-xl font-semibold mb-4">Add Transaction</h2>

      <input
        type="number"
        name="amount"
        placeholder="Amount"
        value={form.amount}
        onChange={handleChange}
        className="border p-2 w-full mb-2"
        required
      />

      <select
        name="type"
        value={form.type}
        onChange={handleChange}
        className="border p-2 w-full mb-2"
      >
        <option value="expense">Expense</option>
        <option value="income">Income</option>
      </select>

      <input
        type="text"
        name="category"
        placeholder="Category"
        value={form.category}
        onChange={handleChange}
        className="border p-2 w-full mb-2"
        required
      />

      <input
        type="text"
        name="description"
        placeholder="Description"
        value={form.description}
        onChange={handleChange}
        className="border p-2 w-full mb-4"
      />

      <button
        type="submit"
        className="bg-green-500 text-white px-4 py-2 rounded"
      >
        Add
      </button>
    </form>
  );
};

export default AddTransaction;