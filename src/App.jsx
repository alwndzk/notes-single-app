import React from 'react';
import { Routes, Route } from 'react-router-dom';
import Navigation from './components/Navigation';
import HomePagesWrapper from './pages/HomePageNotes';
import AddPageNotes from './pages/AddPageNotes';
import DetailPageWrapper from './pages/DetailPageNotes';

function App() {
  return (
    <div className='app-container'>
      <header>
        <Navigation />
      </header>
      <main>
        <Routes>
          <Route path='/' element={<HomePagesWrapper />} />
          <Route path='/notes/new' element={<AddPageNotes />} />
          <Route path='/notes/:id' element={<DetailPageWrapper />} />
        </Routes>
      </main>
    </div>
  );
}

export default App;

