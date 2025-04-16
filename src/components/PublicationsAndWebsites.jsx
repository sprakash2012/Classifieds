import { useState } from 'react';
import './PublicationsAndWebsites.css';

const PublicationsAndWebsites = () => {
  const [publications] = useState([
    {
      id: 1,
      name: 'Daily News',
      type: 'Newspaper',
      status: 'Active',
      website: 'https://dailynews.com'
    },
    {
      id: 2,
      name: 'Weekly Chronicle',
      type: 'Magazine',
      status: 'Active',
      website: 'https://weeklychronicle.com'
    },
    {
      id: 3,
      name: 'Business Times',
      type: 'Newspaper',
      status: 'Inactive',
      website: 'https://businesstimes.com'
    }
  ]);

  return (
    <div className="publications-container">
      <div className="publications-header">
        <h1>Publications and Websites</h1>
        <button className="add-publication-button">Add New Publication</button>
      </div>
      
      <div className="publications-table">
        <table>
          <thead>
            <tr>
              <th>Name</th>
              <th>Type</th>
              <th>Status</th>
              <th>Website</th>
              <th>Actions</th>
            </tr>
          </thead>
          <tbody>
            {publications.map(publication => (
              <tr key={publication.id}>
                <td>{publication.name}</td>
                <td>{publication.type}</td>
                <td>
                  <span className={`status-badge ${publication.status.toLowerCase()}`}>
                    {publication.status}
                  </span>
                </td>
                <td>
                  <a href={publication.website} target="_blank" rel="noopener noreferrer">
                    {publication.website}
                  </a>
                </td>
                <td>
                  <div className="action-buttons">
                    <button className="edit-button">Edit</button>
                    <button className="delete-button">Delete</button>
                  </div>
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </div>
  );
};

export default PublicationsAndWebsites; 