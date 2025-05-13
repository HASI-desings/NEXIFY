import React, { useState } from 'react';
import './App.css';

const tabs = [
  { name: 'Bronze', time: '60 minutes', return: 2 },
  { name: 'Silver', time: '24 hours', return: 15 },
  { name: 'Gold', time: '7 days', return: 30 },
  { name: 'Platinum', time: '15 days', return: 150 },
  { name: 'Diamond', time: '30 days', return: 300 },
];

function App() {
  const [selectedTab, setSelectedTab] = useState(tabs[0]);
  const [inputAmount, setInputAmount] = useState('');
  const [outputAmount, setOutputAmount] = useState('');

  const calculateReturn = () => {
    if (inputAmount) {
      const returnAmount = (parseFloat(inputAmount) * (1 + selectedTab.return / 100)).toFixed(2);
      setOutputAmount(returnAmount);
    } else {
      setOutputAmount('');
    }
  };

  return (
    <div className="App">
      <header className="header">
        <h1>NEXIFY</h1>
      </header>
      <div className="tabs">
        {tabs.map((tab) => (
          <button
            key={tab.name}
            className={`tab ${selectedTab.name === tab.name ? 'active' : ''}`}
            onClick={() => setSelectedTab(tab)}
          >
            {tab.name}
          </button>
        ))}
      </div>
      <div className="tab-content">
        <h2>{selectedTab.name}</h2>
        <p>Time Required: {selectedTab.time}</p>
        <p>Return: {selectedTab.return}%</p>
        <div className="calculator">
          <input
            type="number"
            placeholder="Enter initial amount"
            value={inputAmount}
            onChange={(e) => setInputAmount(e.target.value)}
          />
          <button onClick={calculateReturn}>Calculate</button>
          {outputAmount && <p>Output: ${outputAmount}</p>}
        </div>
      </div>
    </div>
  );
}

export default App;