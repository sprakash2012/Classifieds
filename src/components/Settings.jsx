import { useState, useEffect } from 'react';
import './Settings.css';
import Chat from './Chat';

const Settings = ({ onClose }) => {
  const [apiKey, setApiKey] = useState('');
  const [isValid, setIsValid] = useState(false);
  const [showChat, setShowChat] = useState(false);

  useEffect(() => {
    // Load API key from environment variable
    const key = import.meta.env.VITE_OPENAI_API_KEY;
    if (key) {
      setApiKey(key);
      setIsValid(true);
    }
  }, []);

  const handleApiKeyChange = (e) => {
    const newKey = e.target.value;
    setApiKey(newKey);
    setIsValid(newKey.startsWith('sk-'));
  };

  return (
    <div className="settings-container">
      <div className="settings-header">
        <h2>Settings</h2>
        <button className="close-button" onClick={onClose}>×</button>
      </div>
      <div className="settings-section">
        <div className="api-key-input">
          <label htmlFor="api-key">OpenAI API Key</label>
          <input
            type="password"
            id="api-key"
            value={apiKey}
            onChange={handleApiKeyChange}
            placeholder="Enter your OpenAI API key"
            className={isValid ? 'valid' : 'invalid'}
          />
          {!isValid && apiKey && (
            <span className="error-message">Invalid API key format</span>
          )}
        </div>
        <div className="api-key-status">
          <span className={`status-indicator ${isValid ? 'valid' : 'invalid'}`}>
            {isValid ? '✓ Valid' : '✗ Invalid'}
          </span>
        </div>
        {isValid && (
          <button 
            className="test-button"
            onClick={() => setShowChat(true)}
          >
            Test API Key
          </button>
        )}
      </div>
      {showChat && <Chat onClose={() => setShowChat(false)} />}
    </div>
  );
};

export default Settings; 