import logo from './logo.svg';
import './App.css';
import { BrowserRouter, Route, Routes } from 'react-router-dom';
import NavbarComponent from './container/NavbarComponent';
import Index from './container/index';
import Student from './container/students/index';
import Dosen from './container/dosens/index';

function App() {
  return (
    <BrowserRouter>
      {/* <Navbar /> */}
      <NavbarComponent />
      <main>
        <Routes>
          <Route path='/' exact element={<Index />} />
          <Route path='/student' exact element={<Student />} />
          <Route path='/dosen' exact element={<Dosen />} />
          {/* <Route path='/daftar' exact element={<Daftar />} />
          <Route path='/peminjaman' exact element={<Peminjaman />} />
          <Route path='/sukses' exact element={<Sukses />} />
          <Route path='/edit' exact element={<BukuEdit />} /> */}
          {/* <Route path="/sukses" component={Sukses} exact /> */}
        </Routes>
      </main>
    </BrowserRouter>
  );
}

export default App;
