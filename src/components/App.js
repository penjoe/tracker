import React from 'react';

//components
import Header from './Header.js';
import TemplateSelectModal from './TemplateSelectModal.js';
import Footer from './Footer.js';

function App() {
  return (
    <div className="app">
      <Header />
      <TemplateSelectModal />
      <Footer />
    </div>
  );
}

export default App;
