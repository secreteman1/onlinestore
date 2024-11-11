
import './App.css';

import Header from './Components/Header';
import Main from './Components/Main';
import Footer from './Components/Footer';
import Puzzle from './Components/Puzzle'; 
import { useState } from 'react';
import Endpart from './Components/Endpart';

function App() {
  const [isPuzzleSolved, setIsPuzzleSolved] = useState(false);

  return (
    <div>
      {!isPuzzleSolved ? (
        <Puzzle onSolve={() => setIsPuzzleSolved(true)} /> 
      ) : (
        <>
          <Header />
          <div className="flex flex-col gap-2 justify-center items-center"> 
            <Main />
          </div>
            <Endpart/>
          <Footer />
        </>
      )}
    </div>
  );
}

export default App;
