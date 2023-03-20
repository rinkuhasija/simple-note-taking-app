import { useState, useEffect } from 'react';
import './App.css'
import CategoryNameChip from './components/CategoryNameChip/CategoryNameChip';
import LeftSection from './components/LeftSection/LeftSection';
import RightSection from './components/RightSection/RightSection';



function App() {
  return (
    <div>

      <div className='container'>
        <LeftSection />
        <RightSection />
      </div>

    </div>
  )
}

export default App
