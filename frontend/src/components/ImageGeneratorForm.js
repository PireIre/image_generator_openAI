import React, { useState } from 'react';
import './ImageGeneratorForm.css';
import ricky from "../ricky.png"

function ImageGeneratorForm() {
  const [prompt, setPrompt] = useState('');
  const [imageUrl, setImageUrl] = useState('');
  const [loading, setLoading] = useState(false); // add loading state

  const handleSubmit = async (e) => {
    e.preventDefault();
    setLoading(true); // set loading to true when submitting the form
    try {
      const response = await fetch('openai/generateimage', {
      
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify({ prompt }),
      });
  
      if (response.ok) {
        const { data } = await response.json();
        setLoading(false); // set loading to false when the response is received
        setImageUrl(data);

      } else {
        throw new Error('Something went wrong');
      }

    } catch (error) {

      console.log(error);
      setLoading(false); // set loading to false when the response is received
      setImageUrl(ricky);

    }
  };

  return (
    <div className="image-generator-form">
        <form onSubmit={handleSubmit}>
          <label className="image-generator-form__label">
            Prompt:
            <input className="image-generator-form__input" type="text" value={prompt} onChange={(e) => setPrompt(e.target.value)} />
          </label>
          <button className="image-generator-form__button" type="submit" disabled={loading}> {loading ? "Generating Image..." : "Generate Image"}</button>
        </form>
        <div className="loading-spinner-container">
        {loading && <div className="loading-spinner"></div>}
        {imageUrl && <img className="image-generator-form__image" src={imageUrl} alt="generated-ai-pic" />}
      </div>
    </div>

  );
}

export default ImageGeneratorForm;
