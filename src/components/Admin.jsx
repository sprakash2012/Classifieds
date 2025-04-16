import { useState } from 'react';
import './Admin.css';

const Admin = ({ onClose }) => {
  return (
    <div className="admin-modal">
      <div className="admin-content">
        <div className="admin-header">
          <h2>About This Application</h2>
          <button className="close-button" onClick={onClose}>×</button>
        </div>
        <div className="admin-body">
          <h3>Classified Ad System</h3>
          <p>A modern web application for creating and managing classified advertisements with AI-powered content generation capabilities.</p>

          <h4>Overview</h4>
          <p>The Classified Ad System is a React-based web application that streamlines the process of creating classified advertisements. It features a step-by-step wizard interface that guides users through the process of selecting publications, categories, and creating ad content with the help of AI.</p>

          <h4>Features</h4>
          <h5>1. Publication Selection</h5>
          <ul>
            <li>Browse and select from a list of available publications</li>
            <li>Multi-select capability for placing ads in multiple publications</li>
            <li>Visual feedback for selected publications</li>
          </ul>

          <h5>2. Category Selection</h5>
          <ul>
            <li>Hierarchical category browsing</li>
            <li>Search functionality for quick category finding</li>
            <li>Clear visual indication of selected category</li>
          </ul>

          <h5>3. Ad Content Creation</h5>
          <ul>
            <li>Integrated HTML editor with live preview</li>
            <li>Dark/Light mode toggle for comfortable editing</li>
            <li>AI-powered content generation using OpenAI's GPT-3.5</li>
            <li>Real-time preview of HTML content</li>
          </ul>

          <h5>4. Settings Management</h5>
          <ul>
            <li>Secure API key management for OpenAI integration</li>
            <li>API key validation and testing</li>
            <li>Built-in chat interface for testing API connectivity</li>
          </ul>

          <h4>Technical Stack</h4>
          <ul>
            <li><strong>Frontend</strong>: React with Vite</li>
            <li><strong>Styling</strong>: CSS with CSS Variables for theming</li>
            <li><strong>AI Integration</strong>: OpenAI GPT-3.5 API</li>
            <li><strong>State Management</strong>: React Hooks (useState, useEffect)</li>
          </ul>
        </div>
      </div>
    </div>
  );
};

export default Admin; 