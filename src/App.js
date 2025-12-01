import React from 'react';
import './App.css';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import { ThemeProvider } from './contexts/ThemeContext';
import Header from './components/Header';
import Footer from './components/Footer';
import Home from './pages/Home';
import AccessibilityToolbar from './components/AccessibilityToolbar';

function App() {
  return (
    <ThemeProvider>
      <div className="App">
        <BrowserRouter basename="/odisha-ai_website">
          <AccessibilityToolbar />
          <Header />
          <main id="main-content">
            <Routes>
              <Route path="/" element={<Home />} />
            </Routes>
          </main>
          <Footer />
        </BrowserRouter>
      </div>
    </ThemeProvider>
  );
}

export default App;
