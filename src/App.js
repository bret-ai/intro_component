import './App.css';
import LeftComponent from './components/LeftComponent';
import RightComponent from './components/RightComponent';

function App() {
  return (
    <div className="container">
        <div className="left">
          <LeftComponent />
        </div>
        <div className="right">
          <RightComponent />
        </div>
    </div>
  );
}

export default App;
