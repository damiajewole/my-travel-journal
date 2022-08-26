import logo from './logo.svg';
import './App.css';
import Travel from './Components/Travel';
import travelData from './travelData';
import Navbar from './Components/Navbar';
import Footer from './Components/Footer';

function App() {
  const travelElements = travelData.map( item => {
    return < Travel location = {item.location} description = {item.description} 
    key = {item.id} img = {item.coverImg} mapLink = {item.mapLink} date = {item.date} country = {item.country}/>
  })
  // console.log(travelElements)

  return (
    <div>
      < Navbar />
      {travelElements}
      < Footer />
    </div>
  );
}

export default App;
