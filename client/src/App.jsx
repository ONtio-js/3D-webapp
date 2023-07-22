import React from 'react'
import CanvasModel from './canvas';
import Customizer from './pages/Customizer';
import Home from './pages/Home';
import { useSnapshot } from 'valtio';

import state from './store';
function App() {
  const snap = useSnapshot(state);
  return (
    <main className='app transition-all ease-in'>
      <Home />
      {!snap.intro && (
        <CanvasModel />
      )}
      
      <Customizer />
    </main>
  )
}

export default App