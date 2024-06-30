# 📊 Numera

Numera is a full-stack application designed to help small businesses turn their financial and operational documents into actionable insights. Built with **React**, **ExpressJS**, and **SCSS**, Numera leverages third-party **AI/ML APIs** to extract structured data from PDFs and display it in an intuitive dashboard.

---

## 🚀 Overview

Managing paperwork is one of the most time-consuming tasks for small businesses. Numera aims to automate that burden by providing:

- 📥 **PDF Upload & Analysis**  
- 🧠 **AI/ML-Powered Data Extraction**  
- 📈 **Interactive Dashboard Visualizations**  
- 👤 **User Authentication & Role-based Access**  
- 🎨 **Responsive UI with SCSS Styling**

---

## 🔍 Key Features

### 🧠 AI Document Processing
- Upload PDFs (invoices, receipts, reports)
- Extract key data using third-party **AI/ML APIs**
- Handle OCR (optical character recognition) for scanned documents

### 📊 Dynamic User Dashboard
- Visual representation of revenue, expenses, and trends
- Customizable charts and data views
- Summarized insights for quick decision-making

### 🔐 User Authentication
- Secure login and registration
- Session-based access control
- Support for future role-based access (e.g., admin vs employee)

### ⚙️ Admin/Backend Controls
- Track upload history
- Manage extracted data formats
- Configure API tokens/secrets securely

---

## 🛠️ Tech Stack

### Frontend
- **ReactJS**
- **SCSS**
- **Axios**
- **React Router**
- **Chart.js / D3.js** (if used)

### Backend
- **Node.js / ExpressJS**
- **Multer** (for PDF uploads)
- **Axios** (to interface with ML APIs)
- **JWT** or **Session Authentication**

### AI/ML Integrations
- ConvertAPI, CloudConvert
- Handles parsing, OCR, and entity extraction from PDFs