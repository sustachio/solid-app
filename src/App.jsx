import { Routes, Route } from "solid-app-router"

import styles from './App.module.scss';
import Home from './pages/Home'
import About from './pages/About'

import Header from './components/Header';

function App() {
  return (
    <div id={styles.app}>
      <Header />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/about" element={<About />} />
      </Routes>
    </div>)
  ;
}

export default App;
