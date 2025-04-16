import { useState } from 'react';
import './CategorySelector.css';

const CategorySelector = ({ onCategorySelected }) => {
  const [selectedCategory, setSelectedCategory] = useState(null);

  // Mock data - in a real app, this would come from an API
  const categories = [
    {
      id: 1,
      name: 'Real Estate',
      type: 'Marketplace',
      addOns: [
        { id: 1, name: 'Photo Gallery', price: 5 },
        { id: 2, name: 'Virtual Tour', price: 15 },
        { id: 3, name: 'Featured Listing', price: 10 }
      ],
      packages: [
        { id: 1, name: 'Premium Package', price: 50, includes: ['Photo Gallery', 'Featured Listing', '30 days'] },
        { id: 2, name: 'Basic Package', price: 30, includes: ['Photo Gallery', '7 days'] }
      ]
    },
    {
      id: 2,
      name: 'Vehicles',
      type: 'Marketplace',
      addOns: [
        { id: 4, name: 'Photo Gallery', price: 5 },
        { id: 5, name: '360° View', price: 20 },
        { id: 6, name: 'Featured Listing', price: 10 }
      ],
      packages: [
        { id: 3, name: 'Premium Package', price: 45, includes: ['Photo Gallery', 'Featured Listing', '30 days'] },
        { id: 4, name: 'Basic Package', price: 25, includes: ['Photo Gallery', '7 days'] }
      ]
    },
    {
      id: 3,
      name: 'Jobs',
      type: 'Services',
      addOns: [
        { id: 7, name: 'Company Logo', price: 8 },
        { id: 8, name: 'Featured Job', price: 12 },
        { id: 9, name: 'Application Form', price: 10 }
      ],
      packages: [
        { id: 5, name: 'Premium Package', price: 40, includes: ['Company Logo', 'Featured Job', '30 days'] },
        { id: 6, name: 'Basic Package', price: 20, includes: ['Company Logo', '7 days'] }
      ]
    }
  ];

  const handleCategorySelect = (categoryId) => {
    const category = categories.find(c => c.id === categoryId);
    setSelectedCategory(category);
    if (onCategorySelected) {
      onCategorySelected(category);
    }
  };

  return (
    <div className="category-selector">
      <h2>Select Category</h2>
      <div className="categories-grid">
        {categories.map(category => (
          <div
            key={category.id}
            className={`category-card ${selectedCategory?.id === category.id ? 'selected' : ''}`}
            onClick={() => handleCategorySelect(category.id)}
          >
            <h3>{category.name}</h3>
            <p className="category-type">{category.type}</p>
            <div className="category-features">
              <div className="add-ons">
                <h4>Add-ons Available</h4>
                <ul>
                  {category.addOns.map(addOn => (
                    <li key={addOn.id}>
                      <span>{addOn.name}</span>
                      <span className="price">${addOn.price}</span>
                    </li>
                  ))}
                </ul>
              </div>
              <div className="packages">
                <h4>Packages</h4>
                <ul>
                  {category.packages.map(pkg => (
                    <li key={pkg.id}>
                      <span>{pkg.name}</span>
                      <span className="price">${pkg.price}</span>
                    </li>
                  ))}
                </ul>
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default CategorySelector; 