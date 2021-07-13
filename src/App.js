import logo from './logo.svg';
import './App.css';
import imageInSrc from './meLaughing.jpg';
import myVideo from './mePunching.mp4'

function App() {
  return (
    <div className="App">
      <div style={{border:'1 solid black', maxWidth:'100vw'}}>
        <h1 className="titleRed">Ismail Halouani</h1>
        <br/>
        <img src="/Me-normal.jpg"/>
        <br/>
        <img src={imageInSrc}/>
      </div>
      <video width='320' height='240' controls>
        <source src={myVideo} type="videp/mp4"/>
      </video>
    </div>
  );
}

export default App;
