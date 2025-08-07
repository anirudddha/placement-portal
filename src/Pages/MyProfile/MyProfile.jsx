import React from 'react';
import './MyProfile.css'; // Make sure you have a MyProfile.css file in the same folder

// Importing a placeholder image and icons
import profilePic from '../assets/profile-pic.jpg'; 
import { FaLinkedin, FaGithub, FaEnvelope, FaPhone, FaMapMarkerAlt, FaBriefcase, FaCode, FaGraduationCap, FaDownload } from 'react-icons/fa';

const MyProfile = () => {
  // In a real app, this data would come from an API or state management
  const studentData = {
    name: 'Jane Doe',
    profilePic: profilePic,
    university: 'University of Technology',
    branch: 'Computer Science & Engineering',
    graduationYear: 2025,
    cgpa: '8.75',
    contact: {
      email: 'jane.doe@university.edu',
      phone: '+1 234 567 8900',
      location: 'San Francisco, CA',
    },
    links: {
      linkedin: 'https://linkedin.com/in/janedoe',
      github: 'https://github.com/janedoe',
    },
    bio: "A highly motivated and detail-oriented Computer Science student with a passion for developing innovative software solutions. Proficient in full-stack web development with a strong foundation in data structures and algorithms. Eager to leverage my skills in a challenging internship role.",
    skills: [
      'JavaScript', 'React', 'Node.js', 'Express', 'MongoDB', 'Python', 'Java', 'SQL', 'HTML5', 'CSS3', 'Git'
    ],
    experience: [
      {
        role: 'Software Development Intern',
        company: 'Tech Solutions Inc.',
        duration: 'June 2024 - August 2024',
        description: 'Developed and maintained features for a client-facing web application using React and Node.js. Collaborated with a team of 5 developers in an agile environment.'
      }
    ],
    projects: [
      {
        title: 'E-commerce Platform',
        description: 'A full-featured e-commerce website with product listings, user authentication, and a payment gateway integrated using Stripe.',
        tech: ['React', 'Node.js', 'MongoDB', 'Stripe API'],
        link: 'https://github.com/janedoe/ecommerce'
      },
      {
        title: 'Task Management App',
        description: 'A responsive web app to help users organize their daily tasks with features like drag-and-drop and deadline notifications.',
        tech: ['React', 'Firebase', 'Material-UI'],
        link: 'https://github.com/janedoe/task-manager'
      }
    ],
    // IMPORTANT: Place your resume in the public folder at the root of your project
    // and update this path. For example: '/jane_doe_resume.pdf'
    resumeUrl: '/resume.pdf' 
  };

  return (
    <div className="profile-container">
      <div className="profile-header">
        <img src={studentData.profilePic} alt={studentData.name} className="profile-picture" />
        <div className="header-info">
          <h1>{studentData.name}</h1>
          <h2>{studentData.branch}</h2>
          <h3><FaGraduationCap /> {studentData.university} - Class of {studentData.graduationYear}</h3>
          <p className="cgpa">CGPA: {studentData.cgpa}</p>
        </div>
        <a href={studentData.resumeUrl} download className="resume-button">
          <FaDownload /> Download Resume
        </a>
      </div>

      <div className="profile-body">
        <div className="profile-left-column">
          <div className="profile-card contact-info">
            <h4>Contact Information</h4>
            {/* 
              *** THIS IS THE CORRECTED LINE ***
              The error was an extra '}' inside the href attribute.
              It should be mailto:${...} inside the curly braces, not mailto:${...}}.
            */}
            <p><FaEnvelope /> <a href={mailto:${studentData.contact.email}}>{studentData.contact.email}</a></p>
            <p><FaPhone /> {studentData.contact.phone}</p>
            <p><FaMapMarkerAlt /> {studentData.contact.location}</p>
            <p><FaLinkedin /> <a href={studentData.links.linkedin} target="_blank" rel="noopener noreferrer">LinkedIn</a></p>
            <p><FaGithub /> <a href={studentData.links.github} target="_blank" rel="noopener noreferrer">GitHub</a></p>
          </div>
          
          <div className="profile-card skills">
            <h4><FaCode /> Skills</h4>
            <div className="skills-container">
              {studentData.skills.map((skill, index) => (
                <span key={index} className="skill-tag">{skill}</span>
              ))}
            </div>
          </div>
        </div>

        <div className="profile-right-column">
          <div className="profile-card about-me">
            <h4>About Me</h4>
            <p>{studentData.bio}</p>
          </div>

          <div className="profile-card experience">
            <h4><FaBriefcase /> Experience</h4>
            {studentData.experience.map((exp, index) => (
              <div key={index} className="experience-item">
                <h5>{exp.role}</h5>
                <h6>{exp.company} | {exp.duration}</h6>
                <p>{exp.description}</p>
              </div>
            ))}
          </div>

          <div className="profile-card projects">
            <h4>Projects</h4>
            {studentData.projects.map((proj, index) => (
              <div key={index} className="project-item">
                <h5>{proj.title}</h5>
                <p>{proj.description}</p>
                <div className="project-tech">
                  {proj.tech.map((tech, i) => <span key={i}>{tech}</span>)}
                </div>
                <a href={proj.link} target="_blank" rel="noopener noreferrer" className="project-link">View Project</a>
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
};

export default MyProfile;