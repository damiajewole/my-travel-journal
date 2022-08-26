// import logo from './logo.svg';
// import React from 'react';
// import './App.css';
// import Travel from './Travel';
// import travelData from './travelData';

function App() {
  const travelElements = travelData.map( travel => {
    return (
    < Travel 
        key = {travel.id} 
        img = {travel.coverImg}
        country = {travel.country}
        mapLink = {travel.mapLink}
        location = {travel.location}
        date = {travel.date}
        description = {travel.description}
    />
    )
  })

  return (
    <div className="App">
      {/* < Navbar /> */}
      {travelElements}
    </div>
  );
}

// export default App;
