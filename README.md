# 🧺 Mini Laundry Order Management System

A simple backend system to manage laundry orders, built using Node.js, Express.js, and MongoDB.

This project demonstrates real-world backend concepts like order creation, billing logic, status management, filtering, search, and dashboard aggregation.

## 📁 Project Structure
laundry-order-system/
├── backend/ # Node.js + Express API
├── README.md # Project documentation
├── AI_USAGE.md # AI usage report

---

## 🚀 Project Overview

This system allows users to:

- Create laundry orders with automatic billing
- Update order status (RECEIVED → PROCESSING → READY → DELIVERED)
- View all orders with filtering and search
- View dashboard statistics (total orders, revenue, status breakdown)

---

## 🛠️ Tech Stack

- Node.js  
- Express.js  
- MongoDB + Mongoose  

---

## ⚙️ Setup Instructions

### 1. Clone the repository

```bash
git clone https://github.com/ranjay17/laundry-order-system.git
cd laundry-order-system/backend

### 2. Install dependency
npm install



### 3. Create `.env` file

Create a `.env` file in the backend folder and add:

PORT=5000  
MONGO_URI=your_mongodb_connection_string

### 4. Run the server
npm run dev