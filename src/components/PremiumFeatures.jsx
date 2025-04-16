import { useState } from 'react';
import './PremiumFeatures.css';

const PremiumFeatures = () => {
  const [selectedCategory, setSelectedCategory] = useState('all');

  const features = {
    realEstate: [
      { id: 1, name: 'Map with Nearby Amenities', description: 'Interactive map showing nearby schools, restaurants, and amenities' },
      { id: 2, name: 'Agent or Broker Branding', description: 'Custom branding for real estate professionals' },
      { id: 3, name: 'Open House Scheduling', description: 'Integrated scheduling system for open house events' },
    ],
    jobs: [
      { id: 4, name: 'Apply Now Button', description: 'Direct application functionality for job listings' },
      { id: 5, name: 'Job Alert Inclusion', description: 'Automatic inclusion in job alert notifications' },
      { id: 6, name: 'Resume Access', description: 'Access to candidate resumes for job listings' },
    ],
    auto: [
      { id: 7, name: 'Vehicle Specs', description: 'Detailed vehicle specifications and features' },
    ],
    services: [
      { id: 8, name: 'Ad Writing / Copy Editing', description: 'Professional ad writing and editing services' },
      { id: 9, name: 'Design Services', description: 'Premium ad layout design services' },
      { id: 10, name: 'Account Management', description: 'Dedicated account management and concierge service' },
      { id: 11, name: 'Bulk Upload / API Access', description: 'Advanced bulk upload capabilities and API access' },
      { id: 12, name: 'Ad Translation Services', description: 'Professional translation services for ads' },
    ],
  };

  const categories = [
    { id: 'all', name: 'All Features' },
    { id: 'realEstate', name: 'Real Estate' },
    { id: 'jobs', name: 'Jobs' },
    { id: 'auto', name: 'Auto' },
    { id: 'services', name: 'Services' },
  ];

  const getFilteredFeatures = () => {
    if (selectedCategory === 'all') {
      return Object.values(features).flat();
    }
    return features[selectedCategory] || [];
  };

  return (
    <div className="premium-features">
      <div className="features-header">
        <h2>Premium Features</h2>
        <p className="subtitle">Enhance your listings with our premium features</p>
      </div>

      <div className="category-tabs">
        {categories.map(category => (
          <button
            key={category.id}
            className={`category-tab ${selectedCategory === category.id ? 'active' : ''}`}
            onClick={() => setSelectedCategory(category.id)}
          >
            {category.name}
          </button>
        ))}
      </div>

      <div className="features-grid">
        {getFilteredFeatures().map(feature => (
          <div key={feature.id} className="feature-card">
            <div className="feature-icon">
              {feature.id <= 3 ? '🏠' : 
               feature.id <= 6 ? '💼' : 
               feature.id === 7 ? '🚗' : '✨'}
            </div>
            <h3>{feature.name}</h3>
            <p>{feature.description}</p>
            <button className="add-feature-button">
              Add to Listing
            </button>
          </div>
        ))}
      </div>
    </div>
  );
};

export default PremiumFeatures; 