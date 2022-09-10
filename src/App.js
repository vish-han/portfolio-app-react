import About from "./components/About";
import Contact from "./components/Contact";
import Home from "./components/Home";
import Navbar from "./components/Navbar";
import Skills from "./components/Skills";
import Work from "./components/Work";
import './index.css';
import React from "react";


function App() {
  const [loading,setLoading] = React.useState(false)
  React.useEffect(()=>{
setLoading(true)
setTimeout(()=>{
setLoading(false)
},1000)
  },[])
  return (
  
    <div>
    {  loading? (
        <div className="loader-container">
        <div className="spinner"></div>
        
      </div> ) : (
        <div>
      <Navbar />
      <Home />
      <About />
      <Skills />
      <Work />
      <Contact />
      </div>
)}
    </div>
  );
}

export default App;
