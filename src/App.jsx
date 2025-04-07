import { Route, Routes } from "react-router-dom"
import PatientSignin from "./pages/PatientSignIn"
import PatientSignUp from "./pages/PatientSignUp"
import Signin from "./pages/SignIn"
import PatientDashboard from "./pages/PatientDashboard"
import DoctorDashboard from "./pages/DoctorDashboard"
import AdminDashboard from "./pages/AdminDashboard"
import Nurse from "./pages/Nurse"

function App() {

  return (
    <Routes>
      <Route path="/" element={<PatientSignin />} />
      <Route path="/signUp" element={<PatientSignUp />} />
      <Route path="/hospitalSignin" element={<Signin />} />
      <Route path="/patientDashboard" element={<PatientDashboard />} />
      <Route path="/doctorDashboard" element={<DoctorDashboard />} />
      <Route path="/admin" element={<AdminDashboard />} />
      <Route path="/nurse" element={<Nurse />} />
    </Routes>
  )
}

export default App
