import { useState, useEffect } from 'react';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import Posts from './components/Posts';
import PostComments from './components/PostComments';
import Albums from './components/Albums';

const App = () => {
  const [theme, setTheme] = useState<string>(
    localStorage.getItem('theme') || 'light'
  );

  useEffect(() => {
    localStorage.setItem('theme', theme);
  }, [theme]);

  const onToggleThemeClick = () => {
    setTheme(theme => (theme === 'light' ? 'dark' : 'light'));
  };

  return (
    <div className='app' data-theme={theme}>
      <nav className='navbar sticky-top navbar-light bg-light'>
        <ul className='navbar-nav w-100 flex-row justify-content-between p-2'>
          <li className='nav-item'>
            <ul className='navbar-nav w-100 flex-row p-2'>
              <li className='nav-item'>Posts</li>
              <li className='nav-item'>Albums</li>
            </ul>
          </li>

          <li className='nav-item'>
            <button
              type='button'
              className='btn btn-dark'
              onClick={onToggleThemeClick}
            >
              {theme === 'light' ? 'Dark' : 'Light'} Mode
            </button>
          </li>
        </ul>
      </nav>

      <BrowserRouter>
        <Routes>
          <Route path='/' element={<Posts />} />
          <Route path='post/:id' element={<PostComments />} />
          <Route path='albums' element={<Albums />} />
        </Routes>
      </BrowserRouter>
    </div>
  );
};

export default App;
