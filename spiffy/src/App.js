import logo from './logo.svg';
import './App.css';
import LoginPage from './Pages/LoginPage';
import MainRoutes from './Pages/MainRoutes';
import {BrowserRouter} from "react-router-dom";

function App() {
  return (
    <div className="App">
      <BrowserRouter>
      <MainRoutes />
      </BrowserRouter>
    </div>
  );
}

export default App;
