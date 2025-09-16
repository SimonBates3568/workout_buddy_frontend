import { BrowserRouter, Routes, Route, Navigate } from 'react-router-dom';
import { useAuthContext } from './hooks/useAuthContext';

//pages
import Home from './pages/Home';
import Navbar from './components/Navbar';
import Login from './pages/Login';
import Signup from './pages/Signup';
import Footer from './components/Footer';


function App() {
  const { user } = useAuthContext();
  return (
    <div className="app-wrapper">
      <BrowserRouter>
        <Navbar />
        <div className="main-content">
          <div className='pages'>
            <Routes>
              <Route path="/" element={user ? <Home /> : <Navigate to="/login" />} />
            </Routes>
            <Routes>
              <Route path="/login" element={!user ? <Login /> : <Navigate to="/" />} />
            </Routes>
            <Routes>
              <Route path="/signup" element={!user ? <Signup /> : <Navigate to="/" />} />
            </Routes>
          </div>
        </div>
        <Footer />
      </BrowserRouter>
    </div>
  );
}

export default App;
 