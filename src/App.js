import React from 'react';
import { BrowserRouter as Router, Route, Routes, Link } from 'react-router-dom';
import Home from './Home';
import Lessons from './Lessons';
import LessonDetail from './LessonDetail';

function App() {
  return (
    <Router>
      <nav style={{padding: '1em', background: '#008060', color: 'white'}}>
        <Link style={{color: 'white', marginRight: '1em'}} to="/">Home</Link>
        <Link style={{color: 'white'}} to="/lessons">Lessons</Link>
      </nav>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/lessons" element={<Lessons />} />
        <Route path="/lessons/:id" element={<LessonDetail />} />
      </Routes>
    </Router>
  );
}

export default App;