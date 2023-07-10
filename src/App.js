import './App.css';
import Navbar from './components/Navbar';
import { Outlet } from "react-router-dom";
import Sidebar from './components/Sidebar';


function App() {
  return (
    <div className="App">
      <Navbar />
      <Outlet>
      <Sidebar>

      </Sidebar>
      </Outlet>

    </div>
  );
}

export default App;
