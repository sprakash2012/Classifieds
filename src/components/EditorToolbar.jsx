import React from 'react';
import './EditorToolbar.css';

function EditorToolbar() {
  return (
    <div className="editor-toolbar">
      <div className="toolbar-group">
        <button className="toolbar-button" title="Bold">
          <span className="toolbar-icon">B</span>
        </button>
        <button className="toolbar-button" title="Italic">
          <span className="toolbar-icon">I</span>
        </button>
        <button className="toolbar-button" title="Underline">
          <span className="toolbar-icon">U</span>
        </button>
      </div>
      
      <div className="toolbar-group">
        <button className="toolbar-button" title="Heading 1">
          <span className="toolbar-icon">H1</span>
        </button>
        <button className="toolbar-button" title="Heading 2">
          <span className="toolbar-icon">H2</span>
        </button>
        <button className="toolbar-button" title="Paragraph">
          <span className="toolbar-icon">P</span>
        </button>
      </div>

      <div className="toolbar-group">
        <button className="toolbar-button" title="Bullet List">
          <span className="toolbar-icon">•</span>
        </button>
        <button className="toolbar-button" title="Numbered List">
          <span className="toolbar-icon">1.</span>
        </button>
        <button className="toolbar-button" title="Quote">
          <span className="toolbar-icon">"</span>
        </button>
      </div>

      <div className="toolbar-group">
        <button className="toolbar-button" title="Insert Image">
          <span className="toolbar-icon">🖼️</span>
        </button>
        <button className="toolbar-button" title="Insert Link">
          <span className="toolbar-icon">🔗</span>
        </button>
      </div>
    </div>
  );
}

export default EditorToolbar; 