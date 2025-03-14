import React from "react";
import ReactDOM from "react-dom/client";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import JobSearch from "./components/jobsearch";
import JobListing from "./components/joblistng";
import RecruiterLog from "./components/recruiterlog";

import RecruiterSignup from "./components/recrutiersignup"; // Import Recruiter Signup
import "./index.css";

ReactDOM.createRoot(document.getElementById("root")!).render(
  <React.StrictMode>
    <Router>
      <Routes>
        <Route path="/" element={<JobSearch />} />
        <Route path="/jobs" element={<JobListing />} />
        <Route path="/recruiterlog" element={<RecruiterLog />} /> {/* Recruiter Login */}
        <Route path="/recruitersignup" element={<RecruiterSignup />} /> {/* Recruiter Signup */}
      </Routes>
    </Router>
  </React.StrictMode>
);
