# 💰 AI-Powered Expense Tracker

An intelligent full-stack expense management application built with the **MERN stack** that helps users track their income and expenses, analyze spending patterns, and simplify expense entry using **AI-powered bill/receipt scanning**.

## 🚀 Features

* 🔐 **Secure Authentication** — User registration, login, and protected routes.
* 💸 **Expense & Income Management** — Add, edit, delete, and manage financial transactions.
* 📸 **AI Bill/Receipt Scanning** — Upload or capture a photo of a bill/receipt and use AI to extract relevant information and automatically create an expense entry.
* 🤖 **AI-Powered Expense Categorization** — Automatically identify and categorize expenses based on transaction details.
* 📊 **Financial Dashboard** — Visualize income, expenses, category-wise spending, and financial trends.
* 🧠 **Smart Spending Insights** — Analyze spending patterns and provide useful financial insights.
* 📱 **Responsive Design** — Optimized for desktop, tablet, and mobile devices.

## 📸 Smart Bill Scanner

Adding expenses manually can be time-consuming. The application simplifies this process through AI-powered receipt processing.

**How it works:**

1. 📷 Capture or upload a photo of a bill/receipt.
2. 🔍 AI analyzes the uploaded image.
3. 🧾 Relevant information such as expense details and amount is extracted.
4. 🏷️ The expense is categorized automatically.
5. 💾 The extracted information is used to create the expense entry.

This allows users to add expenses quickly without manually entering every detail from a physical bill.

## 🤖 AI Capabilities

The application integrates AI to reduce manual work and make expense tracking more intelligent.

* Receipt/bill image analysis
* Information extraction from bills
* Automatic expense categorization
* Spending pattern analysis
* Personalized financial insights

## 📊 Dashboard & Analytics

The dashboard provides users with an overview of their financial activity, including:

* Total income
* Total expenses
* Current balance
* Category-wise expenses
* Spending trends
* Transaction history
* AI-generated insights

## 🛠️ Tech Stack

### Frontend

* React.js
* JavaScript / TypeScript
* HTML5
* CSS3
* Chart/visualization library

### Backend

* Node.js
* Express.js
* REST APIs

### Database

* MongoDB

### Authentication

* JWT-based authentication

### AI

* AI API for receipt/bill image processing
* AI-powered expense categorization and financial analysis

## 🏗️ Application Flow

```text
User
 │
 ├── Add Expense Manually
 │
 └── Upload/Capture Bill
          │
          ▼
     AI Processing
          │
          ▼
   Extract Bill Details
          │
          ▼
  Categorize Expense
          │
          ▼
      MongoDB
          │
          ▼
   Dashboard & Analytics
```

## 🔑 Environment Variables

Create a `.env` file in the backend and configure the required environment variables:

```env
MONGO_URI=your_mongodb_connection_string
JWT_SECRET=your_jwt_secret
AI_API_KEY=your_ai_api_key
```

## ⚙️ Installation

### 1. Clone the repository

```bash
git clone https://github.com/your-username/expense-tracker-ai.git
cd expense-tracker-ai
```

### 2. Install dependencies

```bash
npm install
```

If the project has separate frontend and backend directories:

```bash
cd client
npm install

cd ../server
npm install
```

### 3. Configure environment variables

Create the required `.env` files and add your MongoDB, authentication, and AI API credentials.

### 4. Start the application

```bash
npm run dev
```

The application will start locally and can be accessed through the configured development URL.

## 📂 Project Structure

```text
expense-tracker-ai/
│
├── client/             # React frontend
│
├── server/             # Node.js + Express backend
│
├── models/             # MongoDB models
├── routes/             # API routes
├── controllers/        # Business logic
├── middleware/         # Authentication & middleware
│
├── .env
├── package.json
└── README.md
```

> The exact structure may vary depending on the current project architecture.

## 🔒 Security

* JWT-based authentication
* Protected API routes
* User-specific expense data
* Environment variables for sensitive API credentials
* Server-side validation for financial data

## 🎯 Project Goals

The primary goal of this project is to combine **full-stack web development with practical AI integration** to create a more convenient and intelligent personal finance management experience.

Instead of simply recording expenses, the application uses AI to **understand bills, automate data entry, categorize spending, and generate useful financial insights**.

## 🔮 Future Improvements

* 📈 Predictive expense analysis
* 💰 AI-powered monthly budget recommendations
* 🔔 Budget and spending alerts
* 📄 Export financial reports to PDF/Excel
* 📅 Recurring expense detection
* 📱 Mobile application
* 💬 Conversational AI financial assistant

## 👨‍💻 Author

**Aman Chaudhary**

---

⭐ If you find this project useful, consider giving the repository a star!
