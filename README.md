# 📘 Student Management System (React + Redux + Bootstrap)

## 📌 Project Overview

This project is a **Student Management System** built using **React JS, Redux, and Bootstrap**.
It allows users to **manage student records** with full CRUD operations and authentication.

---

## 🚀 Features

* 🔐 User Login Authentication (Username & Password)
* 📊 Dashboard with total student count
* ➕ Add new student
* 📋 View student list
* ✏️ Edit student details
* ❌ Delete student
* 🔍 Search students
* 💾 Data stored in LocalStorage (persistent after refresh)
* 🚪 Logout functionality

---

## 🛠️ Technologies Used

* React JS (Vite)
* Redux & Redux Thunk
* React Router DOM
* Bootstrap 5
* LocalStorage (for data persistence)

---

## 📁 Folder Structure

```
src/
├── components/
│   ├── Navbar.jsx
│   ├── PrivateRoute.jsx
|   ├── StudentCard.jsx
│
├── pages/
│   ├── Dashboard.jsx
│   ├── StudentList.jsx
│   ├── StudentForm.jsx
│   ├── Login.jsx
│
├── redux/
│   ├── store.js
│   ├── studentReducer.js
│   ├── studentActions.js
│
├── services/
│   ├── api.js   (dummy file for structure)
│
├── assets/
│   ├── styles.css
│
├── App.jsx
├── main.jsx
```

---

## 🔑 Login Credentials

Use the following credentials to login:

```
Username: admin
Password: 1234
```

---

## ⚙️ Installation & Setup

1. Clone the repository:

```bash
git clone <your-repo-link>
```

2. Navigate to project folder:

```bash
cd student-dashboard
```

3. Install dependencies:

```bash
npm install
```

4. Start the development server:

```bash
npm run dev
```

---

## 💾 Data Storage

* All student data is stored in **browser LocalStorage**
* Data remains saved even after page refresh
* No backend or database required

---

## 📸 Screens Included

* Login Page
* Dashboard
* Student List
* Add Student Form

---

## 🎯 Purpose of Project

This project is created for:

* 📚 Academic / Practical Exam
* 💡 Understanding React + Redux workflow
* 🧠 Learning CRUD operations without backend

---

## ✅ Conclusion

This project demonstrates:

* Component-based architecture
* State management using Redux
* Routing with authentication
* Clean UI using Bootstrap

---

## 👨‍💻 Author

**Saiyam Doshi**

---

## ⭐ Note

This is a **frontend-only project** using LocalStorage.
No external API or database is used.

## Screenshot

[!screenshot-project](https://github.com/SaiyamDoshi7/React-Project/blob/e7dedc25a7f9316507e9ef7d6f38f47c648ac065/Screenshot%202026-04-23%20152040.png)

[!screenshot-project]()

[!screenshot-project]()

[!screenshot-project]()
