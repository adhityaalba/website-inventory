import AddUser from './components/AddUser';
import UserList from './components/UserList';
import ProdukPage from './components/ProdukPage';
import ProfilePage from './components/ProfilePage';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import EditUser from './components/EditUser';
import Home from './components/Home';
function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/produkpage" element={<ProdukPage />} />
        <Route path="/profilepage" element={<ProfilePage />} />
        <Route path="/list" element={<UserList />} />
        <Route path="/add" element={<AddUser />} />
        <Route path="/edit/:id" element={<EditUser />} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;
