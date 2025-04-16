import { useState, useEffect } from 'react';
import './RateCard.css';

const RateCard = ({ onClose, category }) => {
  const [selectedType, setSelectedType] = useState(null);
  const [calculatedPrice, setCalculatedPrice] = useState(0);
  const [inputValues, setInputValues] = useState({});

  // Category to rate card mapping
  const categoryRateCards = {
    'Real Estate': 'columnInch',
    'Automotive': 'modular',
    'Jobs': 'performance',
    'Services': 'tiered',
    'General': 'flat',
    'Events': 'word',
    'Business': 'custom'
  };

  // Price calculation functions for each rate card type
  const calculatePrice = (type, values) => {
    switch (type) {
      case 'flat':
        return 25; // Base flat rate
      case 'word':
        return values.words ? Math.max(15, 15 + (values.words - 25) * 0.5) : 15;
      case 'line':
        return values.lines ? values.lines * 2.5 : 0;
      case 'modular':
        return values.modules ? values.modules.reduce((sum, module) => sum + module.price, 0) : 0;
      case 'columnInch':
        return values.columnInches ? values.columnInches * 15 : 0;
      case 'tiered':
        return values.package ? values.package.price : 0;
      case 'performance':
        return values.budget ? values.budget : 0;
      case 'custom':
        return values.customPrice ? values.customPrice : 0;
      default:
        return 0;
    }
  };

  useEffect(() => {
    // Set the default rate card type based on category
    if (category && categoryRateCards[category]) {
      setSelectedType(categoryRateCards[category]);
    }
  }, [category]);

  useEffect(() => {
    // Recalculate price when inputs change
    if (selectedType) {
      const newPrice = calculatePrice(selectedType, inputValues);
      setCalculatedPrice(newPrice);
    }
  }, [selectedType, inputValues]);

  const handleInputChange = (type, value) => {
    setInputValues(prev => ({
      ...prev,
      [type]: value
    }));
  };

  const rateCards = {
    flat: {
      title: 'Flat Rate',
      icon: '🧾',
      description: 'A fixed price is charged per ad, regardless of size, length, or content.',
      price: '$25',
      duration: '30 days',
      features: [
        'Unlimited words',
        'Up to 5 images',
        'Basic listing features',
        'Email support'
      ],
      useCases: [
        'Online-only platforms',
        'Short-term ads',
        'Self-service publishing'
      ]
    },
    word: {
      title: 'Word-Based',
      icon: '📏',
      description: 'Price is determined by the number of words in the ad.',
      basePrice: '$15',
      includedWords: '25 words',
      additionalCost: '$0.50 per word',
      features: [
        'Base rate for 25 words',
        'Additional words charged incrementally',
        'Optional headline charge',
        'Print and digital options'
      ],
      useCases: [
        'Print classifieds',
        'Obituaries',
        'Announcements'
      ]
    },
    line: {
      title: 'Line Rate',
      icon: '🧱',
      description: 'Ads are charged by the number of lines they occupy in print.',
      ratePerLine: '$2.50',
      fontSizes: ['8pt', '10pt', '12pt'],
      lineHeight: '12pt',
      minLines: '3',
      maxLines: '20',
      features: [
        'Standardized line height',
        'Multiple font size options',
        'Border and logo add-ons',
        'Print layout optimization'
      ],
      useCases: [
        'Print newspaper classifieds',
        'Legal notices',
        'Public announcements'
      ]
    },
    modular: {
      title: 'Modular (Box) Rates',
      icon: '📦',
      description: 'Ads are priced by predefined modular units, often used in print or hybrid formats.',
      moduleSizes: [
        { size: '1x1', price: '$50', dimensions: '1" x 1"' },
        { size: '2x1', price: '$100', dimensions: '2" x 1"' },
        { size: '2x2', price: '$200', dimensions: '2" x 2"' },
        { size: '4x2', price: '$400', dimensions: '4" x 2"' }
      ],
      colorOptions: {
        grayscale: 'Included',
        fullColor: '+$50 per module'
      },
      imageOptions: [
        'Logo placement included',
        'Additional images: +$25 each',
        'Custom image borders available'
      ],
      features: [
        'Predefined module sizes',
        'Flexible layout options',
        'Color upgrade options',
        'Image placement flexibility'
      ],
      useCases: [
        'Real estate ads',
        'Automotive listings',
        'Business service ads'
      ]
    },
    columnInch: {
      title: 'Column Inch Rates',
      icon: '📏',
      description: 'Pricing is based on the total column inches the ad occupies (Column width × ad height).',
      ratePerColumnInch: '$15',
      minSize: '2 inches',
      columnOptions: {
        single: 'Single Column',
        double: 'Double Column',
        triple: 'Triple Column'
      },
      dimensions: {
        width: '2 inches per column',
        height: 'Variable'
      },
      colorOptions: {
        grayscale: 'Included',
        fullColor: '+$5 per column inch'
      },
      placementOptions: [
        'Standard placement: Included',
        'Front of section: +$50',
        'Back page: +$75',
        'Premium position: +$100'
      ],
      features: [
        'Flexible sizing options',
        'Multiple column layouts',
        'Premium placement options',
        'Color upgrade available'
      ],
      useCases: [
        'Traditional print newspapers',
        'Business or service ads',
        'Local announcements'
      ]
    },
    tiered: {
      title: 'Tiered Packages',
      icon: '🧩',
      description: 'Predefined ad bundles that include different levels of exposure, features, and duration.',
      packages: [
        {
          name: 'Basic',
          price: '$29',
          duration: '30 days',
          features: [
            'Standard listing',
            'Up to 3 photos',
            'Basic formatting',
            'Email support'
          ],
          renewal: 'Auto-renew available',
          restrictions: 'No category restrictions'
        },
        {
          name: 'Silver',
          price: '$49',
          duration: '60 days',
          features: [
            'Enhanced listing',
            'Up to 5 photos',
            'Bold title',
            'Priority placement',
            'Phone support'
          ],
          renewal: 'Auto-renew with 10% discount',
          restrictions: 'No category restrictions'
        },
        {
          name: 'Gold',
          price: '$99',
          duration: '90 days',
          features: [
            'Premium listing',
            'Up to 10 photos',
            'Bold title + highlight',
            'Top placement',
            '24/7 support',
            'Social media sharing'
          ],
          renewal: 'Auto-renew with 15% discount',
          restrictions: 'No category restrictions'
        },
        {
          name: 'Premium',
          price: '$199',
          duration: '180 days',
          features: [
            'Featured listing',
            'Unlimited photos',
            'All formatting options',
            'Premium placement',
            'Dedicated support',
            'Social media boost',
            'Analytics dashboard'
          ],
          renewal: 'Auto-renew with 20% discount',
          restrictions: 'No category restrictions'
        }
      ],
      bulkDiscounts: {
        '3-5 ads': '10% off',
        '6-10 ads': '15% off',
        '11+ ads': '20% off'
      },
      features: [
        'Multiple package options',
        'Flexible durations',
        'Auto-renewal options',
        'Bulk purchase discounts',
        'Category-specific packages'
      ],
      useCases: [
        'Digital classifieds',
        'Online marketplaces',
        'Job boards',
        'Service directories'
      ]
    },
    performance: {
      title: 'Performance-Based',
      icon: '📢',
      description: 'Ad costs are calculated based on how many users click (CPC) or take action (CPA), mostly for digital-only platforms.',
      pricingModels: [
        {
          name: 'Cost Per Click (CPC)',
          rate: '$0.50',
          minBudget: '$50',
          maxBudget: '$5000',
          features: [
            'Pay only for actual clicks',
            'Real-time click tracking',
            'Daily budget control',
            'Click fraud protection'
          ]
        },
        {
          name: 'Cost Per Action (CPA)',
          rate: '$5.00',
          minBudget: '$100',
          maxBudget: '$10000',
          features: [
            'Pay only for completed actions',
            'Action tracking and verification',
            'Conversion optimization',
            'Performance analytics'
          ]
        }
      ],
      campaignOptions: {
        duration: [
          '7 days',
          '14 days',
          '30 days',
          'Custom duration'
        ],
        budgetCaps: {
          daily: '$1000',
          total: '$5000'
        },
        targetMetrics: [
          'Click-through rate (CTR)',
          'Conversion rate',
          'Lead generation',
          'Application submissions',
          'Event registrations'
        ],
        tracking: [
          'UTM parameters',
          'Conversion pixels',
          'Event tracking',
          'Custom tracking tags'
        ]
      },
      features: [
        'Pay only for results',
        'Flexible budget control',
        'Real-time performance tracking',
        'Advanced targeting options',
        'Automated optimization'
      ],
      useCases: [
        'Job boards',
        'Marketplace upsells',
        'Event promotion',
        'Lead generation',
        'Application tracking'
      ]
    },
    custom: {
      title: 'Custom Quote',
      icon: '🧠',
      description: 'Ad rates are manually calculated by a sales rep based on client requirements (e.g., size, placement, enhancements).',
      quoteForm: {
        salesRep: 'John Smith',
        clientName: 'Enter client name',
        price: '$0.00',
        quoteRef: 'QUOTE-',
        validity: '30 days',
        addOns: [
          'Premium placement',
          'Custom design',
          'Extended duration',
          'Additional features'
        ]
      },
      features: [
        'Personalized pricing',
        'Flexible terms',
        'Custom add-ons',
        'Dedicated account manager',
        'Priority support'
      ],
      useCases: [
        'Large or enterprise clients',
        'Premium placements',
        'Custom print campaigns',
        'Special promotions',
        'Bulk orders'
      ]
    }
  };

  return (
    <div className="rate-card-page">
      <div className="page-header">
        <h1>Rate Cards</h1>
        <p>Category: {category}</p>
        <button className="close-button" onClick={onClose}>×</button>
      </div>

      <div className="rate-card-selector">
        {Object.entries(rateCards).map(([type, card]) => (
          <button
            key={type}
            className={`rate-card-option ${selectedType === type ? 'active' : ''}`}
            onClick={() => setSelectedType(type)}
          >
            <span className="option-icon">{card.icon}</span>
            <span className="option-title">{card.title}</span>
          </button>
        ))}
      </div>

      <div className="rate-card-display">
        {selectedType && (
          <div className="rate-card">
            <div className="card-header">
              <h2>{rateCards[selectedType].title}</h2>
              <p className="description">{rateCards[selectedType].description}</p>
            </div>

            <div className="price-calculator">
              <h3>Price Calculator</h3>
              <div className="calculated-price">
                <span className="label">Estimated Price:</span>
                <span className="price">${calculatedPrice.toFixed(2)}</span>
              </div>

              {selectedType === 'word' && (
                <div className="input-group">
                  <label>Number of Words</label>
                  <input
                    type="number"
                    value={inputValues.words || ''}
                    onChange={(e) => handleInputChange('words', parseInt(e.target.value))}
                    className="form-input"
                    placeholder="Enter word count"
                  />
                </div>
              )}

              {selectedType === 'line' && (
                <div className="input-group">
                  <label>Number of Lines</label>
                  <input
                    type="number"
                    value={inputValues.lines || ''}
                    onChange={(e) => handleInputChange('lines', parseInt(e.target.value))}
                    className="form-input"
                    placeholder="Enter line count"
                  />
                </div>
              )}

              {selectedType === 'columnInch' && (
                <div className="input-group">
                  <label>Column Inches</label>
                  <input
                    type="number"
                    value={inputValues.columnInches || ''}
                    onChange={(e) => handleInputChange('columnInches', parseInt(e.target.value))}
                    className="form-input"
                    placeholder="Enter column inches"
                  />
                </div>
              )}

              {/* Add similar input groups for other rate card types */}
            </div>

            <div className="features">
              <h3>Features</h3>
              <ul>
                {rateCards[selectedType].features.map((feature, index) => (
                  <li key={index}>{feature}</li>
                ))}
              </ul>
            </div>

            <div className="use-cases">
              <h3>Best For</h3>
              <ul>
                {rateCards[selectedType].useCases.map((useCase, index) => (
                  <li key={index}>{useCase}</li>
                ))}
              </ul>
            </div>

            <button className="select-button" onClick={() => onClose(calculatedPrice)}>
              Select This Rate Card
            </button>
          </div>
        )}
      </div>
    </div>
  );
};

export default RateCard; 