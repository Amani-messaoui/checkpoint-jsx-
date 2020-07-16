import React from 'react';
import './App.css';
import './style.css';
import womenImage from "./second.jpeg";
function App() {
  return (
    <div className="App">
      <div style={{border:"solid 1px black", maxWidth:"100vw"}}>

        <h1 className="title red">My web Page</h1>
       <div className="image">
        <img src="/first.jpeg" width="400px" /> 
        <img src={womenImage} width ="400px"/>
        </div>
      </div>

      <video width="320" height="240" controls>

        <source src="myVideo.mp4" type="video/mp4" />

      </video>
    </div>
  );
}

export default App;
