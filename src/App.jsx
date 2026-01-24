import './App.css'
import AdminPage from './Pages/admin/adminPage';
import { BrowserRouter, Route, Routes } from 'react-router-dom';
import HomePage from './Pages/home/homePage';
import Testing from './components/testing';
import LogiPage from './Pages/login/login';
import { Toaster } from 'react-hot-toast';



function App() {
 return (
  <BrowserRouter>
    <Toaster/>
   <Routes path="/*">
    <Route path="/testing" element={<Testing/>}/>
    <Route path="/login" element={<LogiPage/>}/>
    <Route path="/admin/*" element ={<AdminPage/>}/>
    <Route path="/*" element ={<HomePage/>}/>
    
   </Routes>
  </BrowserRouter>

 );
}

export default App
