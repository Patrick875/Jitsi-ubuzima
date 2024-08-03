import { Route, Routes } from "react-router-dom"
import Login from "./views/Login"
import ForgotPassword from "./views/ForgotPassword"
import { Toaster } from 'react-hot-toast';
import Consultation from "./views/Consultation";
function App() {

  return (
    <>
      <Toaster position='top-center' toastOptions={{ duration: 5000 }} />
      <Routes>
        <Route index element={<Login />} />
        <Route path='forgot-password' element={<ForgotPassword />} />
        <Route path='call' element={<Consultation />} />
      </Routes>
    </>
  )
}

export default App
