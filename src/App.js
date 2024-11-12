import React, { useState, useEffect } from 'react';
import { Container } from 'react-bootstrap';
import TopNavbar from './components/TopNavbar';
import MainNavbar from './components/MainNavbar';
import BreadcrumbNav from './components/BreadcrumbNav';
import Login from './components/Login';
import Dashboard from './components/Dashboard';
import CreateEmployee from './components/CreateEmployee';
import EmployeeList from './components/EmployeeList';
import EmployeeEdit from './components/EmployeeEdit';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom'; 

function App() {
  // vIt Will Check for persisted authentication state in localStorage
  const [isAuthenticated, setIsAuthenticated] = useState(
    localStorage.getItem('isAuthenticated') === 'true'
  );
  const [employees, setEmployees] = useState([]);
  const [employeeToEdit, setEmployeeToEdit] = useState(null);
  const [currentPage, setCurrentPage] = useState("Dashboard");

  useEffect(() => {
    // Ensure that isAuthenticated is stored in localStorage to persist across page reloads
    localStorage.setItem('isAuthenticated', isAuthenticated);
  }, [isAuthenticated]); // Update localStorage whenever is Authenticated changes

  const handleLogin = () => {
    setIsAuthenticated(true);
  };

  const handleLogout = () => {
    setIsAuthenticated(false);
    setCurrentPage("Dashboard");
    localStorage.removeItem('isAuthenticated'); // Clear from localStorage on logout
  };

  const handleAddEmployee = (employee) => {
    setEmployees([...employees, employee]);
    setCurrentPage("employeeList");
  };

  const handleEditEmployee = (updatedEmployee) => {
    setEmployees(employees.map(emp => emp.id === updatedEmployee.id ? updatedEmployee : emp));
    setEmployeeToEdit(null);
    setCurrentPage("employeeList");
  };

  const handleDeleteEmployee = (id) => {
    setEmployees(employees.filter(emp => emp.id !== id));
  };

  const handlePageChange = (page) => setCurrentPage(page);

  return (
    <Router>
      <div>
        {isAuthenticated ? (
          <>
            <TopNavbar />
            <MainNavbar onLogout={handleLogout} onPageChange={handlePageChange} />
            <BreadcrumbNav currentPage={currentPage} />
            <Container>
              <Routes>
                <Route path="/" element={<Dashboard />} />
                <Route path="/employeeList" element={<EmployeeList employees={employees} onEdit={(emp) => setEmployeeToEdit(emp)} onDelete={handleDeleteEmployee} />} />
                <Route path="/createEmployee" element={<CreateEmployee onSubmit={handleAddEmployee} />} />
                <Route path="/employeeEdit" element={<EmployeeEdit employee={employeeToEdit} onSubmit={handleEditEmployee} />} />
              </Routes>
            </Container>
          </>
        ) : (
          <Container>
            <Login onLogin={handleLogin} />
          </Container>
        )}
      </div>
    </Router>
  );
}

export default App;
