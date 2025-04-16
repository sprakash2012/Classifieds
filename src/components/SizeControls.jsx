import React, { useState } from 'react';
import './SizeControls.css';

function SizeControls({ onSizeChange }) {
  const [width, setWidth] = useState(8.5);
  const [height, setHeight] = useState(11);

  const handleWidthChange = (e) => {
    const newWidth = parseFloat(e.target.value) || 0;
    setWidth(newWidth);
    onSizeChange({ width: newWidth, height });
  };

  const handleHeightChange = (e) => {
    const newHeight = parseFloat(e.target.value) || 0;
    setHeight(newHeight);
    onSizeChange({ width, height: newHeight });
  };

  return (
    <div className="size-controls">
      <h3>Page Size</h3>
      <div className="size-input-group">
        <label>
          Width (inches):
          <input
            type="number"
            value={width}
            onChange={handleWidthChange}
            min="1"
            max="36"
            step="0.1"
          />
        </label>
      </div>
      <div className="size-input-group">
        <label>
          Height (inches):
          <input
            type="number"
            value={height}
            onChange={handleHeightChange}
            min="1"
            max="36"
            step="0.1"
          />
        </label>
      </div>
      <div className="size-preview">
        <div 
          className="preview-box"
          style={{
            width: `${width * 20}px`,
            height: `${height * 20}px`
          }}
        />
      </div>
    </div>
  );
}

export default SizeControls; 