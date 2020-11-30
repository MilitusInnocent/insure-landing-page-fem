import React from 'react';
import { Navbar, Header, Different, CTA, Footer } from './components';
import './App.scss';


const App = () => {
  return (
    <div className="App">
      <Navbar />
      <Header />
      <Different />
      <CTA />
      <Footer />
    </div>
  );
}

export default App;
