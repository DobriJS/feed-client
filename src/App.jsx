import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Navigationbar from './components/Navbar/Navigationbar';

function App() {
  return (
    <Router>
      <Navigationbar />
    </Router>
  );
}

export default App;
