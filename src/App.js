import './App.css'

function App() {
  return (
    <div className="App">
      <div className="header" id="myHeader">
        <h2><strong>Keep in touch &#128519;, all the images will be posted here</strong></h2>
      </div>
      <div className="gallery">
        <a target="_blank" href="./images/image_1.jpeg">
          <img src="./images/image_1.jpeg" alt="Cinque Terre" width="600" height="400"/>
        </a>
      
      </div>

      <div className="gallery">
        <a target="_blank" href="./images/image_2.jpeg">
          <img src="./images/image_2.jpeg" alt="Forest" width="600" height="400"/>
        </a>
        
      </div>

      <div className="gallery">
        <a target="_blank" href="./images/image_3.jpeg">
          <img src="./images/image_3.jpeg" alt="Northern Lights" width="600" height="400"/>
        </a>
        
      </div>

      <div className="gallery">
        <a target="_blank" href="./images/image_4.jpeg">
          <img src="./images/image_4.jpeg" alt="Mountains" width="600" height="400"/>
        </a>
        
      </div>
    </div>
  );
}

export default App;
