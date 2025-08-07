// src/App.js

import React from 'react';
import { BrowserRouter as Router, Routes, Route, Navigate } from 'react-router-dom';

import Navbar from './Components/Navbar';
import LoginPage from './Pages/LoginPage/LoginPage';
import SignUpPage from './Pages/signUpPage/SignUpPage'
import CompaniesPage from './Pages/Companies/CompaniesPage';
import CompanyDetailsPage from "./Pages/Companies/CompanyDetailsPage";
import MyProfile from "./Pages/MyProfile/MyProfile";


// Dummy components for demonstration
const Dashboard = () => <h1 style={{ textAlign: 'center', marginTop: '50px' }}>Dashboard Page</h1>;
const Opportunities = () => <h1 style={{ textAlign: 'center', marginTop: '50px' }}>Job Opportunities</h1>;
const Companies = () => <h1 style={{ textAlign: 'center', marginTop: '50px' }}>Company Profiles</h1>;
const Profile = () => <h1 style={{ textAlign: 'center', marginTop: '50px' }}>My Profile</h1>;
const Applications = () => <h1 style={{ textAlign: 'center', marginTop: '50px' }}>My Applications</h1>;
const Resources = () => <h1 style={{ textAlign: 'center', marginTop: '50px' }}>Placement Resources</h1>;
const Logout = () => {
  // In a real app, you would clear auth tokens here and redirect
  return <Navigate to="/login" />;
};

function App() {
  // This would come from your auth context or state management (e.g., Redux)
  const isUserLoggedIn = true; 

  return (
    <Router>
      {/* The Navbar will appear on all pages except login/signup if you add conditional logic */}
      {isUserLoggedIn && <Navbar isLoggedIn={isUserLoggedIn} />}
      
      <Routes>
        {/* Routes for logged-in users */}
        {isUserLoggedIn ? (
          <>
            <Route path="/dashboard" element={<Dashboard />} />
            <Route path="/opportunities" element={<Opportunities />} />
            <Route path="/companies" element={<CompaniesPage />} />
            <Route path="/profile" element={<MyProfile />} />
            <Route path="/applications" element={<Applications />} />
            <Route path="/resources" element={<Resources />} />
            <Route path="/logout" element={<Logout />} />
            {/* Redirect root to dashboard if logged in */}
            <Route path="*" element={<Navigate to="/dashboard" />} />
             <Route path="/opportunity/:id" element={<CompanyDetailsPage />} />
          </>
        ) : (
          /* Routes for logged-out users */
          <>
            <Route path="/login" element={<LoginPage />} />
            <Route path="/signup" element={<SignUpPage />} />
            {/* Redirect any other path to login if not logged in */}
            <Route path="*" element={<Navigate to="/login" />} />
          </>
        )}
      </Routes>
    </Router>
  );
}

export default App;