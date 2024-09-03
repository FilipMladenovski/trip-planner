import React from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import { CountryProvider } from './context/CountryContext';
import Header from './components/Header';
import Footer from './components/Footer';
import Home from './components/Home';
import ContinentContainer from './components/ContinentContainer';
import TripPlan from './components/TripPlan';

const App: React.FC = () => {
  return (
    <CountryProvider>
      <Router>
        <div className="flex flex-col min-h-screen">
          <Header />
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/europe" element={<ContinentContainer region="Europe" />} />
            <Route path="/asia" element={<ContinentContainer region="Asia" />} />
            <Route path="/africa" element={<ContinentContainer region="Africa" />} />
            <Route path="/americas" element={<ContinentContainer region="Americas" />} />
            <Route path="/oceania" element={<ContinentContainer region="Oceania" />} />
            <Route path="/trip-plan" element={<TripPlan />} />
          </Routes>
          <Footer />
        </div>
      </Router>
    </CountryProvider>
  );
};

export default App;
