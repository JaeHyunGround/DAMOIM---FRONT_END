import './App.css';
import MainPage from './page/main';
import ClubPage from './page/club';
import SignUpPage from './page/signUp';
import LoginPage from './page/login';
import EditPage from './page/edit';
import PostingPage from './page/posting';
import PostPage from './page/post';
import { Category } from './component/category';
import { Routes, Route } from 'react-router-dom';
import { useState } from 'react';


function App() {
  //로그인 로그아웃
  // const [user, setUser] = useState(null);
  // const authenticated = user != null;

  // const login = ({id, password}) => setUser(signIn({id, password}));
  // const logout = () => setUser(null);


  return (
    <div className="Damoim">
      <Routes>
        <Route path='/' element={<MainPage />}>
          <Route path='/:category' element={<Category />} />
        </Route>
        <Route path='/club/:clubName' element={<ClubPage />} />
        <Route path='/club/:clubName/posting' element={<PostingPage />} />
        <Route path='/club/:clubName/post' element={<PostPage />} />
        <Route path='/signUp' element={<SignUpPage />} />
        <Route path='/login' element={<LoginPage />} />
        <Route path='/edit' element={<EditPage />} />
      </Routes>
    </div>
  );
}

export default App;
