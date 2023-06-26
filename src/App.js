import './App.css';
import AddUser from "./Components/AddUser";
import CrudOperation from "./Components/CrudOperation";
import NavBar from "./Components/NavBar";
import ViewUser from "./Components/ViewUser";
import {BrowserRouter, Routes, Route} from 'react-router-dom';
import EditUser from './Components/EditUser';
function App() {
  return (
   <BrowserRouter>
    <NavBar/>
     <Routes>
      <Route path='/' element={<CrudOperation/>}/>
      <Route path='/add' element={<AddUser/>}/>
      <Route path='/view' element={<ViewUser/>}/>
      <Route path='/edit/:id' element={<EditUser/>}/>
     </Routes> 
   </BrowserRouter>
  );
}

export default App;
