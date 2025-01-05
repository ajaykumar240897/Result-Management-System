import { BrowserRouter, Route, Routes } from 'react-router-dom';
import Login from './Pages/Employees/Login';
import Register from './Pages/Employees/Register';
import Home from './Pages/Home';
import './styles/theme.css';
import './styles/layout.css';
import EmployeeHome from './Pages/Employees/EmployeeHome';
import Students from './Pages/Employees/Students';
import AddStudent from './Pages/Employees/AddStudent';
import EditStudent from './Pages/Employees/EditStudent';
import Results from './Pages/Employees/Results';
import AddResult from './Pages/Employees/AddResult';
import EditResult from './Pages/Employees/EditResult';
import ResultCheck from './Pages/ResultCheck';
import ResultInfo from './Pages/Employees/ResultInfo';


function App() {
  return (
    <div>
      <BrowserRouter>
        <Routes>
          <Route path='/' element={<Home />} />
          <Route path='/login' element={<Login />} />
          <Route path='/register' element={<Register />} />
          <Route path='/employee' element={<EmployeeHome />} />
          <Route path='/employee/students' element={<Students />} />
          <Route path='/employee/students/add' element={<AddStudent />} />
          <Route path='/employee/students/edit/:rollNumber' element={<EditStudent />} />
          <Route path='/employee/results' element={<Results />} />
          <Route path='/employee/results/add' element={<AddResult />} />
          <Route path='/employee/results/edit/:rollNumber' element={<EditResult />} />
          <Route path='/result/:resultId' element={<ResultCheck />} />
          <Route path='/result/:resultId/resultinfo' element={<ResultInfo />} />
        </Routes>
      </BrowserRouter>
    </div>
  )
}

export default App
