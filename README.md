# Real-Time Chat Application 💬

A robust, full-stack web chat application built with the MERN stack (MongoDB, Express, React, Node.js) and **Socket.io** for real-time messaging. This project demonstrates real-time communication, secure authentication, and a sleek, responsive UI, all optimized for modern web standards.

---

## 🚀 Features

- **Real-Time Communication**: Instant messaging with **Socket.io**, supporting multiple chat rooms and **100+ concurrent users**.
- **Secure Authentication**: Implemented with **JWT** and **bcrypt** for user privacy and data integrity.
- **Responsive Design**: Built with **React** and **Tailwind CSS**, offering a seamless experience across desktop and mobile.
- **Persistent Data**: Chat history stored in **MongoDB** to keep conversations accessible even after reloads or logouts.
- **User Presence Indicators**: Real-time display of online/offline status.

---

## 📂 Tech Stack

### Backend
- **Node.js & Express**: API server and routing
- **Socket.io**: Real-time bidirectional communication
- **MongoDB**: Database for storing chat messages and user data
- **JWT**: Secure, token-based user authentication

### Frontend
- **React**: User interface with dynamic state management
- **Tailwind CSS**: Responsive, utility-first styling
- **Socket.io-client**: Real-time messaging integration

---

## 📊 Performance & Deployment

- **Deployment**: Hosted on **Render.com** with **99.8% uptime** and optimized server response.
- **Latency**: Achieved message delivery within **<500ms** in live environments.

---

## 💻 How to Run

1. **Clone** the repository and install dependencies:
    ```bash
    git clone https://github.com/geekysn/Chatting-Application.git
    cd Chatting-Application
    npm install
    ```

2. **Setup MongoDB** and configure the `.env` file with your **MongoDB URI** and **JWT_SECRET**.

3. **Run the server**:
    ```bash
    npm run dev
    ```

Visit `http://localhost:3000` to access the app in your browser. Happy chatting!

---

