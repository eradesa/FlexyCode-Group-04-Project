// eslint-disable-next-line no-unused-vars
import React, { createContext, useState }  from 'react';
//import "@coreui/coreui/dist/css/coreui.min.css";
import './App.css';
import { BrowserRouter} from 'react-router-dom';
import Sidebar from './components/global/Sidebar';
import NavRoutes from './components/global/NavRoutes'
import Footerbar from './components/global/Footer';
import Topbar from './components/global/Topbar';


const App = () => {
  
  const [isDarkMode, setDataFromChild] = useState('');
  const [isOpen, setDataFromChildsetisOpen] = useState(true);

  // capture data from Child - side bar
  const handleDataFromChild = (isDarkMode) => {
    setDataFromChild(isDarkMode);
   
  };
  // capture data from Child - side bar
  const handleDataFromChildOpen = (isOpen) => {
    
    setDataFromChildsetisOpen(isOpen);
  };

  
  return (
    
    <BrowserRouter>
      <div className={isDarkMode ? 'container-dark-mode' : 'container'}>        
        <Sidebar sendDataToParent={handleDataFromChild} sendDataToParentOpen={handleDataFromChildOpen}/>
                
        <div className={isDarkMode ? 'main-container-dark-mode' : 'main-container'}>
          <div className={isDarkMode ? 'head-dark-mode' : 'head'}>
            <Topbar isOpen={isOpen}/>
          </div>
        
          <div className={isDarkMode ? 'page-content-dark-mode' : 'page-content'}>
            <NavRoutes isDarkMode={isDarkMode}/>
          </div>
          <div className={isDarkMode ? 'foot-dark-mode' : 'foot'}>
            <Footerbar title={"Copyright © EVIDIO | Powered by Flexy Code"}  />
          </div>
          
        </div>        
      </div>
    </BrowserRouter>
    
  );
};

export default App;


