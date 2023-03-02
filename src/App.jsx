
import Dashboard from './pages/Home';
import { Route, Routes } from 'react-router-dom';
import SignIn from './pages/SignIn';
import Signup from './pages/Signup';
import { AuthProvider } from './contexts/AuthContext';
import ForgotPassword from './pages/ForgotPassword';
function App() {
  return (
    <AuthProvider>
 <Routes>
 
  <Route path="/" element={<Dashboard />} />
    <Route path="/signin" element={< SignIn/>} />
    <Route path="/signup" element={<Signup/>} />
    <Route path="/forgot" element={<ForgotPassword />} />
     </Routes>
 </AuthProvider>
    )
}

export default App
