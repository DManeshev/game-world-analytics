import React from 'react';
import { BrowserRouter, Routes, Route } from 'react-router-dom';

import Navigation from './components/navigation/Navigation';
import Logo from "./components/ui/heading/Logo";
import HomePage from './pages/HomePage';
import PlayedPage from './pages/PlayedPage';
import StatisticsPage from './pages/StatisticsPage';

function App() {

  return (
    <BrowserRouter>
      <div className="app">
        <div className='wrapper'>
          <header className='header'>
            <Logo />
          </header>
          <Navigation />
          <main className='main'>
            <Routes>
              <Route path='/' element={<HomePage />} />
              <Route path='/statistics' element={<StatisticsPage />} />

              <Route path='/playedGame' element={<PlayedPage />} />
            </Routes>
          </main>
        </div>
      </div>
    </BrowserRouter>

  );
}

export default App;
