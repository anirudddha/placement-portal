// src/pages/OpportunityDetailPage/OpportunityDetailPage.jsx

import React from 'react';
import { useParams, Link } from 'react-router-dom';
 // Import the same data
import './CompanyDetailsPage.css';
import { FaMapMarkerAlt, FaMoneyBillWave, FaCalendarAlt, FaArrowLeft } from 'react-icons/fa';

const opportunitiesData = [
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
const CompanyDetailsPage = () => {
  const { id } = useParams(); // Get the ID from the URL
  const opportunity = opportunitiesData.find(opp => opp.id === parseInt(id));

  // Handle case where the opportunity is not found
  if (!opportunity) {
    return (
      <div className="detail-page-container not-found">
        <h2>Opportunity not found!</h2>
        <Link to="/" className="back-link">Go back to opportunities</Link>
      </div>
    );
  }

  const {
    jobTitle,
    companyName,
    companyLogoUrl,
    location,
    stipend,
    applyBy,
    skills,
    aboutCompany,
    aboutJob,
    responsibilities
  } = opportunity;

  return (
    <div className="detail-page-container">
      <Link to="/" className="back-link">
        <FaArrowLeft /> Back to Opportunities
      </Link>
      <div className="detail-header">
        <img src={companyLogoUrl} alt={`${companyName} Logo`} className="detail-logo" />
        <div className="detail-header-info">
          <h1>{jobTitle}</h1>
          <h2>{companyName}</h2>
          <div className="header-meta">
            <span><FaMapMarkerAlt /> {location}</span>
            <span><FaMoneyBillWave /> {stipend}</span>
            <span><FaCalendarAlt /> Apply by {applyBy}</span>
          </div>
        </div>
      </div>

      <div className="detail-content">
        <div className="content-section">
          <h3>About {companyName}</h3>
          <p>{aboutCompany}</p>
        </div>

        <div className="content-section">
          <h3>About the Job</h3>
          <p>{aboutJob}</p>
        </div>

        <div className="content-section">
            <h3>Key Responsibilities</h3>
            <ul>
                {responsibilities.map((item, index) => <li key={index}>{item}</li>)}
            </ul>
        </div>

        <div className="content-section">
          <h3>Skills Required</h3>
          <div className="skills-tags-container">
            {skills.map((skill, index) => (
              <span key={index} className="skill-tag-detail">{skill}</span>
            ))}
          </div>
        </div>

        <button className="apply-now-button">Apply Now</button>
      </div>
    </div>
  );
};

export default CompanyDetailsPage;