import { useState } from 'react';
import './HtmlEditor.css';
import Settings from './Settings';

const HtmlEditor = () => {
  const [htmlContent, setHtmlContent] = useState('<h1>Hello World</h1>\n<p>Start editing your HTML here...</p>');
  const [isDarkMode, setIsDarkMode] = useState(false);
  const [showSettings, setShowSettings] = useState(false);

  const handleContentChange = (e) => {
    setHtmlContent(e.target.value);
  };

  const toggleDarkMode = () => {
    setIsDarkMode(!isDarkMode);
  };

  return (
    <>
      <div className={`html-editor-container ${isDarkMode ? 'dark-mode' : ''}`}>
        <div className="editor-header">
          <h2>HTML Editor</h2>
          <div className="controls">
            <button 
              className="settings-button"
              onClick={() => setShowSettings(true)}
              title="Open Settings"
            >
              ⚙️
            </button>
            <button 
              className="mode-toggle"
              onClick={toggleDarkMode}
              title={isDarkMode ? 'Switch to Light Mode' : 'Switch to Dark Mode'}
            >
              {isDarkMode ? '☀️' : '🌙'}
            </button>
          </div>
        </div>
        <div className="editor-content">
          <div className="editor-section">
            <div className="section-header">
              <h3>Code</h3>
              <span className="file-type">HTML</span>
            </div>
            <textarea
              value={htmlContent}
              onChange={handleContentChange}
              className="html-editor"
              spellCheck="false"
              placeholder="Write your HTML here..."
            />
          </div>
          <div className="preview-section">
            <div className="section-header">
              <h3>Preview</h3>
              <span className="file-type">Live</span>
            </div>
            <div 
              className="html-preview"
              dangerouslySetInnerHTML={{ __html: htmlContent }}
            />
          </div>
        </div>
      </div>
      {showSettings && <Settings onClose={() => setShowSettings(false)} />}
    </>
  );
};

export default HtmlEditor; 