import './App.css';
import { UserProvider } from './context/ThemeContext';
import User from './component/User';
import UserDetails from './component/UserDetails';
import Home from './component/Home';
import {  BrowserRouter,Router,  Switch,  Route,Routes,Link} from "react-router-dom";

function App() {
  return (
    <UserProvider>
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/User" element={<User />} />
          <Route path="/UserDetails" element={<UserDetails />} />
        </Routes>
      </BrowserRouter>
    </UserProvider>
  );
}

export default App;
