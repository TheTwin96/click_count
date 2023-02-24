import './App.css';
import Button from './components/Button';
import FreecodecampLogo from './images/Freecodecamp_Logo.png';

function App() {
  const manageClick = () => {
    console.log("Click");
  }
  const restarCount = () => {
    console.log("Restar");
  }

  return (
    <div className="App">
      <div className="freecodecamp_logo_container">
        <img src={FreecodecampLogo} alt="Freecodecamp's logo" className="freecodecamp_logo" />
      </div>
      <div className="main_container">
        <Button 
          text="Click"
          isClickButton={true}
          manageClick={manageClick}
        />
        <Button 
          text="Reiniciar"
          isClickButton={false}
          manageClick={restarCount}
        />
      </div>
    </div>
  );
}

export default App;
