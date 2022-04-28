import logo from './logo.svg';
import './App.css';
import Navbar from "./components/Navbar"
import styles from "./components/style.module.css"
import LeftRules from './components/LeftRules';
import RightDefaultRules from './components/RightDefaultRules';

function App() {
  return (
    <div className="App">
      <Navbar />
      <div className={styles.boxAlign}>
        <LeftRules />
        <RightDefaultRules />
      </div>
    </div>
  );
}

export default App;
