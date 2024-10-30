import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import RepoList from './pages/RepoList';
import RepoDetails from './pages/RepoDetails';

function App() {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<RepoList />} />
        <Route path="/repos/:repoName" element={<RepoDetails />} />
      </Routes>
    </Router>
  );
}

export default App;
