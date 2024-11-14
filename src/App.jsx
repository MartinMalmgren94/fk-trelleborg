import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import withAuthProtection from './Components/withAuthProtection/withAuthProtection'
import LoginSignup from "./Components/LoginSignup/LoginSignup";
import ForgotPassword from "./Components/ForgotPassword/ForgotPassword";
import Header from "./Components/Header/Header";

import "./App.css";
import Dashboard from "./Components/Dashboard/Dashboard";

const ProtectedDashboard = withAuthProtection(Dashboard)

function App() {
  return (
    <Router basename={"/fk-trelleborg/"}>
      <Header />
      <Routes>
        <Route path="/" element={<LoginSignup />} />
        <Route path="/forgot-password" element={<ForgotPassword />} />
        <Route path="/dashboard" element={<ProtectedDashboard/>}/>
      </Routes>
    </Router>
  );
}

export default App;
