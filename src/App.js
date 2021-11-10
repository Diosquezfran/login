import './App.css';
import LeftSide from './components/LeftSide/LeftSide';
import RightSide from './components/RightSide/RightSide';

function App() {
  return (
    <div className="row bg-white app">
        <div className="col-lg-6 col-md-6 col-sm-6">
          <LeftSide />
        </div>
        <div className="col-lg-6 col-md-6 col-sm-6">
          <RightSide />
        </div>
      </div>
  );
}

export default App;
