import React, { useEffect } from 'react';
import './App.css';
import AOS from 'aos';
import 'aos/dist/aos.css';
import Dashboard from './Views/Dashboard';

function App() {
  useEffect(() => {
    AOS.init({
      duration: 1000,
      once: false, // chỉ chạy 1 lần
      offset: 100,
    });
  }, []);
  return <Dashboard />;
}

export default App;
