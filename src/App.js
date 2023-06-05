import { Routes, Route } from 'react-router-dom';
import './App.css';

function App() {
  return (
    <Routes>
      <Route index element={<Quotes />} />
    </Routes>
  );
}

export default App;
