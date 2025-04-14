import './App.css';
import Navbar from './Components/Navbar/navbar';
import Hero from './Components/Navbar/hero';
import Card from './Components/Main/Card';
import { useEffect, useState } from 'react';
import Footer from './Components/Footer/Footer';

function App() {
  const [cardData, setCardData] = useState([]);

  useEffect(() => {
    fetch('./data.json')
      .then(res => res.json())
      .then(newData => setCardData(newData))
      .catch(err => console.error("Failed to load card data", err));
  }, []);

  return (
    <>
      <Navbar />
      <Hero />
      <div className="md:grid md:grid-cols-3 p-10 gap-5 items-center bg-gradient-to-r from-yellow-100 to-blue-200">
        {cardData.map((card, index) => (
          <Card key={index} cardLoad={card} />
        ))}
      </div>
      <Footer></Footer>
    </>
  );
}

export default App;
