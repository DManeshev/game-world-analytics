import React from 'react';
import { BrowserRouter, Routes, Route } from 'react-router-dom';

import { useGetGamesQuery } from './store/rawg/rawg.api';

import Navigation from './components/navigation/Navigation';
import HomePage from './pages/HomePage';
import StatisticsPage from './pages/StatisticsPage';

function App() {

  const { data } = useGetGamesQuery();

  console.log(data)

  return (
    <BrowserRouter>
      <div className="app">
        <div className='wrapper'>
          <Navigation />
          <Routes>
            <Route path='/' element={<HomePage />} />
            <Route path='/statistics' element={<StatisticsPage />} />
          </Routes>
        </div>
      </div>
    </BrowserRouter>

  );
}

export default App;
