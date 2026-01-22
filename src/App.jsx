import './App.css'
import AdminPage from './Pages/admin/adminPage';
import { BrowserRouter, Route, Routes } from 'react-router-dom';
import HomePage from './Pages/home/homePage';



function App() {
 return (
  <BrowserRouter>
   <Routes path="/*">
    <Route path="/admin/*" element ={<AdminPage/>}/>
    <Route path="/*" element ={<HomePage/>}/>
    
   </Routes>
  </BrowserRouter>

 );
}

export default App
