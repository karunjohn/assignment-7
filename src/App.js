
import { BrowserRouter, Route, Routes } from 'react-router-dom';
import './App.css';
import Dashboard from './Component/Dashboard';
import EmployeeForm from './Component/EmployeeForm';


function App() {
  return (
   <BrowserRouter>
   <Routes>
    <Route path="/" exact element={
    <Dashboard/>
    }/>
    <Route path="/form" exact element={<EmployeeForm/>}/>
   </Routes>
   </BrowserRouter>
  );
}

export default App;
