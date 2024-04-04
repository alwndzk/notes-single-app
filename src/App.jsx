import React, { useState, useEffect } from 'react';
import { Routes, Route } from 'react-router-dom';
import Navigation from './components/Navigation';
import LoginPage from './pages/LoginPage';
import HomePagesWrapper from './pages/HomePageNotes';
import AddPageNotes from './pages/AddPageNotes';
import DetailPageWrapper from './pages/DetailPageNotes';
import RegisterPage from './pages/RegisterPage';
import { getUserLogged, putAccessToken } from './utils/network-data';

function App() {
  const [authedUser, setAuthedUser] = useState(null);
  const [initializing, setInitializing] = useState(true);

  const fetchData = async () => {
    const { data } = await getUserLogged();
    setAuthedUser(data);
  };

  useEffect(() => {
    fetchData().then(() => {
      setInitializing(false);
    });
  }, []);

  const onLoginSuccess = async ({ accessToken }) => {
    putAccessToken(accessToken);
    fetchData();
  };

  const onLogout = () => {
    setAuthedUser(null);
    putAccessToken('');
  };

  if (initializing) {
    return null;
  }
  
  if (authedUser === null) {
    return (
      <div className='app-container'>
        <header>
          <Navigation />
        </header>
        <main>
          <Routes>
            <Route path="/*" element={<LoginPage loginSuccess={onLoginSuccess}/>} />
            <Route path="/register" element={<RegisterPage />} />
          </Routes>
        </main>
      </div>
    );
  }

  return (
    <div className='app-container'>
      <header>
        <Navigation logout={onLogout} name={authedUser ? authedUser.name: ''}/>
      </header>
      <main>
        <Routes>
          <Route path='/' element={<HomePagesWrapper />} />
          <Route path='/notes/note' element={<AddPageNotes />} />
          <Route path='/notes/:id' element={<DetailPageWrapper />} />
        </Routes>
      </main>
    </div>
  );
}

export default App;

