import React, { useState, useEffect } from 'react';
import { Page } from './types';
import { Header } from './components/Header';
import { Footer } from './components/Footer';
import { FloatingRemco } from './components/FloatingRemco';

// Pages
import { Home } from './pages/Home';
import { Services } from './pages/Services';
import { Cases } from './pages/Cases';
import { About } from './pages/About';
import { Tools } from './pages/Tools';
import { Contact } from './pages/Contact';

function App() {
  const [currentPage, setCurrentPage] = useState<Page>(Page.HOME);

  // Scroll to top on page change
  useEffect(() => {
    window.scrollTo(0, 0);
  }, [currentPage]);

  const renderPage = () => {
    switch (currentPage) {
      case Page.HOME: return <Home onNavigate={setCurrentPage} />;
      case Page.SERVICES: return <Services />;
      case Page.CASES: return <Cases />;
      case Page.ABOUT: return <About />;
      case Page.TOOLS: return <Tools />;
      case Page.CONTACT: return <Contact />;
      default: return <Home onNavigate={setCurrentPage} />;
    }
  };

  return (
    <div className="min-h-screen bg-white">
      <Header onNavigate={setCurrentPage} currentPage={currentPage} />
      <main>
        {renderPage()}
      </main>
      <Footer onNavigate={setCurrentPage} />
      <FloatingRemco />
    </div>
  );
}

export default App;