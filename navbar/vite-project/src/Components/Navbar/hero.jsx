import React from 'react';
import Popup from './Popup';

const hero = () => {
    return (
        <div>
            <div
  className="hero h-[550px]"
  style={{
    backgroundImage: "url(./herobg.jpg",
  }}>
  <div className="hero-overlay"></div>
  <div className="hero-content text-neutral-content text-center">
    <div className="max-w-md">
      <h1 className="mb-5 text-5xl font-bold">সবাইকে</h1>
      <p className="mb-5">
      নববর্ষের নতুন ভোরে, শুরু হোক সম্ভাবনার নতুন গল্প!
      
      </p>
      <button className="btn btn-primary">শুভ বাংলা নববর্ষ ১৪৩২ ✨</button>
    </div>
  </div>
</div>
        </div>
    );
};

export default hero;