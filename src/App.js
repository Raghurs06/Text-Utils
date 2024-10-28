import "./App.css";
// import About from "./components/About";
import Navbar from "./components/Navbar";
import TextForm from "./components/TextForm"
import React,{useState} from "react";
 


function App() {
  const [mode, setMode] = useState("dark");
  const toggleMode = () => {
    if(mode === "light") {
      setMode("dark");
    }else{
      setMode("light");
    }
  }

  return (
    <>
     <Navbar title="TextUtils" aboutText = "About Us" mode = {mode} toggleMode = {toggleMode} />
     <div className="container my-3">
     <TextForm heading = "Enter Your Text to analyze"/>
     {/* <About/> */}
     </div>
    </>
  );
}

export default App;
