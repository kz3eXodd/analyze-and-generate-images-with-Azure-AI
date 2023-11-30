import React, { useState } from 'react';


function App() {
  const [imageUrl, setImageUrl] = useState('');

  const handleUrlChange = (event) => {
    setImageUrl(event.target.value);
  };

  const handleAnalysisClick = () => {
    // Perform image analysis logic here
    console.log('Image analysis triggered');
  };

  const handleGenerationClick = () => {
    // Perform image generation logic here
    console.log('Image generation triggered');
  };

  return (
    <div>
      <title>Computer Vision</title>
      <div>
        <h1>Computer Vision</h1>
        <h2>Image Analysis</h2>
        <input type="text" value={imageUrl} onChange={handleUrlChange} placeholder="Enter image URL, or type prompt" />
        <div>
          <button onClick={handleAnalysisClick}>Analyze Image</button>
          <button onClick={handleGenerationClick}>Generate Image</button>
        </div>
      </div>
    </div>
  );
}

export default App;
