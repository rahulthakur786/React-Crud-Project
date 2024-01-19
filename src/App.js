import { Route, Routes } from 'react-router-dom';
import './App.css';
import Navbar from './pages/Navbar';
import Home from './pages/Home';
import User from './pages/user/User';
import Adduser from './pages/user/Adduser';
import Edit from './pages/user/Edit';


function App() {
  return (
    <div className="App">
      <Navbar />
      <Routes>
        <Route path='/' element={<Home />} />
        <Route path='/users/:id' element={<User />} />
        <Route path='/add-user' element={<Adduser />} />
        <Route path='/edit-user/:id' element={<Edit />} />
      </Routes>
    </div>
  );
}

export default App;
