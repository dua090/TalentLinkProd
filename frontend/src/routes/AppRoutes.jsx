import {
  Routes,
  Route,
} from "react-router-dom";

import Signin from "../pages/Signin";

import Signup from "../pages/Signup";

import RecruiterDashboard from "../pages/recruiter/RecruiterDashboard";

import CandidateDashboard from "../pages/candidate/CandidateDashboard";

export default function AppRoutes() {

  return (

    <Routes>

      <Route
        path="/"
        element={<Signin />}
      />

      <Route
        path="/signin"
        element={<Signin />}
      />

      <Route
        path="/signup"
        element={<Signup />}
      />

      <Route
        path="/dashboard/recruiter"
        element={<RecruiterDashboard />}
      />

      <Route
        path="/dashboard/candidate"
        element={<CandidateDashboard />}
      />

    </Routes>
  );
}