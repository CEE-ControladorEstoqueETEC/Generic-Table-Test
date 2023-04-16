import { BrowserRouter as Roter, Routes, Route} from 'react-router-dom'; 
import Nav from './Components/Nav'
import EmployeeTable from './Components/tbl/EmployeeTable'
import ProductTable from './Components/tbl/ProductTable'
import './App.css';

function App() {
  return (
    <Roter>
      <Routes>
        <Route path="/" element={<Nav/>}/>
        <Route path="/employee" element={<EmployeeTable/>}/>
        <Route path="/product" element={<ProductTable/>}/>
      </Routes>
    </Roter>
  );
}

export default App;