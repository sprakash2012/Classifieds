import { useState } from 'react';
import './RateCardTypes.css';

const RateCardTypes = () => {
  const [selectedType, setSelectedType] = useState('flat');
  const [flatRate, setFlatRate] = useState({
    amount: '',
    duration: '',
    includedAddOns: [],
    imageLimit: '',
    renewalFee: '',
    tax: '',
    description: 'A fixed price is charged per ad, regardless of size, length, or content. Often used for digital-only listings or simple categories like "Garage Sales."',
    useCases: [
      'Online-only platforms',
      'Short-term ads',
      'Self-service publishing'
    ]
  });

  const [wordBased, setWordBased] = useState({
    baseRate: '',
    includedWords: '',
    costPerAdditionalWord: '',
    maxWordLimit: '',
    freeWords: '',
    headlineCharge: '',
    description: 'Price is determined by the number of words in the ad. A base fee is charged for a minimum word count, and additional words are billed incrementally.',
    useCases: [
      'Print classifieds',
      'Obituaries',
      'Announcements'
    ]
  });

  const handleFlatRateChange = (field, value) => {
    setFlatRate(prev => ({
      ...prev,
      [field]: value
    }));
  };

  const handleWordBasedChange = (field, value) => {
    setWordBased(prev => ({
      ...prev,
      [field]: value
    }));
  };

  const handleAddOnToggle = (addOnId) => {
    setFlatRate(prev => ({
      ...prev,
      includedAddOns: prev.includedAddOns.includes(addOnId)
        ? prev.includedAddOns.filter(id => id !== addOnId)
        : [...prev.includedAddOns, addOnId]
    }));
  };

  return (
    <div className="rate-card-types">
      <div className="type-header">
        <h1>Rate Card Types</h1>
        <p>Configure different pricing structures for your listings</p>
      </div>

      <div className="type-selector">
        <button
          className={`type-option ${selectedType === 'flat' ? 'active' : ''}`}
          onClick={() => setSelectedType('flat')}
        >
          🧾 Flat Rate
        </button>
        <button
          className={`type-option ${selectedType === 'word' ? 'active' : ''}`}
          onClick={() => setSelectedType('word')}
        >
          📏 Word-Based
        </button>
      </div>

      {selectedType === 'flat' && (
        <div className="rate-card-form">
          <div className="form-section">
            <h2>Flat Rate Configuration</h2>
            <p className="type-description">{flatRate.description}</p>
            
            <div className="use-cases">
              <h3>Common Use Cases:</h3>
              <ul>
                {flatRate.useCases.map((useCase, index) => (
                  <li key={index}>{useCase}</li>
                ))}
              </ul>
            </div>

            <div className="form-fields">
              <div className="form-group">
                <label htmlFor="amount">Flat Rate Amount</label>
                <div className="input-group">
                  <span className="currency">$</span>
                  <input
                    type="number"
                    id="amount"
                    value={flatRate.amount}
                    onChange={(e) => handleFlatRateChange('amount', e.target.value)}
                    placeholder="Enter amount"
                    min="0"
                    step="0.01"
                  />
                </div>
              </div>

              <div className="form-group">
                <label htmlFor="duration">Duration (days)</label>
                <input
                  type="number"
                  id="duration"
                  value={flatRate.duration}
                  onChange={(e) => handleFlatRateChange('duration', e.target.value)}
                  placeholder="Enter duration"
                  min="1"
                />
              </div>

              <div className="form-group">
                <label htmlFor="imageLimit">Number of Images Allowed</label>
                <input
                  type="number"
                  id="imageLimit"
                  value={flatRate.imageLimit}
                  onChange={(e) => handleFlatRateChange('imageLimit', e.target.value)}
                  placeholder="Enter image limit"
                  min="0"
                />
              </div>

              <div className="form-group">
                <label htmlFor="renewalFee">Renewal Fee (optional)</label>
                <div className="input-group">
                  <span className="currency">$</span>
                  <input
                    type="number"
                    id="renewalFee"
                    value={flatRate.renewalFee}
                    onChange={(e) => handleFlatRateChange('renewalFee', e.target.value)}
                    placeholder="Enter renewal fee"
                    min="0"
                    step="0.01"
                  />
                </div>
              </div>

              <div className="form-group">
                <label htmlFor="tax">Tax Rate (%)</label>
                <div className="input-group">
                  <input
                    type="number"
                    id="tax"
                    value={flatRate.tax}
                    onChange={(e) => handleFlatRateChange('tax', e.target.value)}
                    placeholder="Enter tax rate"
                    min="0"
                    max="100"
                    step="0.01"
                  />
                  <span className="percent">%</span>
                </div>
              </div>
            </div>

            <div className="form-actions">
              <button className="save-button">Save Rate Card</button>
              <button className="cancel-button">Cancel</button>
            </div>
          </div>
        </div>
      )}

      {selectedType === 'word' && (
        <div className="rate-card-form">
          <div className="form-section">
            <h2>Word-Based Pricing Configuration</h2>
            <p className="type-description">{wordBased.description}</p>
            
            <div className="use-cases">
              <h3>Common Use Cases:</h3>
              <ul>
                {wordBased.useCases.map((useCase, index) => (
                  <li key={index}>{useCase}</li>
                ))}
              </ul>
            </div>

            <div className="form-fields">
              <div className="form-group">
                <label htmlFor="baseRate">Base Rate</label>
                <div className="input-group">
                  <span className="currency">$</span>
                  <input
                    type="number"
                    id="baseRate"
                    value={wordBased.baseRate}
                    onChange={(e) => handleWordBasedChange('baseRate', e.target.value)}
                    placeholder="Enter base rate"
                    min="0"
                    step="0.01"
                  />
                </div>
              </div>

              <div className="form-group">
                <label htmlFor="includedWords">Included Word Count</label>
                <input
                  type="number"
                  id="includedWords"
                  value={wordBased.includedWords}
                  onChange={(e) => handleWordBasedChange('includedWords', e.target.value)}
                  placeholder="Enter included word count"
                  min="0"
                />
              </div>

              <div className="form-group">
                <label htmlFor="costPerAdditionalWord">Cost per Additional Word</label>
                <div className="input-group">
                  <span className="currency">$</span>
                  <input
                    type="number"
                    id="costPerAdditionalWord"
                    value={wordBased.costPerAdditionalWord}
                    onChange={(e) => handleWordBasedChange('costPerAdditionalWord', e.target.value)}
                    placeholder="Enter cost per word"
                    min="0"
                    step="0.01"
                  />
                </div>
              </div>

              <div className="form-group">
                <label htmlFor="maxWordLimit">Maximum Word Limit</label>
                <input
                  type="number"
                  id="maxWordLimit"
                  value={wordBased.maxWordLimit}
                  onChange={(e) => handleWordBasedChange('maxWordLimit', e.target.value)}
                  placeholder="Enter maximum word limit"
                  min="0"
                />
              </div>

              <div className="form-group">
                <label htmlFor="freeWords">Free Words (Promotional)</label>
                <input
                  type="number"
                  id="freeWords"
                  value={wordBased.freeWords}
                  onChange={(e) => handleWordBasedChange('freeWords', e.target.value)}
                  placeholder="Enter free word count"
                  min="0"
                />
              </div>

              <div className="form-group">
                <label htmlFor="headlineCharge">Headline Charge (optional)</label>
                <div className="input-group">
                  <span className="currency">$</span>
                  <input
                    type="number"
                    id="headlineCharge"
                    value={wordBased.headlineCharge}
                    onChange={(e) => handleWordBasedChange('headlineCharge', e.target.value)}
                    placeholder="Enter headline charge"
                    min="0"
                    step="0.01"
                  />
                </div>
              </div>
            </div>

            <div className="form-actions">
              <button className="save-button">Save Rate Card</button>
              <button className="cancel-button">Cancel</button>
            </div>
          </div>
        </div>
      )}
    </div>
  );
};

export default RateCardTypes; 