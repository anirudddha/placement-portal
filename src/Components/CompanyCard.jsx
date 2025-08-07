// src/components/OpportunityCard.jsx

import React from 'react';
import { Link } from 'react-router-dom'; // Import Link
import './CompanyCard.css';
import { FaMapMarkerAlt, FaMoneyBillWave, FaCalendarAlt } from 'react-icons/fa';

const CompanyCard = ({ opportunity }) => {
  const {
    id, // Get the ID for the link
    jobTitle,
    companyName,
    companyLogoUrl,
    location,
    stipend,
    applyBy,
    skills,
  } = opportunity;

  return (
    <div className="opportunity-card">
      <div className="card-header">
        <img src={companyLogoUrl} alt={`${companyName} Logo`} className="company-logo" />
        <div className="header-info">
          <h3 className="job-title">{jobTitle}</h3>
          <p className="company-name">{companyName}</p>
        </div>
      </div>

      <div className="card-body">
        <div className="detail-item">
          <FaMapMarkerAlt className="detail-icon" />
          <span>{location}</span>
        </div>
        <div className="detail-item">
          <FaMoneyBillWave className="detail-icon" />
          <span>Stipend: <span className="stipend-value">{stipend}</span></span>
        </div>
        <div className="detail-item">
          <FaCalendarAlt className="detail-icon" />
          <span>Apply By: {applyBy}</span>
        </div>
      </div>

      <div className="skills-container">
        {skills.slice(0, 4).map((skill, index) => (
          <span key={index} className="skill-tag">{skill}</span>
        ))}
        {skills.length > 4 && <span className="skill-tag-more">+{skills.length - 4} more</span>}
      </div>

      <div className="card-footer">
        {/* Use Link to navigate to the detail page with the opportunity's ID */}
        <Link to={`/opportunity/${id}`} className="details-button">View Details</Link>
        <a href="#" className="apply-button">Apply Now</a>
      </div>
    </div>
  );
};

export default CompanyCard;