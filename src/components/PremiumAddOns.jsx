import { useState } from 'react';
import './PremiumAddOns.css';

const PremiumAddOns = ({ onClose }) => {
  const [selectedCategory, setSelectedCategory] = useState('all');

  const categories = {
    visibility: {
      title: "Visibility & Placement Upgrades",
      description: "These increase the ad's exposure.",
      icon: "🔝",
      items: [
        {
          name: "Top of Category / Featured Listing",
          description: "Get your ad featured at the top of category listings for maximum visibility.",
          icon: "⭐"
        },
        {
          name: "Homepage Spotlight",
          description: "Feature your ad prominently on the homepage to reach more viewers.",
          icon: "🏠"
        },
        {
          name: "Pinned Ad / Sticky Post",
          description: "Keep your ad pinned at the top of listings for extended visibility.",
          icon: "📌"
        },
        {
          name: "Category Highlight / Bolded Ad",
          description: "Make your ad stand out with bold text and category highlighting.",
          icon: "✨"
        },
        {
          name: "Search Boost / Promoted Placement",
          description: "Increase your ad's visibility in search results and promoted sections.",
          icon: "🔍"
        },
        {
          name: "Map Placement",
          description: "Get featured on location-based maps for better local exposure.",
          icon: "🗺️"
        },
        {
          name: "Multiple Category Placement",
          description: "Post your ad in multiple relevant categories to reach more audiences.",
          icon: "📋"
        },
        {
          name: "Repost / Auto-Renewal",
          description: "Automatically renew or repost your ad to maintain visibility.",
          icon: "🔄"
        },
        {
          name: "Rush Posting / Same-Day Publishing",
          description: "Get your ad published immediately for urgent listings.",
          icon: "⚡"
        }
      ]
    },
    visual: {
      title: "Design & Visual Enhancements",
      description: "These improve how the ad appears to users.",
      icon: "🎨",
      items: [
        {
          name: "Photo Uploads",
          description: "Extra or premium slots for additional photos to showcase your listing.",
          icon: "📸"
        },
        {
          name: "Video Upload",
          description: "Add video content to make your listing more engaging and informative.",
          icon: "🎥"
        },
        {
          name: "Larger Font / Bold Text",
          description: "Make your ad stand out with larger fonts and bold text options.",
          icon: "🔠"
        },
        {
          name: "Background Color Highlighting",
          description: "Add custom background colors to highlight important sections of your ad.",
          icon: "🎨"
        },
        {
          name: "Border or Frame",
          description: "Add decorative borders or frames to make your ad more visually appealing.",
          icon: "🖼️"
        },
        {
          name: "Custom Fonts / Templates",
          description: "Access premium fonts and templates to create a unique look for your ad.",
          icon: "📝"
        },
        {
          name: "Animated or Rotating Ad",
          description: "Create eye-catching animated or rotating ads to grab attention.",
          icon: "🔄"
        },
        {
          name: "Custom Logo or Branding",
          description: "Add your company logo and custom branding elements to your ad.",
          icon: "🏢"
        }
      ]
    },
    interactive: {
      title: 'Interactive Add-Ons',
      description: 'Add interactive elements to engage with your audience',
      icon: '🔄',
      items: [
        { name: 'Apply Now Button', description: 'Direct application functionality for job listings', icon: '📝' },
        { name: 'Open House Scheduling', description: 'Integrated scheduling system for open house events', icon: '📅' },
        { name: 'Resume Access Portal', description: 'Access to candidate resumes for job listings', icon: '📄' },
      ]
    },
    duration: {
      title: 'Duration-Based Add-Ons',
      description: 'Controls how long the ad runs or how often it\'s refreshed',
      icon: '📆',
      items: [
        { name: 'Extended Run Time', description: 'Extend your ad visibility with 30, 60, or 90-day options', icon: '⏳' },
        { name: 'Auto-Bump', description: 'Automatically refresh your ad to the top of listings', icon: '🔄' },
        { name: 'Renewal Reminders', description: 'Get notified when it\'s time to renew your ad', icon: '🔔' },
        { name: 'Scheduled Posting', description: 'Schedule your ad to post later or on a specific date', icon: '📅' },
      ]
    },
    analytics: {
      title: 'Analytics & Tracking',
      description: 'Tools for the advertiser to monitor performance',
      icon: '📊',
      items: [
        { name: 'Click Tracking', description: 'Monitor and analyze user clicks on your ad', icon: '🖱️' },
        { name: 'Email/Call Metrics', description: 'Track email opens and call duration analytics', icon: '📊' },
        { name: 'Conversion Tracking', description: 'Measure ad performance and conversion rates', icon: '📈' },
        { name: 'Performance Reports', description: 'Detailed analytics reports and insights', icon: '📑' },
        { name: 'Heatmap or Engagement Metrics', description: 'Visualize user interaction patterns', icon: '🌡️' },
      ]
    },
    distribution: {
      title: 'Distribution & Syndication',
      description: 'Gets the ad published across more channels',
      icon: '📡',
      items: [
        { name: 'Syndication to Partner Sites', description: 'Automatically distribute your ad to our partner network', icon: '🔄' },
        { name: 'Print + Digital Combo', description: 'Get both print and digital exposure for maximum reach', icon: '📰' },
        { name: 'Social Media Boost', description: 'Amplify your ad across social media platforms', icon: '📱' },
        { name: 'Newsletter Placement', description: 'Feature your ad in targeted email newsletters', icon: '📧' },
        { name: 'Email Blasts to Targeted Segments', description: 'Reach specific customer segments with email campaigns', icon: '🎯' },
      ]
    },
    privacy: {
      title: 'Privacy & Control',
      description: 'Protects advertiser data and gives control over visibility',
      icon: '🔒',
      items: [
        { name: 'Anonymous Email Relay', description: 'Protect your email address with our secure relay service', icon: '✉️' },
        { name: 'Phone Number Masking', description: 'Keep your phone number private with temporary numbers', icon: '📱' },
        { name: 'Ad Expiry Notifications', description: 'Get notified when your ads are about to expire', icon: '⏰' },
        { name: 'Content Moderation / Approval', description: 'Control who can view and interact with your ads', icon: '🔒' },
      ]
    },
    communication: {
      title: 'Contact & Communication',
      description: 'Makes it easier for customers to reach the advertiser',
      icon: '💬',
      items: [
        { name: 'Call Tracking Number', description: 'Track and analyze incoming calls from your ads', icon: '📞' },
        { name: 'Live Chat Widget', description: 'Real-time chat support for instant customer communication', icon: '💬' },
        { name: 'SMS Contact Option', description: 'Enable text messaging for quick customer responses', icon: '📱' },
        { name: 'Lead Form Integration', description: 'Customizable contact forms to capture customer information', icon: '📋' },
        { name: 'Click-to-Call Button', description: 'One-click calling directly from your ad', icon: '📲' },
      ]
    }
  };

  return (
    <div className="premium-add-ons">
      <div className="premium-header">
        <div className="header-content">
          <h1>Premium Add-Ons</h1>
          <p className="subtitle">Enhance your listings with powerful features</p>
          <button className="close-button" onClick={onClose}>×</button>
        </div>
      </div>

      <div className="filter-container">
        <div className="filter-header">
          <h2>Filter Add-Ons</h2>
        </div>
        <div className="filter-options">
          <button
            className={`filter-option ${selectedCategory === 'all' ? 'active' : ''}`}
            onClick={() => setSelectedCategory('all')}
          >
            All Add-Ons
          </button>
          {Object.entries(categories).map(([key, category]) => (
            <button
              key={key}
              className={`filter-option ${selectedCategory === key ? 'active' : ''}`}
              onClick={() => setSelectedCategory(key)}
            >
              {category.icon} {category.title}
            </button>
          ))}
        </div>
      </div>

      <div className="add-ons-content">
        {selectedCategory === 'all' ? (
          Object.entries(categories).map(([key, category]) => (
            <div key={key} className="category-section">
              <div className="category-header">
                <h2>{category.icon} {category.title}</h2>
                <p>{category.description}</p>
              </div>
              <div className="add-ons-grid">
                {category.items.map((item, index) => (
                  <div key={index} className="add-on-card">
                    <div className="add-on-icon">{item.icon}</div>
                    <div className="add-on-details">
                      <h3>{item.name}</h3>
                      <p>{item.description}</p>
                    </div>
                    <div className="add-on-actions">
                      <button className="info-button">Add to Rate Card</button>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          ))
        ) : (
          <div className="category-section">
            <div className="category-header">
              <h2>{categories[selectedCategory].icon} {categories[selectedCategory].title}</h2>
              <p>{categories[selectedCategory].description}</p>
            </div>
            <div className="add-ons-grid">
              {categories[selectedCategory].items.map((item, index) => (
                <div key={index} className="add-on-card">
                  <div className="add-on-icon">{item.icon}</div>
                  <div className="add-on-details">
                    <h3>{item.name}</h3>
                    <p>{item.description}</p>
                  </div>
                  <div className="add-on-actions">
                    <button className="info-button">Add to Rate Card</button>
                  </div>
                </div>
              ))}
            </div>
          </div>
        )}
      </div>
    </div>
  );
};

export default PremiumAddOns; 