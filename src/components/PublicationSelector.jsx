import { useState } from 'react';
import './PublicationSelector.css';

const PublicationSelector = ({ onSelect, onClose, activeTab }) => {
  const [selectedTab, setSelectedTab] = useState(activeTab);

  const printPublications = [
    { id: 1, name: 'Daily News', type: 'newspaper' },
    { id: 2, name: 'Weekly Gazette', type: 'newspaper' },
    { id: 3, name: 'Monthly Magazine', type: 'magazine' },
    { id: 4, name: 'City Times', type: 'newspaper' },
  ];

  const webPublications = [
    { id: 5, name: 'NewsOnline.com', type: 'website' },
    { id: 6, name: 'LocalNews.net', type: 'website' },
    { id: 7, name: 'CityGuide.com', type: 'website' },
    { id: 8, name: 'CommunityHub.org', type: 'website' },
  ];

  const handlePublicationSelect = (publication) => {
    onSelect(publication);
  };

  return (
    <div className="publication-selector">
      <div className="selector-header">
        <h2>Select Publication</h2>
        <button className="close-button" onClick={onClose}>×</button>
      </div>
      
      <div className="tab-container">
        <button 
          className={`tab-button ${selectedTab === 'print' ? 'active' : ''}`}
          onClick={() => setSelectedTab('print')}
        >
          Print Products
        </button>
        <button 
          className={`tab-button ${selectedTab === 'web' ? 'active' : ''}`}
          onClick={() => setSelectedTab('web')}
        >
          Websites
        </button>
      </div>

      <div className="publications-list">
        {selectedTab === 'print' ? (
          <div className="print-publications">
            <h3>Newspapers & Magazines</h3>
            <div className="publication-grid">
              {printPublications.map((publication) => (
                <div 
                  key={publication.id}
                  className="publication-card"
                  onClick={() => handlePublicationSelect(publication)}
                >
                  <div className="publication-icon">
                    {publication.type === 'newspaper' ? '📰' : '📚'}
                  </div>
                  <div className="publication-name">{publication.name}</div>
                </div>
              ))}
            </div>
          </div>
        ) : (
          <div className="web-publications">
            <h3>Websites</h3>
            <div className="publication-grid">
              {webPublications.map((publication) => (
                <div 
                  key={publication.id}
                  className="publication-card"
                  onClick={() => handlePublicationSelect(publication)}
                >
                  <div className="publication-icon">🌐</div>
                  <div className="publication-name">{publication.name}</div>
                </div>
              ))}
            </div>
          </div>
        )}
      </div>
    </div>
  );
};

export default PublicationSelector; 