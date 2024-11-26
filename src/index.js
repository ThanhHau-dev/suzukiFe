import React from 'react';
import ReactDOM from 'react-dom';
import { BrowserRouter as Router} from 'react-router-dom';
import App from './App';
import "./index.css"; // css của react

// Kiểm tra nếu URL không phải là trang chủ index.html, thì render React
if (window.location.pathname !== '/') {
    ReactDOM.render(
        <Router>
            <App />
        </Router>,
        document.getElementById('root')
    );
}

// index.js chỉ dùng để render, đừng viết tùm lum vô đây, khó quản lý