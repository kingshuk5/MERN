// import logo from './logo.svg';
import './App.css';
import { DefaultLayout } from './layout/defaultlayout';
import { About } from './pages/about';
import { Home } from './pages/home';
import { Login } from './pages/login';
import { Registration } from './pages/registration';
import { Error } from './pages/error';
import {  Routes, Route, BrowserRouter } from 'react-router-dom';

function App() {
  return (
    <>
      <BrowserRouter>
        <Routes>
          <Route path="/login" element={<Login/>}/>
          <Route path="/registration" element={<Registration/>}/>
          <Route path="/"element={<DefaultLayout/>}>
            <Route index element={<Home/>}/>
            <Route path="about" element={<About/>}/>
            <Route path="*" element={<Error/>}/>
          </Route>

        </Routes>
      </BrowserRouter>
    </>
  );
}

export default App;
