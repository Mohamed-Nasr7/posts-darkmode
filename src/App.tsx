import { BrowserRouter, Routes, Route } from 'react-router-dom';
import Posts from './components/Posts';
import PostComments from './components/PostComments';
import Albums from './components/Albums';

const App = () => {
  return (
    <div className='app'>
      <ul className='nav justify-content-end p-2'>
        <li className='nav-item'>
          <button type='button' className='btn btn-dark'>
            Dark Mode
          </button>
        </li>
      </ul>

      <BrowserRouter>
        <Routes>
          <Route path='/' element={<Posts />} />
          <Route path='post' element={<PostComments />} />
          <Route path='albums' element={<Albums />} />
        </Routes>
      </BrowserRouter>
    </div>
  );
};

export default App;
