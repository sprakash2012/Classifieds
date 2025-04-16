import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import './Categories.css';

const Categories = () => {
  const navigate = useNavigate();
  const [showAddModal, setShowAddModal] = useState(false);
  const [currentIndustry, setCurrentIndustry] = useState('');
  const [newCategoryName, setNewCategoryName] = useState('');
  const [newCategoryIcon, setNewCategoryIcon] = useState('');
  const [categories, setCategories] = useState({
    'Real Estate': [
      { id: '1', name: 'For Sale – Residential', icon: '🏠' },
      { id: '2', name: 'For Sale – Commercial', icon: '🏢' },
      { id: '3', name: 'For Sale – Land', icon: '🌳' },
      { id: '4', name: 'For Rent – Residential', icon: '🔑' },
      { id: '5', name: 'For Rent – Vacation Properties', icon: '🏖️' },
      { id: '6', name: 'For Rent – Commercial', icon: '🏢' },
      { id: '7', name: 'Real Estate Wanted', icon: '🔍' },
      { id: '8', name: 'Roommates / Shared Housing', icon: '👥' },
      { id: '9', name: 'Time Shares', icon: '⏰' },
      { id: '10', name: 'Parking / Storage', icon: '🅿️' },
      { id: '11', name: 'Open Houses', icon: '🏡' },
      { id: '12', name: 'Real Estate Services', icon: '👨‍💼' },
      { id: '13', name: 'Auctions / Foreclosures', icon: '🔨' }
    ],
    'Vehicles': [
      { id: '14', name: 'Cars for Sale', icon: '🚗' },
      { id: '15', name: 'Trucks / SUVs', icon: '🚚' },
      { id: '16', name: 'Motorcycles', icon: '🏍️' },
      { id: '17', name: 'RVs / Campers', icon: '🚐' },
      { id: '18', name: 'Boats / Watercraft', icon: '🚤' },
      { id: '19', name: 'Commercial Vehicles', icon: '🚛' },
      { id: '20', name: 'Vehicle Parts / Accessories', icon: '🔧' },
      { id: '21', name: 'Vehicle Wanted', icon: '🔍' },
      { id: '22', name: 'Vehicle Rentals', icon: '🔑' },
      { id: '23', name: 'Trailers', icon: '🚛' },
      { id: '24', name: 'Classic & Antique Cars', icon: '🏎️' }
    ],
    'Jobs & Employment': [
      { id: '25', name: 'Full-Time Jobs', icon: '💼' },
      { id: '26', name: 'Part-Time Jobs', icon: '⏰' },
      { id: '27', name: 'Temporary / Seasonal Jobs', icon: '📅' },
      { id: '28', name: 'Remote / Work From Home', icon: '🏠' },
      { id: '29', name: 'Internships', icon: '🎓' },
      { id: '30', name: 'Government Jobs', icon: '🏛️' },
      { id: '31', name: 'Executive / Management', icon: '👔' },
      { id: '32', name: 'Skilled Trades / Construction', icon: '🔨' },
      { id: '33', name: 'Healthcare', icon: '🏥' },
      { id: '34', name: 'Education / Teaching', icon: '📚' },
      { id: '35', name: 'Technology / IT', icon: '💻' },
      { id: '36', name: 'Hospitality / Food Service', icon: '🍽️' },
      { id: '37', name: 'Transportation / Delivery', icon: '🚚' },
      { id: '38', name: 'Customer Service / Call Center', icon: '📞' },
      { id: '39', name: 'Retail / Sales', icon: '🛍️' },
      { id: '40', name: 'Job Wanted', icon: '🔍' },
      { id: '41', name: 'Employment Agencies', icon: '🤝' },
      { id: '42', name: 'Training / Certification', icon: '📜' }
    ],
    'Services': [
      { id: '43', name: 'Home Improvement / Contractors', icon: '🔨' },
      { id: '44', name: 'Cleaning Services', icon: '🧹' },
      { id: '45', name: 'Landscaping / Lawn Care', icon: '🌿' },
      { id: '46', name: 'Childcare / Nanny', icon: '👶' },
      { id: '47', name: 'Elder Care / Home Health', icon: '👵' },
      { id: '48', name: 'Legal Services', icon: '⚖️' },
      { id: '49', name: 'Financial Services', icon: '💰' },
      { id: '50', name: 'Computer / IT Services', icon: '💻' },
      { id: '51', name: 'Moving / Hauling', icon: '🚚' },
      { id: '52', name: 'Automotive Repair', icon: '🔧' },
      { id: '53', name: 'Beauty / Wellness Services', icon: '💆' },
      { id: '54', name: 'Tutoring / Lessons', icon: '📚' },
      { id: '55', name: 'Pet Services', icon: '🐾' },
      { id: '56', name: 'Photography / Videography', icon: '📸' },
      { id: '57', name: 'Event Planning', icon: '🎉' },
      { id: '58', name: 'Security Services', icon: '🛡️' }
    ],
    'For Sale': [
      { id: '59', name: 'Appliances', icon: '🔌' },
      { id: '60', name: 'Furniture', icon: '🪑' },
      { id: '61', name: 'Electronics', icon: '📱' },
      { id: '62', name: 'Computers / Laptops', icon: '💻' },
      { id: '63', name: 'Phones / Tablets', icon: '📱' },
      { id: '64', name: 'Clothing / Accessories', icon: '👕' },
      { id: '65', name: 'Jewelry / Watches', icon: '💎' },
      { id: '66', name: 'Sporting Goods', icon: '⚽' },
      { id: '67', name: 'Musical Instruments', icon: '🎸' },
      { id: '68', name: 'Books / Media', icon: '📚' },
      { id: '69', name: 'Baby & Kids Items', icon: '👶' },
      { id: '70', name: 'Collectibles / Antiques', icon: '🏺' },
      { id: '71', name: 'Tools / Equipment', icon: '🔧' },
      { id: '72', name: 'Office Supplies', icon: '📎' },
      { id: '73', name: 'Farm / Garden', icon: '🌱' },
      { id: '74', name: 'Free Items', icon: '🎁' },
      { id: '75', name: 'Miscellaneous', icon: '📦' },
      { id: '76', name: 'Bulk / Wholesale Lots', icon: '📦' }
    ],
    'Pets': [
      { id: '77', name: 'Dogs for Sale', icon: '🐶' },
      { id: '78', name: 'Cats for Sale', icon: '🐱' },
      { id: '79', name: 'Exotic Animals', icon: '🦜' },
      { id: '80', name: 'Livestock / Farm Animals', icon: '🐄' },
      { id: '81', name: 'Pet Supplies / Accessories', icon: '🦴' },
      { id: '82', name: 'Pet Adoption / Rescue', icon: '🏠' },
      { id: '83', name: 'Lost & Found Pets', icon: '🔍' },
      { id: '84', name: 'Pet Services / Grooming', icon: '✂️' },
      { id: '85', name: 'Pet Boarding / Sitting', icon: '🏡' }
    ],
    'Announcements': [
      { id: '81', name: 'Events', icon: '📅' },
      { id: '82', name: 'Births', icon: '👶' },
      { id: '83', name: 'Deaths', icon: '⚰️' },
      { id: '84', name: 'Public Notices', icon: '📢' }
    ],
    'Personals & Community': [
      { id: '85', name: 'Personals (Dating, Casual, etc.)', icon: '❤️' },
      { id: '86', name: 'Volunteers / Charities', icon: '🤝' },
      { id: '87', name: 'Support Groups', icon: '👥' },
      { id: '88', name: 'Local Meetups', icon: '🎭' },
      { id: '89', name: 'Rideshare / Carpool', icon: '🚗' },
      { id: '90', name: 'Missed Connections', icon: '🔍' }
    ],
    'Business & Commercial': [
      { id: '91', name: 'B2B Products for Sale', icon: '📦' },
      { id: '92', name: 'Commercial Services', icon: '💼' },
      { id: '93', name: 'Business Opportunities', icon: '💡' },
      { id: '94', name: 'Franchises for Sale', icon: '🏪' },
      { id: '95', name: 'Office Space for Rent', icon: '🏢' },
      { id: '96', name: 'Equipment Leasing', icon: '🖨️' },
      { id: '97', name: 'Liquidation / Surplus Sales', icon: '💰' },
      { id: '98', name: 'Industrial Equipment', icon: '⚙️' },
      { id: '99', name: 'Manufacturing / Warehousing', icon: '🏭' }
    ],
    'Education & Training': [
      { id: '95', name: 'Online Courses', icon: '💻' },
      { id: '96', name: 'In-Person Classes', icon: '📚' },
      { id: '97', name: 'Test Prep / Tutoring', icon: '✏️' },
      { id: '98', name: 'Certification Programs', icon: '📜' },
      { id: '99', name: 'Workshops / Seminars', icon: '🎓' },
      { id: '100', name: 'Education Services', icon: '👨‍🏫' },
      { id: '101', name: 'Driving Schools', icon: '🚗' },
      { id: '102', name: 'Language Lessons', icon: '🗣️' }
    ],
    'Travel & Leisure': [
      { id: '99', name: 'Vacation Rentals', icon: '🏖️' },
      { id: '100', name: 'Travel Packages', icon: '✈️' },
      { id: '101', name: 'Cruises', icon: '🛳️' },
      { id: '102', name: 'Timeshare Rentals', icon: '⏰' },
      { id: '103', name: 'Adventure Experiences', icon: '🏔️' },
      { id: '104', name: 'Local Attractions', icon: '🏛️' },
      { id: '105', name: 'Tours & Guides', icon: '🗺️' }
    ],
    'Garage & Yard Sales': [
      { id: '103', name: 'Individual Sales', icon: '🏠' },
      { id: '104', name: 'Multi-Family Sales', icon: '👨‍👩‍👧‍👦' },
      { id: '105', name: 'Estate Sales', icon: '🏛️' },
      { id: '106', name: 'Community / Neighborhood Sales', icon: '🏘️' },
      { id: '107', name: 'Rummage Sales', icon: '🛍️' }
    ],
    'Financial & Legal': [
      { id: '107', name: 'Loans & Credit', icon: '💳' },
      { id: '108', name: 'Accounting / Bookkeeping', icon: '📊' },
      { id: '109', name: 'Bankruptcy / Debt Relief', icon: '💸' },
      { id: '110', name: 'Tax Services', icon: '📝' },
      { id: '111', name: 'Insurance', icon: '🛡️' },
      { id: '112', name: 'Legal Help', icon: '⚖️' },
      { id: '113', name: 'Business Incorporation', icon: '🏢' }
    ],
    'Industrial / Equipment': [
      { id: '111', name: 'Heavy Machinery', icon: '🚜' },
      { id: '112', name: 'Tools / Power Equipment', icon: '🔧' },
      { id: '113', name: 'Building Materials', icon: '🏗️' },
      { id: '114', name: 'Farming Equipment', icon: '🌾' },
      { id: '115', name: 'Commercial Vehicles', icon: '🚛' },
      { id: '116', name: 'Warehousing Supplies', icon: '📦' }
    ],
    'Regional / Custom': [
      { id: '115', name: 'Local Only', icon: '📍' },
      { id: '116', name: 'Regional Deals', icon: '🌎' },
      { id: '117', name: 'Faith-Based Listings', icon: '🙏' },
      { id: '118', name: 'Native Language Listings', icon: '🗣️' },
      { id: '119', name: 'Military / Veterans', icon: '🎖️' },
      { id: '120', name: 'College / Student Listings', icon: '🎓' }
    ]
  });

  const handleAdd = (industry) => {
    setCurrentIndustry(industry);
    setShowAddModal(true);
  };

  const handleAddSubmit = () => {
    if (newCategoryName && newCategoryIcon) {
      const newId = Date.now().toString();
      setCategories(prev => ({
        ...prev,
        [currentIndustry]: [...prev[currentIndustry], { 
          id: newId, 
          name: newCategoryName, 
          icon: newCategoryIcon 
        }]
      }));
      setShowAddModal(false);
      setNewCategoryName('');
      setNewCategoryIcon('');
    }
  };

  return (
    <div className="order-system-categories">
      <div className="categories-header">
        <h2>Categories</h2>
      </div>

      <div className="categories-grid">
        {Object.entries(categories)
          .sort(([industryA], [industryB]) => industryA.localeCompare(industryB))
          .map(([industry, items]) => (
          <div key={industry} className="industry-section">
            <div className="industry-header">
              <h3>{industry}</h3>
              <button 
                onClick={() => handleAdd(industry)}
                className="add-button"
              >
                Add Category
              </button>
            </div>
            <div className="category-list">
              {items.map(category => (
                <div key={category.id} className="category-item">
                  <span className="category-icon">{category.icon}</span>
                  <span className="category-name">{category.name}</span>
                </div>
              ))}
            </div>
          </div>
        ))}
      </div>

      {showAddModal && (
        <div className="modal-overlay">
          <div className="modal">
            <h3>Add New Category</h3>
            <div className="modal-content">
              <div className="form-group">
                <label>Category Name:</label>
                <input
                  type="text"
                  value={newCategoryName}
                  onChange={(e) => setNewCategoryName(e.target.value)}
                  placeholder="Enter category name"
                />
              </div>
              <div className="form-group">
                <label>Category Icon (Emoji):</label>
                <input
                  type="text"
                  value={newCategoryIcon}
                  onChange={(e) => setNewCategoryIcon(e.target.value)}
                  placeholder="Enter emoji icon"
                />
              </div>
              <div className="modal-buttons">
                <button onClick={() => setShowAddModal(false)}>Cancel</button>
                <button onClick={handleAddSubmit}>Add</button>
              </div>
            </div>
          </div>
        </div>
      )}

      <div className="categories-actions">
        <button onClick={() => navigate(-1)} className="cancel-button">
          Cancel
        </button>
        <button onClick={() => navigate(-1)} className="save-button">
          Save Changes
        </button>
      </div>
    </div>
  );
};

export default Categories; 