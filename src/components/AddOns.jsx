import { useState } from 'react';
import './AddOns.css';

const AddOns = ({ onClose }) => {
  const [selectedType, setSelectedType] = useState('all');

  const addOns = {
    visual: {
      title: 'Visual Add-Ons',
      description: 'Enhance your listings with visual elements',
      items: [
        { id: 1, name: 'Map with Nearby Amenities', description: 'Interactive map showing nearby schools, restaurants, and amenities', icon: '🗺️' },
        { id: 2, name: 'Agent or Broker Branding', description: 'Custom branding for real estate professionals', icon: '🏢' },
        { id: 3, name: 'Vehicle Specs Display', description: 'Detailed vehicle specifications and features', icon: '🚗' },
      ]
    },
    interactive: {
      title: 'Interactive Add-Ons',
      description: 'Add interactive elements to engage with your audience',
      items: [
        { id: 4, name: 'Apply Now Button', description: 'Direct application functionality for job listings', icon: '📝' },
        { id: 5, name: 'Open House Scheduling', description: 'Integrated scheduling system for open house events', icon: '📅' },
        { id: 6, name: 'Resume Access Portal', description: 'Access to candidate resumes for job listings', icon: '📄' },
      ]
    },
    notification: {
      title: 'Notification Add-Ons',
      description: 'Keep your audience informed with automated notifications',
      items: [
        { id: 7, name: 'Job Alert Inclusion', description: 'Automatic inclusion in job alert notifications', icon: '🔔' },
      ]
    },
    service: {
      title: 'Service Add-Ons',
      description: 'Professional services to enhance your listings',
      items: [
        { id: 8, name: 'Ad Writing / Copy Editing', description: 'Professional ad writing and editing services', icon: '✍️' },
        { id: 9, name: 'Design Services', description: 'Premium ad layout design services', icon: '🎨' },
        { id: 10, name: 'Ad Translation Services', description: 'Professional translation services for ads', icon: '🌐' },
      ]
    },
    technical: {
      title: 'Technical Add-Ons',
      description: 'Advanced technical features for your listings',
      items: [
        { id: 11, name: 'Bulk Upload / API Access', description: 'Advanced bulk upload capabilities and API access', icon: '⚙️' },
        { id: 12, name: 'Account Management', description: 'Dedicated account management and concierge service', icon: '👥' },
      ]
    },
    privacy: {
      title: 'Privacy & Control Add-Ons',
      description: 'Protects advertiser data and gives control over visibility',
      items: [
        { id: 13, name: 'Anonymous Email Relay', description: 'Protect your email address with our secure relay service', icon: '✉️' },
        { id: 14, name: 'Phone Number Masking', description: 'Keep your phone number private with temporary numbers', icon: '📱' },
        { id: 15, name: 'Ad Expiry Notifications', description: 'Get notified when your ads are about to expire', icon: '⏰' },
        { id: 16, name: 'Content Moderation / Approval', description: 'Control who can view and interact with your ads', icon: '🔒' },
      ]
    },
    communication: {
      title: 'Contact & Communication Enhancements',
      description: 'Makes it easier for customers to reach the advertiser',
      items: [
        { id: 17, name: 'Call Tracking Number', description: 'Track and analyze incoming calls from your ads', icon: '📞' },
        { id: 18, name: 'Live Chat Widget', description: 'Real-time chat support for instant customer communication', icon: '💬' },
        { id: 19, name: 'SMS Contact Option', description: 'Enable text messaging for quick customer responses', icon: '📱' },
        { id: 20, name: 'Lead Form Integration', description: 'Customizable contact forms to capture customer information', icon: '📋' },
        { id: 21, name: 'Click-to-Call Button', description: 'One-click calling directly from your ad', icon: '📲' },
      ]
    },
    distribution: {
      title: 'Distribution & Syndication',
      description: 'Gets the ad published across more channels',
      items: [
        { id: 22, name: 'Syndication to Partner Sites', description: 'Automatically distribute your ad to our partner network', icon: '🔄' },
        { id: 23, name: 'Print + Digital Combo', description: 'Get both print and digital exposure for maximum reach', icon: '📰' },
        { id: 24, name: 'Social Media Boost', description: 'Amplify your ad across social media platforms', icon: '📱' },
        { id: 25, name: 'Newsletter Placement', description: 'Feature your ad in targeted email newsletters', icon: '📧' },
        { id: 26, name: 'Email Blasts to Targeted Segments', description: 'Reach specific customer segments with email campaigns', icon: '🎯' },
      ]
    },
    analytics: {
      title: 'Analytics & Tracking',
      description: 'Tools for the advertiser to monitor performance',
      items: [
        { id: 27, name: 'Click Tracking', description: 'Monitor and analyze user clicks on your ad', icon: '🖱️' },
        { id: 28, name: 'Email/Call Metrics', description: 'Track email opens and call duration analytics', icon: '📊' },
        { id: 29, name: 'Conversion Tracking', description: 'Measure ad performance and conversion rates', icon: '📈' },
        { id: 30, name: 'Performance Reports', description: 'Detailed analytics reports and insights', icon: '📑' },
        { id: 31, name: 'Heatmap or Engagement Metrics', description: 'Visualize user interaction patterns', icon: '🌡️' },
      ]
    }
  };

  const types = [
    { id: 'all', name: 'All Add-Ons' },
    { id: 'visual', name: 'Visual' },
    { id: 'interactive', name: 'Interactive' },
    { id: 'notification', name: 'Notifications' },
    { id: 'service', name: 'Services' },
    { id: 'technical', name: 'Technical' },
    { id: 'privacy', name: 'Privacy & Control' },
    { id: 'communication', name: 'Contact & Communication' },
    { id: 'distribution', name: 'Distribution & Syndication' },
    { id: 'analytics', name: 'Analytics & Tracking' },
  ];

  const getFilteredAddOns = () => {
    if (selectedType === 'all') {
      return Object.entries(addOns).map(([type, data]) => ({
        type,
        ...data
      }));
    }
    return [{ type: selectedType, ...addOns[selectedType] }];
  };

  return (
    <div className="add-ons">
      <div className="add-ons-header">
        <div className="header-content">
          <h2>Premium Add-Ons</h2>
          <p className="subtitle">Enhance your listings with premium features</p>
          <button className="close-button" onClick={onClose}>×</button>
        </div>
      </div>

      <div className="type-tabs">
        {types.map(type => (
          <button
            key={type.id}
            className={`type-tab ${selectedType === type.id ? 'active' : ''}`}
            onClick={() => setSelectedType(type.id)}
          >
            {type.name}
          </button>
        ))}
      </div>

      <div className="add-ons-content">
        {getFilteredAddOns().map(({ type, title, description, items }) => (
          <div key={type} className="add-on-section">
            <div className="section-header">
              <h3>{title}</h3>
              <p>{description}</p>
            </div>
            <div className="add-ons-grid">
              {items.map(item => (
                <div key={item.id} className="add-on-card">
                  <div className="add-on-icon">{item.icon}</div>
                  <div className="add-on-details">
                    <h4>{item.name}</h4>
                    <p>{item.description}</p>
                  </div>
                  <div className="add-on-actions">
                    <button className="add-button">Add to Listing</button>
                    <button className="info-button">Learn More</button>
                  </div>
                </div>
              ))}
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default AddOns; 