import {Routes, Route} from 'react-router-dom';
// import Navbar from './pages/Admin/Navbar';
// import Sidebar from './pages/Admin/Sidebar';
import { Home } from './pages/Home';


function App() {
  return (
    <div className="App">
      <Routes>
        <Route path="/" element={<Home />} />
      </Routes>
    </div>
  );
}

export default App;
