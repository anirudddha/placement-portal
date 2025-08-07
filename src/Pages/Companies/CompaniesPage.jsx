// src/components/CompaniesPage.jsx

import React from 'react';
import { Link } from 'react-router-dom'; // Import the Link component
import CompanyCard from '../../components/CompanyCard';
import './CompaniesPage.css';

// MOCK DATA: This data represents individual job opportunities
export const opportunitiesData = [
  {
    id: 1,
    jobTitle: 'Frontend Developer Intern',
    companyName: 'Innovate Corp',
    companyLogoUrl: 'https://via.placeholder.com/100/6A11CB/FFFFFF?text=I',
    location: 'Remote',
    stipend: '₹ 25,000/month',
    applyBy: '30 Dec 2024',
    skills: ['React', 'JavaScript', 'HTML', 'CSS', 'Git', 'Redux'],
    aboutCompany: 'Innovate Corp is a leading tech company focused on creating cutting-edge solutions for the modern web. We value creativity, collaboration, and a passion for learning.',
    aboutJob: 'This is a fantastic opportunity for a frontend developer to work on exciting projects and gain hands-on experience with the latest technologies. You will be responsible for developing and maintaining user interfaces, collaborating with the design team, and ensuring a seamless user experience.',
    responsibilities: [
        'Develop new user-facing features using React.js.',
        'Build reusable components and front-end libraries for future use.',
        'Translate designs and wireframes into high-quality code.',
        'Optimize components for maximum performance across a vast array of web-capable devices and browsers.'
    ]
  },
  {
    id: 2,
    jobTitle: 'Backend Engineer (Python)',
    companyName: 'Quantum Solutions',
    companyLogoUrl: 'https://via.placeholder.com/100/2575FC/FFFFFF?text=Q',
    location: 'Bangalore, India',
    stipend: '₹ 4.5 - 6.0 LPA',
    applyBy: '15 Jan 2025',
    skills: ['Python', 'Django', 'REST APIs', 'PostgreSQL', 'Docker'],
    aboutCompany: 'Quantum Solutions specializes in providing robust backend solutions for a variety of industries. We are a team of dedicated engineers who are passionate about building scalable and efficient systems.',
    aboutJob: 'We are looking for a skilled backend engineer to join our team. You will be responsible for designing and implementing server-side logic, working with databases, and building and maintaining APIs. This is a full-time role with opportunities for growth and professional development.',
    responsibilities: [
        'Design and implement low-latency, high-availability, and performant applications.',
        'Write reusable, testable, and efficient code.',
        'Integration of user-facing elements developed by front-end developers with server-side logic.',
        'Implementation of security and data protection.'
    ]
  },
  // Add other opportunities here...
];

const CompaniesPage = () => {
  return (
    <div className="companies-page-container">
      <div className="companies-header">
        <h1>Available Opportunities</h1>
        <p>Find your next career move. Apply to the best internships and full-time jobs.</p>
      </div>
      <div className="companies-grid">
        {opportunitiesData.map(opportunity => (
          // Wrap the CompanyCard with a Link component.
          // The `to` prop creates the destination URL, e.g., "/opportunity/1"
          <CompanyCard key={opportunity.id} opportunity={opportunity} />
        ))}
      </div>
    </div>
  );
};

export default CompaniesPage;