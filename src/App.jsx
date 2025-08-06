import { BrowserRouter, Routes, Route } from 'react-router-dom';

// Pages
import Login from './pages/Login';
import Register from './pages/Register';
import RecoverPassword from './pages/RecoverPassword';
import SecurityRouter from './auth/SecurityRouter';
import Dashboard from './pages/Dashboard';

function App() {

  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Login />} />
        <Route path="/register" element={<Register />} />
        <Route path="/recover" element={<RecoverPassword />} />

        <Route element={<SecurityRouter/>}>
          <Route path='/dashboard' element={<Dashboard />}/>
        </Route>
      </Routes>
    </BrowserRouter>

  )
}

export default App
