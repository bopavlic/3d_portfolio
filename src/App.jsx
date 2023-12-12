import './App.css';
import { Route, BrowserRouter as Router, Routes } from 'react-router-dom';
import Navbar from './components/Navbar';
import HomePage from './pages/HomePage';

function App() {
  return (
    <main className='bg-slate-300/20'>
      <Router>
        <Navbar />
        <Routes>
          <Route path='/' element={<HomePage />} />
          <Route path='/about' element={<h1>About</h1>} />
          <Route path='/projects' element={<h1>projects</h1>} />
          <Route path='/contact' element={<h1>contact</h1>} />
        </Routes>
      </Router>
    </main>
  );
}

export default App;
